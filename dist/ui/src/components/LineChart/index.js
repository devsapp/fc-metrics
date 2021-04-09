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
const lodash_1 = require("lodash");
const console_components_1 = require("@alicloud/console-components");
// import {
//   FunctionTotalInvocations,
//   FunctionProvisionInvocations,
//   FunctionServerErrors,
//   FunctionClientErrors,
// } from '../../constants';
const wind_intl_1 = __importDefault(require("@ali/wind-intl"));
const context_1 = require("../../context");
const index_1 = __importDefault(require("./Chart/index"));
const helper_1 = require("./Chart/helper");
const request_1 = require("../../request");
require("./index.css");
const { Row, Col } = console_components_1.Grid;
exports.default = () => {
    const functionCallsNameList = [
        { metricName: 'FunctionQualifierTotalInvocations', legendName: wind_intl_1.default('fc.dashboard.allCount.lable'), colorPrimary: '#0881FE' },
        { metricName: 'FunctionQualifierProvisionInvocations', legendName: wind_intl_1.default('fc.dashboard.singletonCount.lable'), colorPrimary: 'rgb(90 216 166)' },
    ];
    const functionErrorNameList = [
        { metricName: 'FunctionQualifierServerErrors', legendName: wind_intl_1.default('fc.metrics.legend.service_errors'), colorPrimary: '#751616' },
        { metricName: 'FunctionQualifierClientErrors', legendName: wind_intl_1.default('fc.metrics.legend.client_errors'), colorPrimary: '#E44F2F' },
        { metricName: 'FunctionQualifierFunctionErrors', legendName: wind_intl_1.default('fc.metrics.legend.function_errors'), colorPrimary: '#E44390' },
    ];
    const flowControlNameLIst = [
        { metricName: 'FunctionQualifierConcurrencyThrottles', legendName: wind_intl_1.default('fc.dashboard.traffic.control.concurrent.label'), colorPrimary: '#826AF9' },
        { metricName: 'FunctionQualifierResourceThrottles', legendName: wind_intl_1.default('fc.dashboard.traffic.control.total.label'), colorPrimary: '#0881FE' },
    ];
    const timeDuationNameLIst = [
        { metricName: 'FunctionQualifierAvgDuration', legendName: wind_intl_1.default('fc.dashboard.functionAvgDuration.lable'), colorPrimary: '#0881FE' },
        { metricName: 'FunctionQualifierMaxDuration', legendName: wind_intl_1.default('fc.dashboard.functionMaxDuration.lable'), colorPrimary: '#FF7E4F' },
    ];
    const n2nDuationNameLIst = [
        { metricName: 'FunctionQualifierLatencyAvg', legendName: wind_intl_1.default('fc.dashboard.functionLatencyAvg.lable'), colorPrimary: '#0881FE' },
        { metricName: 'FunctionQualifierLatencyMax', legendName: wind_intl_1.default('fc.dashboard.functionLatencyMax.lable'), colorPrimary: '#FF7E4F' },
    ];
    const memoryUsageNameList = [
        { metricName: 'FunctionQualifierMaxMemoryUsage', legendName: wind_intl_1.default('fc.dashboard.function.memory.max.label'), colorPrimary: '#FF7E4F' },
    ];
    //函数按量实例数(个)
    const funcOndemandNameList = [
        { metricName: 'FunctionQualifierOndemandInstanceQuota', legendName: wind_intl_1.default('fc.dashboard.function.functionProvisionedInstanceCountLimit'), colorPrimary: '#FF7E4F', },
        { metricName: 'FunctionQualifierOndemandActiveInstance', legendName: wind_intl_1.default('fc.dashboard.function.functionProvisionedInstanceCountCurrent'), colorPrimary: '#2BABA8', },
    ];
    //函数预留实例数(个)
    const funcProvisionedNameList = [
        { metricName: 'FunctionQualifierProvisionedCurrentInstance', legendName: wind_intl_1.default('fc.dashboard.function.functionProvisionedCurrentInstanceCount'), colorPrimary: '#2BABA8', },
    ];
    //区域按量实例数(个)
    const reginConcurrencyNameList = [
        { metricName: 'RegionConcurrencyLimit', legendName: wind_intl_1.default('fc.dashboard.function.regionProvisionedInstanceCountLimit'), colorPrimary: '#FF7E4F', },
        { metricName: 'RegionConcurrentCount', legendName: wind_intl_1.default('fc.dashboard.function.regionProvisionedInstanceCountCurrent'), colorPrimary: '#2BABA8', },
    ];
    const functionCostNameList = [
        { metricName: 'FunctionQualifierCost', legendName: wind_intl_1.default('fc.dashboard.function.functionUseageInfo'), colorPrimary: '#0881FE' },
    ];
    const destinationNameList = [
        { metricName: 'FunctionQualifierAsyncEventExpiredDropped', legendName: wind_intl_1.default('fc.dashboard.destination.asyncEventExpiredDropped.label'), colorPrimary: '#E44390' },
        { metricName: 'FunctionQualifierDestinationErrors', legendName: wind_intl_1.default('fc.dashboard.destination.error.label'), colorPrimary: '#E44F2F' },
        { metricName: 'FunctionQualifierDestinationSucceeded', legendName: wind_intl_1.default('fc.dashboard.function.destination.succeed.label'), colorPrimary: 'rgb(90 216 166)' },
    ];
    const { config } = react_1.useContext(context_1.UserContext);
    const [functionCallMetricLoading, setFunctionCallMetricLoading] = react_1.useState(false);
    const [functionErrorsLoading, setFunctionErrorsLoading] = react_1.useState(false);
    const [flowControlMetricsLoading, setFlowControlMetricsLoading] = react_1.useState(false);
    const [timeDurationMetricsLoading, setTimeDurationMetricsLoading] = react_1.useState(false);
    const [n2nDuationMetricsLoading, setN2nDuationMetricsLoading] = react_1.useState(false);
    const [memoryMetricsLoading, setMemoryMetricsLoading] = react_1.useState(false);
    const [funcOndemandMetricsLoading, setFuncOndemandMetricsLoading] = react_1.useState(false);
    const [funcProvisionedMetricsLoading, setFuncProvisionedMetricsLoading] = react_1.useState(false);
    const [functionCostMetricsLoading, setFunctionCostMetricsLoading] = react_1.useState(false);
    const [destinationMetricsLoading, setDestinationMetricsLoading] = react_1.useState(false);
    const [reginConcurrencMetricsLoading, setReginConcurrencMetricsLoading] = react_1.useState(false);
    const [functionCallsMetrics, setFunctionCallsMetrics] = react_1.useState([]);
    const [functionErrors, setFunctionErrors] = react_1.useState([]);
    const [flowControlMetrics, setFlowControlMetrics] = react_1.useState([]);
    const [timeDurationMetrics, setTimeDurationMetrics] = react_1.useState([]);
    const [n2nDurationMetrics, setN2nDurationMetrics] = react_1.useState([]);
    const [memoryMetrics, setMemoryMetrics] = react_1.useState([]);
    const [funcOndemandMetrics, setFuncOndemandMetrics] = react_1.useState([]);
    const [funcProvisionedMetrics, setFuncProvisionedMetrics] = react_1.useState([]);
    const [regionConcurrencMetrics, setRegionConcurrencMetrics] = react_1.useState([]);
    const [functionCostMetrics, setFunctionCostMetrics] = react_1.useState([]);
    const [destinationMetrics, setDestinationMetrics] = react_1.useState([]);
    function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            // 调用总数
            const functionQualifierTotalInvocationsData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierTotalInvocations' }));
            const functionQualifierProvisionInvocationsData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierProvisionInvocations' }));
            setFunctionCallMetricLoading(false);
            const functionCallsMetrics = [...functionQualifierTotalInvocationsData, ...functionQualifierProvisionInvocationsData];
            console.log('functionTotalInvocationsApiData', functionCallsMetrics);
            setFunctionCallsMetrics(functionCallsMetrics);
            // 错误次数
            const functionQualifierServerErrorsData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierServerErrors' }));
            const FunctionQualifierClientErrorsData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierClientErrors' }));
            const FunctionQualifierFunctionErrorsData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierFunctionErrors' }));
            const functionErrors = [...functionQualifierServerErrorsData, ...FunctionQualifierClientErrorsData, ...FunctionQualifierFunctionErrorsData];
            setFunctionErrorsLoading(false);
            setFunctionErrors(functionErrors);
            // 并发实例
            const functionConcurrencyThrottleData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierConcurrencyThrottles' }));
            const functionResourceThrottlesData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierResourceThrottles' }));
            const flowControlMetrics = [...functionConcurrencyThrottleData, ...functionResourceThrottlesData];
            setFlowControlMetricsLoading(false);
            setFlowControlMetrics(flowControlMetrics);
            // 时间
            const functionAvgDurationData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierAvgDuration' }));
            const functionMaxDurationData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierMaxDuration' }));
            const timeDurationMetrics = [...functionAvgDurationData, ...functionMaxDurationData];
            setTimeDurationMetricsLoading(false);
            setTimeDurationMetrics(timeDurationMetrics);
            // 端到端时间
            const functionAvgLatencyAvgData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierLatencyAvg' }));
            const functionLatencyMaxData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierLatencyMax' }));
            const n2nDurationMetrics = [...functionAvgLatencyAvgData, ...functionLatencyMaxData];
            setN2nDuationMetricsLoading(false);
            setN2nDurationMetrics(n2nDurationMetrics);
            // 内存
            const memoryMetrics = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierMaxMemoryUsage' }));
            setMemoryMetricsLoading(false);
            setMemoryMetrics(memoryMetrics);
            // 预留实例
            const functionConcurrencyLimitData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierOndemandInstanceQuota' }));
            const functionQualifierOndemandActiveInstanceData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierOndemandActiveInstance' }));
            const funcOndemandMetrics = [...functionConcurrencyLimitData, ...functionQualifierOndemandActiveInstanceData];
            setFuncOndemandMetricsLoading(false);
            setFuncOndemandMetrics(funcOndemandMetrics);
            // 计算实例
            const functionQualifierProvisionedCurrentInstanceData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierProvisionedCurrentInstance' }));
            const funcProvisionedMetrics = [...functionQualifierProvisionedCurrentInstanceData];
            setFuncProvisionedMetricsLoading(false);
            setFuncProvisionedMetrics(funcProvisionedMetrics);
            // region
            const regionConcurrencyLimitData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'RegionConcurrencyLimit' }));
            const regionConcurrentCountData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'RegionConcurrentCount' }));
            const regionConcurrencMetrics = [...regionConcurrencyLimitData, ...regionConcurrentCountData];
            setReginConcurrencMetricsLoading(false);
            setRegionConcurrencMetrics(regionConcurrencMetrics);
            // 资源利用率
            const functionQualifierCostData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierCost' }));
            setFunctionCostMetricsLoading(false);
            setFunctionCostMetrics(functionQualifierCostData);
            // 并发执行
            const functionQualifierAsyncEventExpiredDroppedData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierAsyncEventExpiredDropped' }));
            const functionQualifierDestinationErrorsData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierDestinationErrors' }));
            const functionQualifierDestinationSucceededData = yield request_1.getMetricData(Object.assign(Object.assign({}, config), { metric: 'FunctionQualifierDestinationSucceeded' }));
            const destinationMetrics = [...functionQualifierAsyncEventExpiredDroppedData, ...functionQualifierDestinationErrorsData, ...functionQualifierDestinationSucceededData];
            setDestinationMetricsLoading(false);
            setDestinationMetrics(destinationMetrics);
        });
    }
    react_1.useEffect(() => {
        if (!lodash_1.isEmpty(config)) {
            setFunctionCallMetricLoading(true);
            setFunctionErrorsLoading(true);
            setFlowControlMetricsLoading(true);
            setTimeDurationMetricsLoading(true);
            setN2nDuationMetricsLoading(true);
            setMemoryMetricsLoading(true);
            setFuncOndemandMetricsLoading(true);
            setFuncProvisionedMetricsLoading(true);
            setFunctionCostMetricsLoading(true);
            setDestinationMetricsLoading(true);
            setReginConcurrencMetricsLoading(true);
            getData();
        }
    }, [config]);
    const loadingList = [
        functionCallMetricLoading,
        functionErrorsLoading,
        flowControlMetricsLoading,
        timeDurationMetricsLoading,
        n2nDuationMetricsLoading,
        memoryMetricsLoading,
        funcOndemandMetricsLoading,
        funcProvisionedMetricsLoading,
        functionCostMetricsLoading,
        destinationMetricsLoading,
        reginConcurrencMetricsLoading,
    ];
    const metricsVisible = loadingList.includes(true);
    // 只有所有图表的loading是false的情况下，在展示图表数据，其他情况下，不进行图表的渲染来提高性能
    const getChartData = (chartData, loadingFlag) => {
        return (!loadingFlag && chartData) || [];
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(Row, { className: "marginBottom20" },
            react_1.default.createElement(Col, { span: 8, style: { paddingRight: '15px' } },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.functionCallCount.lable'), data: getChartData(functionCallsMetrics, metricsVisible), params: config || {}, legendList: functionCallsNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.isEnLanguage() ? helper_1.WIDTH164 : helper_1.WIDTH144 }))),
            react_1.default.createElement(Col, { span: 8, style: { paddingRight: '15px' } },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.functionErrocCount.lable'), data: getChartData(functionErrors, metricsVisible), params: config || {}, legendList: functionErrorNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW2, maxWidth: helper_1.WIDTH210 }))),
            react_1.default.createElement(Col, { span: 8, style: { paddingRight: '15px' } },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.flowControlCount.lable'), data: getChartData(flowControlMetrics, metricsVisible), params: config || {}, legendList: flowControlNameLIst, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.isEnLanguage() ? helper_1.WIDTH164 : helper_1.WIDTH144 })))),
        react_1.default.createElement(Row, { className: "marginBottom20" },
            react_1.default.createElement(Col, { span: 8, style: { paddingRight: '15px' } },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: `${wind_intl_1.default('fc.dashboard.function.execution.time')}(ms)`, data: getChartData(timeDurationMetrics, metricsVisible), params: config || {}, legendList: timeDuationNameLIst, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.WIDTH95 }))),
            react_1.default.createElement(Col, { span: 8, style: { paddingRight: '15px' } },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.n2nduction.lable'), data: getChartData(n2nDurationMetrics, metricsVisible), params: config || {}, legendList: n2nDuationNameLIst, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.WIDTH95 }))),
            react_1.default.createElement(Col, { span: 8, style: { paddingRight: '15px' } },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: `${wind_intl_1.default('fc.dashboard.function.memory.title')}(MB)`, data: getChartData(memoryMetrics, metricsVisible), params: config || {}, legendList: memoryUsageNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.WIDTH95 })))),
        react_1.default.createElement(Row, { style: { marginBottom: 20 }, gutter: 20 },
            react_1.default.createElement(Col, { span: 8 },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.function.functionOndemandInstance'), data: getChartData(funcOndemandMetrics, metricsVisible), params: config || {}, legendList: funcOndemandNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.isEnLanguage() ? helper_1.WIDTH95 : helper_1.WIDTH164 }))),
            react_1.default.createElement(Col, { span: 8 },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.function.functionProvisionedInstanceCount'), data: getChartData(funcProvisionedMetrics, metricsVisible), params: config || {}, legendList: funcProvisionedNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.isEnLanguage() ? helper_1.WIDTH95 : helper_1.WIDTH144 }))),
            react_1.default.createElement(Col, { span: 8 },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.function.regionOndemandInstance'), data: getChartData(regionConcurrencMetrics, metricsVisible), params: config || {}, legendList: reginConcurrencyNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.isEnLanguage() ? helper_1.WIDTH95 : helper_1.WIDTH164 })))),
        react_1.default.createElement(Row, { style: { marginBottom: 20 }, gutter: 20 },
            react_1.default.createElement(Col, { span: 8 },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.function.functionUsage'), data: getChartData(functionCostMetrics, metricsVisible), params: config || {}, legendList: functionCostNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW1, maxWidth: helper_1.WIDTH100 }))),
            react_1.default.createElement(Col, { span: 8 },
                react_1.default.createElement(console_components_1.Card, { contentHeight: "auto" },
                    react_1.default.createElement(index_1.default, { visible: metricsVisible, title: wind_intl_1.default('fc.dashboard.function.asyncEvent.label'), data: getChartData(destinationMetrics, metricsVisible), params: config || {}, legendList: destinationNameList, isActive: helper_1.ISFUNCMETRICSACTIVE, sizePerRow: helper_1.SIZEROW2, maxWidth: helper_1.WIDTH200 }))))));
};
//# sourceMappingURL=index.js.map