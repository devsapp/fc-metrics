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
exports.getAlias = exports.getVersion = exports.getMetricData = void 0;
const console_components_1 = require("@alicloud/console-components");
const helper_1 = require("../components/LineChart/Chart/helper");
const axios = require('axios');
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
const getVersion = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios.get(`/get/version`);
    if (result.success === true) {
        return result.data;
    }
    return [];
});
exports.getVersion = getVersion;
const getAlias = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios.get(`/get/alias`);
    if (result.success === true) {
        return result.data;
    }
    return [];
});
exports.getAlias = getAlias;
//# sourceMappingURL=index.js.map