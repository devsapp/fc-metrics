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
const react_1 = __importStar(require("react"));
const console_components_1 = require("@alicloud/console-components");
const context_1 = require("../../context");
const Qualifier_1 = __importDefault(require("./Qualifier"));
const TimeRangePicker_1 = __importDefault(require("./TimeRangePicker"));
// import { ICONURL } from '../../constants'
require("./index.css");
const { Row, Col } = console_components_1.Grid;
// const CustomIcon = Icon.createFromIconfontCN({
//     scriptUrl: ICONURL,
// });
exports.default = () => {
    const { setConfig } = react_1.useContext(context_1.UserContext);
    const timeRangePickerRef = react_1.useRef(null);
    const qualifierRef = react_1.useRef(null);
    react_1.useEffect(() => {
        getTimeConfig();
    }, []);
    const getTimeConfig = () => {
        const { endTime, startTime, period, recent } = timeRangePickerRef.current;
        const { qualifier } = qualifierRef.current;
        setConfig({
            endTime,
            startTime,
            period,
            qualifier,
            recent,
        });
    };
    return (react_1.default.createElement(Row, { className: "header" },
        react_1.default.createElement(Col, { className: "header-logo-box" },
            react_1.default.createElement("span", { className: "header-title" }, "Function Metrics")),
        react_1.default.createElement(Qualifier_1.default, { ref: qualifierRef, getTimeConfig: getTimeConfig }),
        react_1.default.createElement(TimeRangePicker_1.default, { ref: timeRangePickerRef, getTimeConfig: getTimeConfig })));
};
//# sourceMappingURL=index.js.map