"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intl = exports.handlerData = void 0;
const messages_1 = __importDefault(require("../locales/messages"));
const moment = require('moment');
const keepDecimal = (value) => Math.floor(value * 100) / 100;
// 云监控处理时间的前置数据
function completionParams({ startTime, period, endTime }, lastTs) {
    // 取最终时间 max(lastTs/所有点的最大值, min(currentTs - 5min/当前时间之前 5 分钟, rangeMaxTs/选择的时间))
    // 时间间隔 60 分钟
    const currentTs = moment().subtract(60, 'minute').valueOf();
    const minTime = currentTs < endTime ? currentTs : endTime;
    const t = {
        60: moment(moment(startTime).format('YYYY-MM-DD HH:mm:00')).add(1, 'minutes').valueOf(),
        300: moment(moment(startTime).format('YYYY-MM-DD HH:mm:00')).add(5, 'minutes').valueOf(),
        3600: moment(moment(startTime).format('YYYY-MM-DD HH:00:00')).add(1, 'hours').valueOf(),
    };
    return {
        currentTime: t[period],
        showUnit: `${period} 秒`,
        endTime: lastTs > minTime ? lastTs : minTime,
    };
}
function handlerData(resultPromissList = [], metricNameList = [], params) {
    for (const item of resultPromissList) {
        if (!item) {
            return [];
        }
    }
    const data = resultPromissList;
    const values = {};
    let lastTs = 0;
    const initMetricNameData = {};
    metricNameList.forEach((legendName) => initMetricNameData[legendName] = 0);
    data.forEach((itemValues, index) => {
        const legendName = metricNameList[index];
        if (index === 0) {
            itemValues.forEach((item) => {
                values[item.timestamp] = Object.assign(Object.assign({ timestamp: item.timestamp }, initMetricNameData), { [legendName]: keepDecimal(item.Value) });
            });
        }
        else {
            itemValues.forEach((item) => {
                if (values[item.timestamp]) {
                    values[item.timestamp][legendName] = keepDecimal(item.Value);
                }
                else {
                    values[item.timestamp] = Object.assign(Object.assign({ timestamp: item.timestamp }, initMetricNameData), { [legendName]: keepDecimal(item.Value) });
                }
            });
        }
        const lastItem = itemValues[itemValues.length - 1] || {};
        lastTs = lastTs >= lastItem.timestamp ? lastTs : lastItem.timestamp;
    });
    const chartData = [];
    const { period } = params;
    const per = period * 1000;
    let { currentTime, endTime } = completionParams(params, lastTs);
    for (; currentTime <= endTime; currentTime += per) {
        const item = values[currentTime] || initMetricNameData;
        chartData.push(Object.assign({ timestamp: currentTime }, item));
        delete values[currentTime];
    }
    return chartData;
}
exports.handlerData = handlerData;
function intl(str) {
    return messages_1.default[str];
}
exports.intl = intl;
//# sourceMappingURL=handlerChartData.js.map