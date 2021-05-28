"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashMap = exports.intlTemp = exports.strTemp = exports.toCopy = exports.decoratorFactory = exports.noop = exports.genID = exports.formattedNumber = exports.getAlarmBaseUrl = exports.parseSearch = exports.getAppSiteType = exports.getAppInfo = exports.getAppName = exports.sortData = exports.createObj = exports.getArrKeySum = exports.isSameMoments = exports.formatDimChartDateData = exports.exceptionFormatChartData = exports.formatChartData = exports.formatMemYAxes = exports.format1000YAxes = exports.formatMinuteYAxes = exports.formatterRt = exports.getFixed = exports.getMinMax = exports.i18nDocLinkFun = exports.getCookieValue = void 0;
const i18n_1 = __importDefault(require("../i18n")); // import request, { getRequest, postRequest } from '../utils/request';
const messages_1 = __importDefault(require("../../../../locales/messages"));
/**
 * 获取诊断详细信息
 * @param {*} params
 */
function getCookieValue(key) {
    if (typeof key !== "string") {
        return new Error("getCookieValue Param type string");
    }
    let arr;
    const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
}
exports.getCookieValue = getCookieValue;
/**
 * 获取诊断详细信息
 * @param {*} params
 */
function i18nDocLinkFun(key, def) {
    const docs = window.ARMS_DOC_LINKS || {};
    const test = docs[key];
    return docs[key] || def;
}
exports.i18nDocLinkFun = i18nDocLinkFun;
/**
 * 获取由多个对象构成的数组中指定key的最大值与最小值
 * @param {*} params
 */
exports.getMinMax = function (arr, key) {
    let newArr = arr.map(item => {
        let val = item[key];
        if (isNaN(val)) {
            val = 0;
        }
        return val.toFixed(exports.getFixed(val)) - 0;
    });
    return [Math.min.apply(null, newArr), Math.max.apply(null, newArr)];
};
/**
 * 获取小数点保留位数
 * @param {*} params
 */
exports.getFixed = val => {
    let n = (val - parseInt(val, 10)) * 100;
    if (n > 10) {
        return 1;
    }
    if (n > 1) {
        return 2;
    }
    return 0;
};
//格式化响应时间
exports.formatterRt = value => {
    let val = 0;
    if (!isNaN(value)) {
        if (value >= 3600000) {
            val = value / 3600000;
            return val.toFixed(exports.getFixed(val)) + "h";
        }
        else if (value >= 60000) {
            val = value / 60000;
            return val.toFixed(exports.getFixed(val)) + "min";
        }
        else if (value >= 1000) {
            val = value / 1000;
            return val.toFixed(exports.getFixed(val)) + "s";
        }
        else {
            val = value - 0;
            return val.toFixed(exports.getFixed(val)) + "ms";
        }
    }
    return value;
};
// 根据查询时间段格式化对应单位
exports.formatMinuteYAxes = dimValue => {
    let val = 0;
    let time = "";
    if (!isNaN(dimValue)) {
        if (dimValue >= 86400) {
            val = dimValue / 86400;
            time = i18n_1.default.get({ id: "xtrace2.src.utils.util.Day", dm: "日" });
        }
        else if (dimValue >= 3600) {
            val = dimValue / 3600;
            time = i18n_1.default.get({ id: "xtrace2.src.utils.util.AnArcane", dm: "时" });
        }
        else if (dimValue >= 60) {
            val = dimValue / 60;
            time = i18n_1.default.get({ id: "xtrace2.src.utils.util.Points", dm: "分" });
        }
        else if (dimValue >= 1) {
            val = dimValue / 1;
            time = i18n_1.default.get({ id: "xtrace2.src.utils.util.Seconds", dm: "秒" });
        }
        if (val === 1) {
            val = "";
        }
        let tmp = "/" + val;
        return tmp + time;
    }
    return dimValue ? dimValue : "";
};
// count单位转换
exports.format1000YAxes = dimVal => {
    // K、M、G、T分别表示Kilo（10³）、Mega（10⁶）、Giga（10⁹）、Tera（10¹²）
    let dimValue = dimVal || 0;
    if (typeof dimValue === "string") {
        dimValue = parseFloat(dimVal);
    }
    dimValue = parseFloat(dimValue.toFixed(4));
    let val = 0;
    if (!isNaN(dimValue)) {
        if (dimValue >= 10000000000000) {
            val = dimValue / 1000000000000;
            return val.toFixed(exports.getFixed(val)) + "T";
        }
        else if (dimValue >= 10000000000) {
            val = dimValue / 1000000000;
            return val.toFixed(exports.getFixed(val)) + "G";
        }
        else if (dimValue >= 10000000) {
            val = dimValue / 1000000;
            return val.toFixed(exports.getFixed(val)) + "M";
        }
        else if (dimValue >= 10000) {
            val = dimValue / 1000;
            return val.toFixed(exports.getFixed(val)) + "K";
        }
        else if (dimValue < 0) {
            return 0;
        }
    }
    return dimValue;
};
exports.formatMemYAxes = dimValue => {
    // 千用K是国际通用的,表示前缀Kilo
    // 同理M表示百万就是Million（按照国际单位制是Mega）
    // B表示10亿就是Billion
    var val = 0;
    if (!isNaN(dimValue)) {
        if (dimValue >= 1073741824) {
            val = dimValue / 1073741824;
            return val.toFixed(exports.getFixed(val)) + "G";
        }
        else if (dimValue >= 1048576) {
            val = dimValue / 1048576;
            return val.toFixed(exports.getFixed(val)) + "M";
        }
        else if (dimValue >= 1024) {
            val = dimValue / 1024;
            return val.toFixed(exports.getFixed(val)) + "K";
        }
    }
    return dimValue;
};
// 格式化图表数据,格式化为[{name:'响应时间',data:[[x,y]]}]这样的格式
//  data: 数组, name：图例名称, y：y轴, x: x轴, alias: {} 有时候处理国际化会用到
exports.formatChartData = (data, name, y, x = "date", alias) => {
    if (!data || !data.length) {
        return;
    }
    let arr = [];
    let obj = {};
    let max = 0;
    data.map(item => {
        const xValue = item[x] || 0;
        const yValue = item[y] || 0;
        const type = item[name] || name;
        if (xValue > max) {
            max = xValue;
        }
        if (!obj[type]) {
            obj[type] = [[xValue, yValue]];
        }
        else {
            obj[type].push([xValue, yValue]);
        }
    });
    if (alias) {
        for (let key in obj) {
            arr.push({ name: alias[key], data: obj[key], max });
        }
    }
    else {
        for (let key in obj) {
            arr.push({ name: key, data: obj[key], max });
        }
    }
    return arr;
};
// 格式化图表数据,格式化为[{name:'响应时间',data:[[x,y]]}]这样的格式
//  data: 数组, name：图例名称, y：y轴, x: x轴, alias: {} 有时候处理国际化会用到
exports.exceptionFormatChartData = (data, name, y, x = "date") => {
    if (!data || !data.length) {
        return;
    }
    let arr = [];
    let obj = {};
    let max = 0;
    data.map(item => {
        const xValue = item[x] || 0;
        const yValue = item[y] || 0;
        const type = item[name] || name;
        if (yValue === 0) {
            return;
        }
        if (xValue > max) {
            max = xValue;
        }
        if (!obj[type]) {
            obj[type] = [[xValue, yValue]];
        }
        else {
            obj[type].push([xValue, yValue]);
        }
    });
    for (let key in obj) {
        arr.push({ name: key, data: obj[key], max });
    }
    return arr;
};
exports.formatDimChartDateData = (ds = {}, options = {}) => {
    let dims = ds.dims;
    let dateKey = ds.dateKey;
    let meas = options.measures || ds.measures;
    let multiMea = meas.length > 1;
    let data = [];
    let dataMap = {};
    let { formatName } = options;
    function insert(key, mea, d) {
        let item = dataMap[key];
        if (!item) {
            let name = key;
            if (formatName) {
                name = formatName(key, mea, d);
            }
            item = dataMap[key] = {
                key,
                name,
                data: []
            };
            data.push(item);
        }
        item.data.push([d[dateKey], d[mea]]);
    }
    ds.data.forEach((d, i) => {
        let keys = [];
        dims.forEach(dim => {
            keys.push(d[dim]);
        });
        let keyName = keys.join("-");
        if (multiMea) {
            meas.forEach((mea, i) => {
                insert(keyName ? keyName + "-" + mea : mea, mea, d);
            });
        }
        else {
            let mea = meas[0];
            insert(keyName || mea, meas[0], d);
        }
    });
    return data;
};
// var ddd = formatDimChartData(data, {
//    measures:['count']
//   formatName: function (dimName, mea, data) {
//     return mea
//   },
// });
exports.isSameMoments = (a = [], b = []) => {
    if (a.length !== b.length)
        return false;
    let i = 0, len = a.length;
    for (; i < len; i += 1) {
        if (!a[i].isSame(b[i])) {
            return false;
        }
    }
    return true;
};
exports.getArrKeySum = (data, ...keys) => {
    let arr = new Array(keys.length).fill(0);
    if (!data.length) {
        return arr;
    }
    data.map(item => {
        keys.map((key, index) => {
            arr[index] += item[key] - 0 || 0;
        });
    });
    if (arr.length > 1) {
        return arr;
    }
    else {
        return arr[0];
    }
};
exports.createObj = (str, value) => {
    const keys = str.split(".");
    let obj = {};
    keys.reduce((pre, cur, i) => {
        if (i !== keys.length - 1) {
            pre[cur] = {};
            return pre[cur];
        }
        else {
            pre[cur] = value;
            return pre;
        }
    }, obj);
    return obj;
};
exports.sortData = (data, sortKey, sort) => {
    if (sort == "desc") {
        data.sort(function (x, y) {
            return y[sortKey] - x[sortKey];
        });
    }
    else {
        data.sort(function (x, y) {
            return x[sortKey] - y[sortKey];
        });
    }
    return data;
};
exports.getAppName = pid => {
    const appList = window.APP_LIST || [];
    const app = appList.find(n => {
        return n.pid === pid;
    });
    return app ? app.siteName : null;
};
exports.getAppInfo = pid => {
    const appList = window.APP_LIST || [];
    const app = appList.find(n => {
        return n.pid === pid;
    });
    return app || {};
};
// 根据siteType来判断摸个路由是否显示
exports.getAppSiteType = pid => {
    const appList = window.APP_LIST || [];
    const app = appList.find(n => {
        return n.pid === pid;
    });
    return app ? app.siteType : null;
};
exports.parseSearch = search => {
    let obj = {};
    if (!search) {
        return obj;
    }
    let arr = (search[0] === "?" ? search.substr(1) : search).split("&");
    arr.forEach(function (str) {
        if (str) {
            let kv = str.split("=");
            obj[decodeURIComponent(kv[0])] = kv[1]
                ? decodeURIComponent(kv[1])
                : undefined;
        }
    });
    return obj;
};
exports.getAlarmBaseUrl = () => {
    if (!location.port || location.port === "8080") {
        return "/arms?alarm_home&iframeMode";
    }
    return "http://arms-daily.console.aliyun.com:3300?alarm_home=1";
};
function formattedNumber(num) {
    let str = (num || 0).toString();
    let result = "";
    while (str.length > 3) {
        result = "," + str.slice(-3) + result;
        str = str.slice(0, str.length - 3);
    }
    if (str) {
        result = str + result;
    }
    return result;
}
exports.formattedNumber = formattedNumber;
exports.genID = length => {
    return Number(Math.random()
        .toString()
        .substr(3, length) + Date.now()).toString(36);
};
function noop() {
}
exports.noop = noop;
function decorator() {
    const events = [];
    let cache = undefined;
    let _t = null;
    const register = (callback) => {
        if (!events.includes(callback)) {
            events.push(callback);
        }
    };
    const unregister = (callback) => {
        const index = events.indexOf(callback);
        events.splice(index, 1);
        return index > -1;
    };
    const trigger = (value) => {
        clearTimeout(_t);
        cache = value;
        _t = setTimeout(() => {
            events.forEach((callback) => {
                _.isFunction(callback) && callback(cache);
            });
        }, 50);
    };
    const watcher = function (inst, funcName) {
        const name = `__${funcName}__`;
        const { componentDidMount, componentWillUnmount } = inst;
        inst.componentDidMount = function () {
            this[name] = this[funcName].bind(this);
            register(this[name]);
            if (_.isFunction(componentDidMount)) {
                componentDidMount.call(this);
            }
        };
        inst.componentWillUnmount = function () {
            unregister(this[name]);
            delete this[name];
            if (_.isFunction(componentWillUnmount)) {
                componentWillUnmount.call(this);
            }
        };
    };
    return {
        watcher,
        trigger,
        register,
        unregister,
        get: function () {
            return cache;
        },
    };
}
const DF = {};
function decoratorFactory(name = 'default') {
    if (!(name in DF)) {
        DF[name] = decorator();
    }
    return DF[name];
}
exports.decoratorFactory = decoratorFactory;
function toCopy(ctx) {
    copy(ctx);
    Message.success('copy success');
}
exports.toCopy = toCopy;
function strTemp(temp, data, options) {
    const ops = xtend(defTempOpts, options);
    return (temp || '').replace(ctxReg, (match, key) => {
        const val = strFunc(key, data) + '';
        if (val in ops) {
            return ops[val];
        }
        return val;
    });
}
exports.strTemp = strTemp;
function intlTemp(key, data) {
    const str = (key in messages_1.default) ? messages_1.default[key] : key;
    return strTemp(str, data);
}
exports.intlTemp = intlTemp;
const ctxReg = /\$\{(.*?)\}/g;
const defTempOpts = {
    null: '-',
    undefined: '-',
    '0': '0',
};
function strFunc(str, data = {}) {
    const func = new Function(...Object.keys(data), 'return ' + str);
    try {
        return func.apply({}, Object.values(data));
    }
    catch (e) {
        return '';
    }
}
exports.getHashMap = (data, primaryKeys = [], isFormatObj = false) => {
    let hashMap = {};
    if (!isFormatObj) {
        data.slice().map(item => {
            let primary = "";
            primaryKeys.map(key => {
                primary += _.get(item, key) || "";
            });
            item.primary = primary;
            if (hashMap[primary]) {
                hashMap[primary].push(Object.assign({}, item));
            }
            else {
                hashMap[primary] = [item];
            }
        });
        // 数据格式为： [{primary: '唯一值', ...item}]
    }
    else {
        data.slice().map(item => {
            let key = item[primaryKeys[0]];
            hashMap[key] = item;
        });
    }
    return hashMap;
};
//# sourceMappingURL=util.js.map