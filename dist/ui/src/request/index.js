"use strict";
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
exports.getAlias = exports.getVersion = exports.getTraceData = exports.getRequestInfo = exports.getRequestTableList = exports.getMetricData = void 0;
const console_components_1 = require("@alicloud/console-components");
const helper_1 = require("../components/LineChart/Chart/helper");
const axios = require('axios');
//获取函数级别图表
const getMetricData = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios.post(`/get/metric`, params, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
        });
        const { data } = result || {};
        if (data.success === true && !result.data.errorMsg) {
            return helper_1.transChartData(data.data, params);
        }
        console_components_1.Message.error(`Metric ${params.metric} 请求失败。`);
        return [];
    }
    catch (e) {
        console_components_1.Message.error(`Metric ${params.metric} 请求失败:  ${e.toString()}`);
        return [];
    }
});
exports.getMetricData = getMetricData;
//获取函数级别列表
const getRequestTableList = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('requestTableParams', params);
        const result = yield axios.post(`/get/RequestTableList`, params, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
        });
        const { data } = result || {};
        if (data.success === true) {
            if (data.data.errorCode === 'RequestMetricsNotEnable') {
                return { RequestMetricsNotEnable: true, tableData: [] };
            }
            else {
                return { RequestMetricsNotEnable: false, tableData: helper_1.transFunctionTable(data.data) };
            }
        }
        console_components_1.Message.error(`Metric Function 请求失败:  ${data.toString()}`);
        return { RequestMetricsNotEnable: false, tableData: [] };
    }
    catch (e) {
        console_components_1.Message.error(`Metric Function 请求失败:  ${e.toString()}`);
        return { RequestMetricsNotEnable: false, tableData: [] };
    }
});
exports.getRequestTableList = getRequestTableList;
//获取请求详情数据
const getRequestInfo = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getRequestInfo params', params);
        const result = yield axios.post(`/get/RequestInfo`, params, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
        });
        const { data } = result || {};
        if (data.success === true && !result.data.errorMsg) {
            console.log('getRequestInfodata', data);
            return data.data;
        }
        console_components_1.Message.error(`getRequestInfo 请求失败。`);
        return [];
    }
    catch (e) {
        console_components_1.Message.error(`getRequestInfo 请求失败:  ${e.toString()}`);
        return [];
    }
});
exports.getRequestInfo = getRequestInfo;
//获取请求级别Trace
const getTraceData = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios.post(`/get/Trace`, params, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
        });
        const { data } = result || {};
        if (data.success === true && !result.data.errorMsg) {
            return data.data;
        }
        console_components_1.Message.error(`getTraceData 请求失败。`);
        return [];
    }
    catch (e) {
        console_components_1.Message.error(`getTraceData 请求失败:  ${e.toString()}`);
        return [];
    }
});
exports.getTraceData = getTraceData;
//获取服务版本
const getVersion = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios.get(`/get/version`);
    if (result.success === true) {
        return result.data;
    }
    return [];
});
exports.getVersion = getVersion;
//获取别名
const getAlias = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios.get(`/get/alias`);
    if (result.success === true) {
        return result.data;
    }
    return [];
});
exports.getAlias = getAlias;
//# sourceMappingURL=index.js.map