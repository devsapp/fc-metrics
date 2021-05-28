import moment from "moment";
import _ from "lodash";
// import { getRpcTypeInfoList } from "../services/traceServices";
/*
 * 通过rpcId把数组转换成tree型结构
 * */ import $i18n from "./i18n";

export function convertRpcToTree(list) {
  let tree = [],
    endTime = 0,
    startTime = 0,
    minLevel = Infinity,
    len = list.length;

  // //修复集团内的情况
  // function fixGroup(node) {
  //   //集团内有MQ和notify，pid需要补充一位
  //   let pid = node.rpcId;
  //   // if (isInGroup) {
  //   //   if (node.rpcType === 13 || node.rpcType === 3) {
  //   //     pid = pid + '.1';
  //   //   }
  //   // }
  // }

  if (len > 1) {
    //排序并找出根节点的其实深度minLevel
    //保证数组中第(N-1)只能是第(N)的兄弟或者父亲
    list.sort(function (a, b) {
      // fixGroup(a);
      // fixGroup(b);
      let i = 0,
        m,
        n,
        aLevels = a.rpcId.split("."),
        bLevels = b.rpcId.split("."),
        len = Math.min(aLevels.length, bLevels.length);
      a.levels = aLevels;
      b.levels = bLevels;

      if (minLevel > len) {
        minLevel = len;
      }
      while (i < len) {
        m = parseInt(aLevels[i]);
        n = parseInt(bLevels[i]);
        if (m > n) {
          return 1;
        } else if (n > m) {
          return -1;
        }
        i += 1;
      }
      return aLevels.length > bLevels.length ? 1 : -1;
    });
  } else if (len > 0) {
    let d = list[0];
    d.levels = d.rpcId.split(".");
    minLevel = d.levels.length;
  }

  function findParent(child, list, start) {
    start -= 1;
    while (start > -1) {
      let d = list[start];
      if (d._deep < child._deep) {
        return d;
      }
      start -= 1;
    }
  }

  //构造树
  list.forEach(function (d, i) {
    let levels = (d.rpcId || "").split(".");
    d._deep = d.levels.length - minLevel;

    if (d._deep > 0) {
      let p = findParent(d, list, i);
      if (p) {
        if (!p.children) {
          p.children = [];
        }
        p.children.push(d);
      }
    } else {
      tree.push(d);
    }

    delete d.levels;
    //计算最大最小时间点
    if ("logTime" in d && "span" in d) {
      let s = new Date(d.logTime).getTime(),
        e = s + d.span;
      if (!startTime || s < startTime) {
        startTime = s;
      }
      if (e > endTime) {
        endTime = e;
      }
    }
  });
  return { tree, startTime, endTime };
}

export function convertTree(list) {
  let tree = [],
    endTime = 0,
    startTime = 0;
  function findTreeNode(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children && arr[i].children.length) {
        arr[i]._node = i + 1;
        findTreeNode(arr[i].children)
      } else {
        arr[i]._node = 0;
      }
    }
  }
  findTreeNode(list)
  //构造树
  list.forEach(function (d, i) {
    tree.push(d);
    //计算最大最小时间点
    if ("Timestamp" in d && "Duration" in d) {
      let s = new Date(parseInt(d.Timestamp)).getTime(),
        e = s + d.Duration;
      if (!startTime || s < startTime) {
        startTime = s;
      }
      if (e > endTime) {
        endTime = e;
      }
    }
  });
  return { tree, startTime, endTime };
}

//有一个children的不缩进
export function convertTreeOne(list) {
  let tree = [],
    endTime = 0,
    startTime = 0,
    formatTree = [],
    formatTreeParentIdData = []
  function findTreeNode(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children && arr[i].children.length) {
        arr[i]._node = i + 1;
        let obj = JSON.parse(JSON.stringify(arr[i]));
        obj.children = []
        formatTree.push(obj)
        findTreeNode(arr[i].children)
      } else {
        arr[i]._node = 0;
      }
    }
  }
  findTreeNode(list)

  let parentIdData = [] //获取数据的parentId
  for (let i = 0; i < formatTree.length; i++) {
    let temp = formatTree[i];
    parentIdData.push(temp.parentId);
  }

  function getWordCnt() {
    return parentIdData.reduce(function (prev, next) {
      prev[next] = (prev[next] + 1) || 1;
      return prev;
    }, {});
  }
  let data = getWordCnt(); // 数据的parentId去重
  let parentIdNum = []; // 获取大于1的parentId
  for (let key in data) {
    if (data[key] > 1) {
      parentIdNum.push(key)
    }
  }
  let formatTreeData = []; // 获取大于1的parentId的数据
  for (let i = 0; i < formatTree.length; i++) {
    let obj = formatTree[i];
    for (let j = 0; j < parentIdNum.length; j++) {
      if (obj.parentId === Number(parentIdNum[j])) {
        formatTreeData.push(obj)
      }
    }
  }
  for (let i = 0; i < formatTree.length; i++) {
    let temp = formatTree[i];
    for (let j = 0; j < formatTreeData.length; j++) {
      let obj = formatTreeData[j]
      if (temp.id === obj.parentId) {
        temp.children.push(obj)
      }
    }
    formatTreeParentIdData.push(temp)
  }

  //构造树
  formatTreeParentIdData.forEach(function (d, i) {
    tree.push(d);
    //计算最大最小时间点
    if ("logTime" in d && "span" in d) {
      let s = new Date(d.logTime).getTime(),
        e = s + d.span;
      if (!startTime || s < startTime) {
        startTime = s;
      }
      if (e > endTime) {
        endTime = e;
      }
    }
  });
  return { tree, startTime, endTime };
}

export function test(tree, arr) {
  if (Array.isArray(tree) && tree.length > 0) {
    for (let i = 0; i < tree.length; i++) {
      let temp = tree[i]
      let tempData = JSON.parse(JSON.stringify(temp))
      tempData.children = [];
      var index = 0;
      if (arr.length > 0) {
        index = arr.length;
      }
      arr[index] = tempData
      if (temp.children.length > 1) {
        var arr1 = [];
        test(temp.children, arr1);
        arr[index].children = arr1;
      } else {
        test(temp.children, arr)
      }
    }
  }
}


export function dateFormat(date, format) {
  format = format || "YYYY-MM-DD HH:mm:ss.SSS";
  let str = date + "";
  let newDate = date;
  if (str.length == 16) {
    newDate = str.substr(0, 13) - 0;
  }
  return moment(newDate).format(format);
}

let rpcTypes = [
  {
    code: -1,
    name: '任意'
  },
  {
    code: 0,
    name: 'HTTP入口'
  },
  {
    code: 1,
    name: '调用 HSF'
  },
  {
    code: 2,
    name: '提供 HSF'
  },
  {
    code: 4,
    name: '调用 TDDL',
  },
  {
    code: 5,
    name: '调用 TAI'
  },
  {
    code: 13,
    name: "发送 METAQ"
  },
  {
    code: 252,
    name: "接收 METAQ"
  },
  {
    code: 3,
    name: "发送 NOTIFY"
  },
  {
    code: 254,
    name: "接收 NOTIFY"
  }
];


// getRpcTypeInfoList({
//   method: "POST"
// }).then(function (res) {
//   if (res && res.data && _.isArray(res.data.data)) {
//     rpcTypes = res.data.data;
//   }
// });

export function getRpcName(code) {
  let i = 0,
    l = rpcTypes.length;
  for (; i < l; i += 1) {
    if (rpcTypes[i].code === code) {
      return rpcTypes[i].name;
    }
  }
  return $i18n.get({ id: "xtrace2.src.utils.dataConvert.Unknown", dm: "未知" });
}
