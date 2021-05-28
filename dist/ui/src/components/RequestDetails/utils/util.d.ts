/**
 * 获取诊断详细信息
 * @param {*} params
 */
export function getCookieValue(key: any): string | Error;
/**
 * 获取诊断详细信息
 * @param {*} params
 */
export function i18nDocLinkFun(key: any, def: any): any;
export function formattedNumber(num: any): string;
export function noop(): void;
export function decoratorFactory(name?: string): any;
export function toCopy(ctx: any): void;
export function strTemp(temp: any, data: any, options: any): any;
export function intlTemp(key: any, data: any): any;
export function getMinMax(arr: any, key: any): any[];
export function getFixed(val: any): 1 | 2 | 0;
export function formatterRt(value: any): any;
export function formatMinuteYAxes(dimValue: any): any;
export function format1000YAxes(dimVal: any): string | number;
export function formatMemYAxes(dimValue: any): any;
export function formatChartData(data: any, name: any, y: any, x: string, alias: any): {
    name: any;
    data: any;
    max: number;
}[];
export function exceptionFormatChartData(data: any, name: any, y: any, x?: string): {
    name: string;
    data: any;
    max: number;
}[];
export function formatDimChartDateData(ds?: {}, options?: {}): any[];
export function isSameMoments(a?: any[], b?: any[]): boolean;
export function getArrKeySum(data: any, ...keys: any[]): any;
export function createObj(str: any, value: any): {};
export function sortData(data: any, sortKey: any, sort: any): any;
export function getAppName(pid: any): any;
export function getAppInfo(pid: any): any;
export function getAppSiteType(pid: any): any;
export function parseSearch(search: any): {};
export function getAlarmBaseUrl(): "/arms?alarm_home&iframeMode" | "http://arms-daily.console.aliyun.com:3300?alarm_home=1";
export function genID(length: any): string;
export function getHashMap(data: any, primaryKeys?: any[], isFormatObj?: boolean): {};
