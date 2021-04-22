export declare function getApiMetricsTaget(qualifier: any, metricName: any): any[];
export declare const mapTargetTOALL: {
    ServiceQualifierTotalInvocations: string;
    ServiceQualifierServerErrors: string;
    ServiceQualifierClientErrors: string;
    ServiceQualifierFunctionErrors: string;
    ServiceQualifierThrottles: string;
    ServiceQualifierResourceThrottles: string;
    FunctionQualifierTotalInvocations: string;
    FunctionQualifierProvisionInvocations: string;
    FunctionQualifierServerErrors: string;
    FunctionQualifierClientErrors: string;
    FunctionQualifierFunctionErrors: string;
    FunctionQualifierConcurrencyThrottles: string;
    FunctionQualifierResourceThrottles: string;
    FunctionQualifierAvgDuration: string;
    FunctionQualifierMaxDuration: string;
    FunctionQualifierLatencyAvg: string;
    FunctionQualifierLatencyMax: string;
    FunctionQualifierMaxMemoryUsage: string;
    FunctionQualifierOndemandInstanceQuota: string;
    FunctionQualifierOndemandActiveInstance: string;
    FunctionQualifierProvisionedCurrentInstance: string;
    RegionConcurrencyLimit: string;
    RegionConcurrentCount: string;
    FunctionQualifierCost: string;
    FunctionQualifierAsyncEventExpiredDropped: string;
    FunctionQualifierDestinationErrors: string;
    FunctionQualifierDestinationSucceeded: string;
    InstanceConcurrentRequests: string;
    InstanceCPUQuotaPercent: string;
    InstanceCPUPercent: string;
    InstanceMemoryLimitMB: string;
    InstanceMemoryUsageMB: string;
    InstanceMemoryUsagePercent: string;
    InstanceRxBytesPerSecond: string;
    InstanceTxBytesPerSecond: string;
    FunctionQualifierEnqueueCount: string;
    FunctionQualifierDequeueCount: string;
};
export declare const metricLegendListAll: {
    metricName: string;
    legendName: any;
    colorPrimary: string;
}[];
export declare function getMetricName(key: any): any;
export declare function transChartData(data: any, params: any): any;
export declare function aheadFrontForward(data: any, startTime: any, endTime: any): any;
export declare function intlNumberFormat(num: any): any;
export declare function formatBytes(a: any): string;
export declare function formatDuration(ms: any): string;
export declare function formatPercent(value: any): string;
export declare function convertPoints(data: any): any;
export declare function getTransQualifier(qualifier: any): any;
export declare function getTransTableData(out: any, name: any): any[];
declare global {
    interface Window {
        ALIYUN_FC_CONSOLE_CONFIG: any;
    }
}
export declare function isEnLanguage(): boolean;
export declare function getEchartColor(key: any): string;
export declare function findEchartValue(data: any, index: any): any;
export declare const staticfuncExecuData: string[];
export declare const staticFlowControlData: string[];
export declare const staticConcurrentRealData: string[];
export declare const staticFuncErrorData: string[];
export declare const staticTimesDurationData: string[];
export declare const staticMemoryData: string[];
export declare const staticDestinationData: string[];
export declare function getFuncExecution(TotalInvocations: any, ServerErrors: any, FunctionErrors: any, ClientErrors: any, endTime: any): any;
export declare function getFlowControl(Throttles: any, ResourceThrottles: any, endTime: any): any;
export declare function getConcurrentRealColumn(ConcurrencyLimit: any, ConcurrentCount: any, endTime: any): any;
export declare function getFunctionError(FunctionFunctionErrors: any): any;
export declare function getTimeDuation(FunctionAvgDuration: any, FunctionMaxDuration: any, FunctionLatencyAvg: any, FunctionLatencyMax: any): any;
export declare function getMemory(FunctionMaxMemoryUsage: any): any;
export declare function getDestination(FunctionAsyncEventExpiredDropped: any, FunctionDestinationErrors: any, FunctionDestinationSucceeded: any): {
    [x: string]: any;
    timestamp: any;
}[];
export declare function isEmptyArray(...data: any[]): boolean;
export declare function queryStringSearch(str: any): any;
export declare function chartsColors(): {
    functionChartsColors: string[];
    flowControlChartsColors: string[];
    concurrentRealColumnChartsColors: string[];
    specFunctionChartsColors: string[];
    errorChartsColors: string[];
    specflowControlChartsColors: string[];
    specConcurrentRealColumnChartsColors: string[];
    functionAvgDurationColors: string[];
    functionLatencyColors: string[];
    functionMemoryColors: string[];
    functionDestinationColors: string[];
    functionCostChartsColor: string[];
    functionProvisionedInstanceCountColors: string[];
    metricServericFunChartsColors: string[];
};
export declare const funFunctionItem: {
    id: string;
    name: any;
    value: any;
    marker: {
        symbol: string;
        style: {
            fill: string;
        };
    };
}[];
export declare const specErrorFunctionLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare const specConcurrentRealLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare const specUtilizationLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare const metricsServiceLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare const metricsServicerRatesLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare const metricsfunFunctionLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare function chartsItemsInfo(): {
    functionChartItem: string[];
    flowControlChartsItem: string[];
    concurrentRealColumnChartsItem: string[];
    specFunctionChartsItem: string[];
    errorChartsItem: string[];
    specflowControlChartsItem: string[];
    specConcurrentRealColumnChartItem: string[];
    functionAvgDurationItem: string[];
    functionLatencyItem: string[];
    functionMemoryItem: string[];
    functionDestinationItem: string[];
};
export declare const sessionCharNames: {
    reginFunction: string;
    reginFlow: string;
    reginConcurrent: string;
};
/**
 * @description 处理数字为K,M,G,T,P,E
 *  {K:千, M:百万,G:10亿,T:兆，P：千兆:E:百京}
 * @param {Number} val 要处理的数字
 * @param {Number} num 保留几位小数，1000表示3位, 1表是不保留小数
 */
export declare function publicComputeUnit(val: any, num: number, unit: number, initUnit: any): any;
export declare const funcFunctionLegendList: {
    name: any;
    colorPrimary: string;
}[];
export declare const ISFUNCMETRICSACTIVE = true;
export declare const SIZEROW1 = 1;
export declare const SIZEROW2 = 2;
export declare const WIDTH95 = 95;
export declare const WIDTH100 = 100;
export declare const WIDTH124 = 124;
export declare const WIDTH130 = 130;
export declare const WIDTH144 = 144;
export declare const WIDTH164 = 164;
export declare const WIDTH190 = 190;
export declare const WIDTH200 = 200;
export declare const WIDTH210 = 210;
export declare const WIDTH230 = 230;
export declare const WIDTH310 = 310;
