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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const wind_1 = require("@ali/wind");
const wind_intl_1 = __importDefault(require("@ali/wind-intl"));
const wind_rc_link_1 = __importDefault(require("@ali/wind-rc-link"));
const lodash_1 = require("lodash");
const context_1 = require("../../context");
const request_1 = require("../../request");
const helper_1 = require("../LineChart/Chart/helper");
require("./index.css");
const { Row, Col } = wind_1.Grid;
const { Column } = wind_1.Table;
exports.default = () => {
    const { config } = react_1.useContext(context_1.UserContext);
    const [tableList, setTableList] = react_1.useState([]);
    const [tablelistLoading, setTablelistLoading] = react_1.useState(false);
    //  const [isShowLogArea, setShowLogArea] = useState(false);
    react_1.useEffect(() => {
        if (!lodash_1.isEmpty(config)) {
            setTablelistLoading(true);
            getTableList();
        }
    }, [config]);
    function getTableList() {
        return __awaiter(this, void 0, void 0, function* () {
            const tableData = yield request_1.getRequestTableList(Object.assign({}, config));
            setTablelistLoading(false);
            setTableList(tableData);
            console.log('tableData', tableData);
        });
    }
    ;
    //获取table列中,函数执行的状态图标
    function getIconInfo(value) {
        if (!value) {
            return (react_1.default.createElement("span", null,
                react_1.default.createElement(wind_1.Icon, { type: "check", size: "small", style: { color: "#0BB27B" } }),
                react_1.default.createElement("label", { style: { marginLeft: 8, verticalAlign: 'middle' } }, wind_intl_1.default.html('fc.dashboard.success'))));
        }
        else {
            return (react_1.default.createElement("span", null,
                react_1.default.createElement(wind_1.Icon, { type: "warning", size: "small", style: { color: "#D93026" } }),
                react_1.default.createElement("label", { style: { marginLeft: 8, verticalAlign: 'middle' } }, value)));
        }
    }
    function getColumns() {
        const { endTime = 0, startTime = 0, qualifier = 'LATEST', recent = 'hour' } = Object.assign({}, config);
        return [
            {
                key: 'requestId',
                title: wind_intl_1.default('fc.dashboard.function.requestId'),
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
                    return react_1.default.createElement(wind_rc_link_1.default, { to: path },
                        " ",
                        value,
                        " ");
                },
            },
            {
                key: '__time__',
                title: wind_intl_1.default('fc.dashboard.function.time'),
                dataIndex: '__time__',
                cell: (value) => helper_1.momentFormat(Number(value) * 1000),
                sortable: true,
            },
            {
                key: 'durationMs',
                title: `${wind_intl_1.default('fc.dashboard.function.durationMs')}`,
                width: 200,
                dataIndex: 'durationMs',
                cell: (value, index, record) => {
                    const { contentWidth, contentWidthNumber } = record || {};
                    return helper_1.TableColStyle(value, contentWidth, contentWidthNumber);
                },
                sortable: true,
            },
            {
                key: 'memoryUsageMB',
                title: `${wind_intl_1.default('fc.dashboard.function.memoryUsageMB')}`,
                dataIndex: 'memoryUsageMB',
                width: 200,
                sortable: true,
                cell: (value, index, record) => {
                    const { contentMemoryWidth, contentMemoryWidthNumber } = record || {};
                    return helper_1.TableColStyle(value, contentMemoryWidth, contentMemoryWidthNumber);
                },
            },
            {
                key: 'isColdStart',
                title: `${wind_intl_1.default('fc.dashboard.function.isColdStart')}`,
                dataIndex: 'isColdStart',
                cell: (value) => (react_1.default.createElement("div", null, value === 'true' ? (react_1.default.createElement("div", { style: {
                        width: 60,
                        textAlign: 'center',
                        background: '#F5F5F5',
                        borderRadius: 12,
                        backgroundColor: '#F5F5F5',
                    } }, wind_intl_1.default('fc.dashboard.function.isColdStart.yes'))) : null)),
            },
            {
                key: 'errorType',
                title: wind_intl_1.default('fc.dashboard.execution.status'),
                dataIndex: 'errorType',
                cell: (value) => (react_1.default.createElement("div", null, getIconInfo(value))),
            },
        ];
    }
    const columns = getColumns();
    console.log('configisShowLogArea', config);
    return (react_1.default.createElement(Row, null,
        react_1.default.createElement(Col, { span: 24 },
            react_1.default.createElement(wind_1.Table, { dataSource: tableList, hasBorder: false, primaryKey: "requestId", loading: tablelistLoading }, columns && columns.map((col, key) => react_1.default.createElement(Column, Object.assign({}, col, { key: key })))))));
};
//# sourceMappingURL=index.js.map