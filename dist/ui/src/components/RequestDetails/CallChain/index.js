"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail = void 0;
// eslint react/prefer-stateless-function: "off"
const react_1 = __importStar(require("react"));
const wind_1 = require("@ali/wind");
const midfe_tree_grid_1 = __importDefault(require("@ali/midfe-tree-grid"));
const dc = __importStar(require("../utils/dataConvert"));
const wind_intl_1 = __importDefault(require("@ali/wind-intl"));
class Detail extends react_1.Component {
    goto(item, ServiceName) {
        const requestInfoStr = sessionStorage.getItem('requestInfo');
        const requestObj = requestInfoStr && JSON.parse(requestInfoStr);
        const { regionId, startTime, endTime, qualifier } = requestObj;
        let chatServiceName = '';
        if (ServiceName) {
            const idx = ServiceName.indexOf(":");
            chatServiceName = ServiceName.substring(idx + 1);
        }
        const splitStr = chatServiceName && chatServiceName.split('/');
        const serviceName = splitStr[0] || '';
        const functionName = splitStr[1] || '';
        const value = item.Value || '';
        var path = {
            pathname: `/details`,
            search: `?requestId=${value}&startTime=${startTime}&endTime=${endTime}&qualifier=${qualifier}`
        };
        return (react_1.default.createElement("a", { href: path.pathname, target: "_blank" },
            "  ",
            value));
    }
    getTagMap(data, ServiceName) {
        return (react_1.default.createElement("div", { style: { margin: '0 30px' } },
            react_1.default.createElement("table", { className: "mini-table" },
                react_1.default.createElement("tbody", null, data.map((item, i) => (react_1.default.createElement("tr", { key: i },
                    react_1.default.createElement("td", { style: { width: 120 } }, item.Key),
                    react_1.default.createElement("td", { style: { wordBreak: 'break-word' } }, item.Key === 'x-fc-request-id' && item.Value))))))));
    }
    getLogMap(data) {
        const keys = Object.keys(data).sort((a, b) => {
            return a - b;
        });
        return (react_1.default.createElement(react_1.Fragment, null, keys.map((key, i) => {
            let item = data[key];
            let t = parseInt(key.substr(0, 13));
            return (react_1.default.createElement("div", { key: i, style: { margin: '0 30px' } },
                react_1.default.createElement("p", null, dc.dateFormat(data.Timestamp || t, 'YYYY-MM-DD HH:mm:s.SSS')),
                react_1.default.createElement("table", { className: "mini-table" },
                    react_1.default.createElement("tbody", null, Object.keys(item).map((key2, j) => (react_1.default.createElement("tr", { key: j },
                        react_1.default.createElement("td", { style: { width: 120 } }, key2),
                        react_1.default.createElement("td", { style: { wordBreak: 'break-word' } }, item[key2]))))))));
        })));
    }
    render() {
        let { data = {} } = this.props;
        return (react_1.default.createElement("div", { className: "style-scroll", style: { minWidth: 400, maxHeight: 400, overflowY: 'auto' } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { style: { fontSize: '16px' } }, data.OperationName),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("span", null,
                        "Service: ",
                        react_1.default.createElement("strong", null, data.ServiceName)),
                    react_1.default.createElement("span", { style: { margin: '0 6px' } },
                        "Duration: ",
                        react_1.default.createElement("strong", null, data.Duration)),
                    react_1.default.createElement("span", null,
                        "Start Time: ",
                        react_1.default.createElement("strong", null, dc.dateFormat(data.Timestamp))))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("p", null, "Tags:"),
                data.TagEntryList && this.getTagMap(data.TagEntryList && data.TagEntryList.TagEntry, data.ServiceName)),
            react_1.default.createElement("div", null,
                react_1.default.createElement("p", null, "Log Events:"),
                data.logMap && this.getLogMap(data.logMap))));
    }
}
exports.Detail = Detail;
const expandOn = {
    field: 'rpc',
    displayName: wind_intl_1.default('fc.dashboard.requset.span'),
    style: { width: 500 },
    render(row) {
        return (react_1.default.createElement("div", { className: "inner", style: { whiteSpace: 'normal', wordBreak: 'break-all' } },
            react_1.default.createElement(wind_1.Balloon, { triggerType: "hover", trigger: react_1.default.createElement("span", { className: "hover-span" }, row.OperationName), align: "rb", closable: false, popupStyle: { padding: 10, maxWidth: 420 } },
                react_1.default.createElement(Detail, { data: row }))));
    },
};
//调用树列定义
const columns = [
    {
        field: 'span',
        displayName: wind_intl_1.default('fc.dashboard.requset.timeaxios'),
        style: { width: '500px', borderTop: 'none', borderBottom: 'none' },
        render(row) {
            //需要根据数据计算后重写
        },
    },
    {
        field: 'ServiceName',
        displayName: wind_intl_1.default('fc.dashboard.requset.application'),
        style: { width: '200px', position: 'relative' },
        render(row) {
            return react_1.default.createElement("div", { className: "inner" }, row.ServiceName);
        },
    },
    {
        field: 'Timestamp',
        displayName: wind_intl_1.default('fc.dashboard.requset.logAppearTimes'),
        style: { width: '150px' },
        render(row) {
            return react_1.default.createElement("div", { className: "inner" }, dc.dateFormat(row.Timestamp));
        },
    },
    {
        field: 'ServiceIp',
        displayName: wind_intl_1.default('fc.dashboard.requset.ipAddress'),
        style: { width: '90px' },
        render(row) {
            return react_1.default.createElement("div", { className: "inner" }, row.ServiceIp);
        },
    },
    {
        field: 'ResultCode',
        displayName: wind_intl_1.default('fc.dashboard.requset.status'),
        style: { width: '54px' },
        render(row) {
            let className = 'trace-status ';
            switch (parseInt(row.ResultCode)) {
                case 0:
                    className += 'ok';
                    break;
                case 1:
                    className += 'error';
                    break;
                default:
                    className += 'warning';
            }
            return (react_1.default.createElement("div", { style: { textAlign: 'center' } },
                react_1.default.createElement("i", { className: className })));
        },
    },
];
function logTimeCreater(min, max, duration) {
    const len = max - min;
    return function (row) {
        let left = 0, width = '100%', backgroundColor = '#A7D3FF', elapsedLeft = 'none', elapsedRight = 0, marginLeft = 0, marginRight = 'none';
        if (!row._node) {
            left = ((row.Timestamp - min) * 100) / duration + '%';
            width = (row.Duration * 100) / duration + '%';
            backgroundColor = '#B8E986';
        }
        else {
            left = ((row.Timestamp - min) * 100) / duration + '%';
            width = (row.Duration * 100) / duration + '%';
            backgroundColor = '#A7D3FF';
        }
        if (((row.Timestamp - min) * 100) / duration > 80) {
            (elapsedRight = 100 - ((row.Timestamp - min) * 100) / duration + '%'), (marginRight = '4px');
        }
        else {
            elapsedLeft = left;
            marginLeft = '4px';
        }
        let Timestamp = (react_1.default.createElement("div", { className: "log-time-box" },
            react_1.default.createElement("div", { className: "time-section", style: { left, width, backgroundColor } }),
            react_1.default.createElement("span", { className: "elapsed", style: {
                    right: elapsedRight,
                    marginRight,
                    left: elapsedLeft,
                    marginLeft,
                } },
                (row.Timestamp + '').length === 13 ? row.Duration : row.Duration / 1000,
                "ms")));
        return (react_1.default.createElement("div", { className: "log-time" },
            react_1.default.createElement(wind_1.Balloon, { trigger: Timestamp, align: "r", closable: false },
                react_1.default.createElement("div", { className: "text-left" },
                    wind_intl_1.default('fc.log.basic.invoke.time'),
                    dc.dateFormat(row.Timestamp, 'YYYY-MM-DD HH:mm:s.SSS'),
                    " ",
                    react_1.default.createElement("br", null),
                    wind_intl_1.default('fc.dashboard.requset.wasteTimes'),
                    (row.Timestamp + '').length === 13 ? row.Duration : row.Duration / 1000,
                    "ms"))));
    };
}
class CallChain extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            loading: false,
            tree: [],
            headData: [],
        };
    }
    componentDidMount() {
        this.getCallChain();
    }
    getCallChain() {
        const result = this.props.data.data;
        let time = result.Duration / 1000;
        let { tree, startTime, endTime } = dc.convertTree(result.children);
        columns[0].render = logTimeCreater(result.Timestamp, endTime, result.Duration);
        this.setState({ tree, loading: false });
    }
    render() {
        const { tree, loading } = this.state;
        console.log('tree', tree);
        return (react_1.default.createElement("div", { className: "next-table" }, tree.length === 0 && !loading ? (react_1.default.createElement("div", { className: "call-chain-nodata" }, wind_intl_1.default('fc.applications.rds.import_tpye.import.rds.null'))) : (react_1.default.createElement("div", null,
            react_1.default.createElement(midfe_tree_grid_1.default, { data: tree, expandOn: expandOn, columns: columns })))));
    }
}
CallChain.propTypes = {};
CallChain.defaultProps = {};
exports.default = CallChain;
//# sourceMappingURL=index.js.map