"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const console_components_1 = require("@alicloud/console-components");
const handlerChartData_1 = require("../../utils/handlerChartData");
const CallChain_1 = __importDefault(require("./CallChain"));
class FuncCallLine extends react_1.default.Component {
    render() {
        const { timeLineData, startTime, endTime, regionId, getDataFlag } = this.props;
        return (react_1.default.createElement("div", { className: `functionCallWraper marginTop20 padding16 paddingTop0` },
            react_1.default.createElement("h2", { className: `paddingTop10 color333` }, handlerChartData_1.intl('fc.dashboard.function.call.chain')),
            !getDataFlag && react_1.default.createElement(console_components_1.Table, { dataSource: [], hasBorder: false }),
            getDataFlag && react_1.default.createElement(CallChain_1.default, { data: timeLineData, startTime: startTime, endTime: endTime, regionId: regionId })));
    }
}
FuncCallLine.propTypes = {
    timeLineData: prop_types_1.default.array,
    expandRow: prop_types_1.default.array,
    timeLineDataOriginData: prop_types_1.default.object
};
exports.default = FuncCallLine;
//# sourceMappingURL=FuncCallLine.js.map