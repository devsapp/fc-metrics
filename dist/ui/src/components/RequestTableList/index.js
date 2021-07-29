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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const console_components_1 = require("@alicloud/console-components");
const react_router_dom_1 = require("react-router-dom");
const handlerChartData_1 = require("../../utils/handlerChartData");
const lodash_1 = require("lodash");
const context_1 = require("../../context");
const request_1 = require("../../request");
const helper_1 = require("../LineChart/Chart/helper");
require("./index.css");
const { Row, Col } = console_components_1.Grid;
const { Column } = console_components_1.Table;
exports.default = () => {
    const { config } = react_1.useContext(context_1.UserContext);
    const [tableList, setTableList] = react_1.useState([]);
    const [tablelistLoading, setTablelistLoading] = react_1.useState(false);
    const [isShowLogArea, setShowLogArea] = react_1.useState(false);
    react_1.useEffect(() => {
        if (!lodash_1.isEmpty(config)) {
            setTablelistLoading(true);
            getTableList();
        }
    }, [config]);
    function getTableList() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request_1.getRequestTableList(Object.assign({}, config));
            setTablelistLoading(false);
            setTableList(res.tableData);
            if (res.RequestMetricsNotEnable) {
                setShowLogArea(true);
            }
            console.log('tableData', res);
        });
    }
    ;
    //获取table列中,函数执行的状态图标
    function getIconInfo(value) {
        if (!value) {
            return (react_1.default.createElement("span", null,
                react_1.default.createElement(console_components_1.Icon, { type: "check", size: "small", style: { color: "#0BB27B" } }),
                react_1.default.createElement("label", { style: { marginLeft: 8, verticalAlign: 'middle' } }, handlerChartData_1.intl('fc.dashboard.success'))));
        }
        else {
            return (react_1.default.createElement("span", null,
                react_1.default.createElement(console_components_1.Icon, { type: "warning", size: "small", style: { color: "#D93026" } }),
                react_1.default.createElement("label", { style: { marginLeft: 8, verticalAlign: 'middle' } }, value)));
        }
    }
    function getColumns() {
        const { endTime = 0, startTime = 0, qualifier = 'LATEST', recent = 'hour' } = Object.assign({}, config);
        return [
            {
                key: 'requestId',
                title: handlerChartData_1.intl('fc.dashboard.function.requestId'),
                dataIndex: 'requestId',
                cell: (value, index, record) => {
                    const selectValue = record.qualifier;
                    const data = {
                        startTime,
                        endTime,
                        qualifier,
                        recent,
                        selectValue,
                    };
                    var path = {
                        pathname: `/details`,
                        state: data,
                        search: `?requestId=${value}&startTime=${startTime}&endTime=${endTime}&recent=${recent}&qualifier=${qualifier}&selectValue=${selectValue}`
                    };
                    return react_1.default.createElement(react_router_dom_1.Link, { to: path },
                        " ",
                        value,
                        " ");
                },
            },
            {
                key: '__time__',
                title: handlerChartData_1.intl('fc.dashboard.function.time'),
                dataIndex: '__time__',
                cell: (value) => helper_1.momentFormat(Number(value) * 1000),
            },
            {
                key: 'durationMs',
                title: `${handlerChartData_1.intl('fc.dashboard.function.durationMs')}`,
                width: 200,
                dataIndex: 'durationMs',
                cell: (value, index, record) => {
                    const { contentWidth, contentWidthNumber } = record || {};
                    return helper_1.TableColStyle(value, contentWidth, contentWidthNumber);
                },
            },
            {
                key: 'memoryUsageMB',
                title: `${handlerChartData_1.intl('fc.dashboard.function.memoryUsageMB')}`,
                dataIndex: 'memoryUsageMB',
                width: 200,
                cell: (value, index, record) => {
                    const { contentMemoryWidth, contentMemoryWidthNumber } = record || {};
                    return helper_1.TableColStyle(value, contentMemoryWidth, contentMemoryWidthNumber);
                },
            },
            {
                key: 'isColdStart',
                title: `${handlerChartData_1.intl('fc.dashboard.function.isColdStart')}`,
                dataIndex: 'isColdStart',
                cell: (value) => (react_1.default.createElement("div", null, value === 'true' ? (react_1.default.createElement("div", { style: {
                        width: 60,
                        textAlign: 'center',
                        background: '#F5F5F5',
                        borderRadius: 12,
                        backgroundColor: '#F5F5F5',
                    } }, handlerChartData_1.intl('fc.dashboard.function.isColdStart.yes'))) : null)),
            },
            {
                key: 'errorType',
                title: handlerChartData_1.intl('fc.dashboard.execution.status'),
                dataIndex: 'errorType',
                cell: (value) => (react_1.default.createElement("div", null, getIconInfo(value))),
            },
        ];
    }
    const columns = getColumns();
    console.log('configisShowLogArea', config);
    return (react_1.default.createElement(Row, null,
        react_1.default.createElement(Col, { span: 24 },
            isShowLogArea && (react_1.default.createElement("div", { className: 'applyLogWraper' },
                react_1.default.createElement("h2", { style: { paddingTop: '20px' } }, '推荐您开通RequestMetrics以便查询函数级别指标'),
                react_1.default.createElement("div", { style: { textAlign: 'center' } },
                    react_1.default.createElement("div", { style: { paddingBottom: '20px', fontSize: '14px' } },
                        react_1.default.createElement("a", { href: 'https://fc.console.aliyun.com/' }, " \u53BB\u5F80FC\u63A7\u5236\u53F0\u670D\u52A1\u53CA\u51FD\u6570\u4E0B\u7684\u670D\u52A1\u914D\u7F6E\u8FDB\u884C\b\u5F00\u901A\uFF0C\u6216\u8005\u8054\u7CFB\u51FD\u6570\u8BA1\u7B97\u56E2\u961F ")),
                    react_1.default.createElement("img", { width: '85%%', style: { margin: '0 auto' }, src: "https://fc-dashboard.oss-cn-hangzhou.aliyuncs.com/images/icon/functionLog.png" })))),
            !isShowLogArea && (react_1.default.createElement(console_components_1.Table, { dataSource: tableList, hasBorder: false, primaryKey: "requestId", loading: tablelistLoading }, columns && columns.map((col, key) => react_1.default.createElement(Column, Object.assign({}, col, { key: key }))))))));
};
//# sourceMappingURL=index.js.map