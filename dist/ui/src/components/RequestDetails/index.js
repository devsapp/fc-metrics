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
const console_components_1 = require("@alicloud/console-components");
const lodash_1 = require("lodash");
const context_1 = require("../../context");
const request_1 = require("../../request");
const CardInfo_1 = __importDefault(require("./CardInfo"));
const FuncCallLine_1 = __importDefault(require("./FuncCallLine"));
const helper_1 = require("../LineChart/Chart/helper");
exports.default = () => {
    const { config } = react_1.useContext(context_1.UserContext);
    const [getDataFlag, getDataFlagUpdate] = react_1.useState(false);
    const [requestLoading, getRequestLoading] = react_1.useState(false);
    const [requestCardData, requestCardDataUpdate] = react_1.useState([]);
    const [timeLineData, timeLineDataUpdate] = react_1.useState({});
    const [timeLineDataLoading, setTimeLineDataLoading] = react_1.useState(false);
    react_1.useEffect(() => {
        if (!lodash_1.isEmpty(config)) {
            getRequestLoading(true);
            getRequestData();
        }
    }, [config]);
    function getRequestData() {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParamsObj = helper_1.queryStringSearch(location.search);
            const cardData = yield request_1.getRequestInfo(searchParamsObj);
            const { traceContext } = cardData[0] || {};
            const traceId = traceContext && traceContext.split(':')[0] || '';
            if (traceId) {
                const traceParamsObj = searchParamsObj;
                traceParamsObj.traceId = traceId;
                getTrace(traceParamsObj);
            }
            requestCardDataUpdate(cardData);
            getRequestLoading(false);
            setTimeLineDataLoading(false);
            console.log('timeLineData', cardData);
        });
    }
    ;
    function getTrace(params) {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeLineDataLoading(true);
            //const getRequestTimeLineData = staticMockdataNew;
            const getRequestTimeLineData = yield request_1.getTraceData(params);
            ;
            const { data } = getRequestTimeLineData || {};
            const dataSource = helper_1.getTableData(data);
            setTimeLineDataLoading(false);
            timeLineDataUpdate(dataSource);
            if (dataSource && dataSource.data) {
                getDataFlagUpdate(true);
            }
            console.log('timeLineData', timeLineData);
        });
    }
    ;
    const searchParamsObj = helper_1.queryStringSearch(location.search);
    const { startTime, endTime, qualifier } = searchParamsObj;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(console_components_1.Loading, { visible: requestLoading, style: { width: '100%', height: '400' } },
            react_1.default.createElement(CardInfo_1.default, { requestCardData: requestCardData }),
            react_1.default.createElement(FuncCallLine_1.default, { getDataFlag: getDataFlag, timeLineDataLoading: timeLineDataLoading, timeLineData: timeLineData, startTime: startTime, endTime: endTime, qualifier: qualifier, regionId: 'cn-shanghai' }))));
};
//# sourceMappingURL=index.js.map