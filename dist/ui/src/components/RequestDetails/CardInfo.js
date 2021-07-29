"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const console_components_1 = require("@alicloud/console-components");
const handlerChartData_1 = require("../../utils/handlerChartData");
require("./index.scoped.less");
//获取每个card对应的title
function getCardArrInfo() {
    return [
        {
            title: `${handlerChartData_1.intl('fc.dashboard.execution.status')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }, {
            title: `${handlerChartData_1.intl('fc.dashboard.status.is.coldStart')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }, {
            title: `${handlerChartData_1.intl('fc.dashboard.function.execution.time')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }, {
            title: `${handlerChartData_1.intl('fc.dashboard.memory.consumption')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }
    ];
}
//获取执行状态,hasFunctionError是false，标明成功. hasFunctionError是ture,标明失败
function getExecuStaus(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { hasFunctionError, errorType } = data;
        if (hasFunctionError === 'false') {
            return {
                code: 'SUCCESS',
                color: 'colorGreen'
            };
        }
        else {
            return {
                code: errorType || '',
                color: 'colorRed'
            };
        }
    }
    return '';
}
//获取是否冷启动,isColdStart是false，没有冷启动. isColdStart是ture,有冷启动
function hasColdStart(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { isColdStart } = data;
        if (isColdStart === 'false') {
            return handlerChartData_1.intl('fc.dashboard.no');
        }
        else {
            return handlerChartData_1.intl('fc.dashboard.yse');
        }
    }
    return '';
}
//获取函数执行时间和内存消耗
function getDuration(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { durationMs } = data;
        return durationMs ? `${durationMs} ms` : '';
    }
    return '';
}
//获取内存消耗
function getMemoryUsageMB(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { memoryUsageMB } = data;
        return memoryUsageMB ? `${memoryUsageMB} MB` : '';
    }
    return '';
}
function CardInfo(props) {
    const { requestCardData } = props;
    const { Row, Col } = console_components_1.Grid;
    const commonPropsArr = getCardArrInfo();
    const execuStatus = getExecuStaus(requestCardData) || {};
    return (react_1.default.createElement("div", { className: 'cardInfoWraper' },
        react_1.default.createElement("h1", { className: 'color333' }, handlerChartData_1.intl('fc.dashboard.request.detail')),
        react_1.default.createElement(Row, null,
            react_1.default.createElement(Col, { key: 0 },
                react_1.default.createElement(console_components_1.Card, Object.assign({}, commonPropsArr[0], { contentHeight: "auto", className: `marginRight20 height100 ${execuStatus.color}` }),
                    react_1.default.createElement("div", { className: `customContent` },
                        react_1.default.createElement("div", { className: 'colorfff' }, execuStatus.code)))),
            react_1.default.createElement(Col, { key: 1 },
                react_1.default.createElement(console_components_1.Card, Object.assign({}, commonPropsArr[1], { contentHeight: "auto", className: `marginRight20 height100` }),
                    react_1.default.createElement("div", { className: `customContent` }, hasColdStart(requestCardData)))),
            react_1.default.createElement(Col, { key: 2 },
                react_1.default.createElement(console_components_1.Card, Object.assign({}, commonPropsArr[2], { contentHeight: "auto", className: `marginRight20 height100` }),
                    react_1.default.createElement("div", { className: `customContent` }, getDuration(requestCardData)))),
            react_1.default.createElement(Col, { key: 3 },
                react_1.default.createElement(console_components_1.Card, Object.assign({}, commonPropsArr[3], { contentHeight: "auto", className: `height100` }),
                    react_1.default.createElement("div", { className: `customContent` }, getMemoryUsageMB(requestCardData)))))));
}
exports.default = CardInfo;
CardInfo.propTypes = {
    requestCardData: prop_types_1.default.array,
};
//# sourceMappingURL=CardInfo.js.map