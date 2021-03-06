import React from 'react';
import { intl } from '../../../utils/handlerChartData';
import _ from 'lodash';
import moment from 'moment';
import { Balloon } from "@alicloud/console-components";


const config = window.ALIYUN_FC_CONSOLE_CONFIG || {};

//映射qulifer是ALL的指标名称字段
export const mapTargetTOALL = {
  ServiceQualifierTotalInvocations: 'ServiceTotalInvocations',
  ServiceQualifierServerErrors: 'ServiceServerErrors',
  ServiceQualifierClientErrors: 'ServiceClientErrors',
  ServiceQualifierFunctionErrors: 'ServiceFunctionErrors',
  ServiceQualifierThrottles: 'ServiceThrottles',
  ServiceQualifierResourceThrottles: 'ServiceResourceThrottles',

  FunctionQualifierTotalInvocations: 'FunctionTotalInvocations',
  FunctionQualifierProvisionInvocations: 'FunctionProvisionInvocations',

  FunctionQualifierServerErrors: 'FunctionServerErrors',
  FunctionQualifierClientErrors: 'FunctionClientErrors',
  FunctionQualifierFunctionErrors: 'FunctionFunctionErrors',

  FunctionQualifierConcurrencyThrottles: 'FunctionConcurrencyThrottles',
  FunctionQualifierResourceThrottles: 'FunctionResourceThrottles',

  FunctionQualifierAvgDuration: 'FunctionAvgDuration',
  FunctionQualifierMaxDuration: 'FunctionMaxDuration',

  FunctionQualifierLatencyAvg: 'FunctionLatencyAvg',
  FunctionQualifierLatencyMax: 'FunctionLatencyMax',

  FunctionQualifierMaxMemoryUsage: 'FunctionMaxMemoryUsage',

  FunctionQualifierOndemandInstanceQuota: 'FunctionOndemandInstanceQuota',
  FunctionQualifierOndemandActiveInstance: 'FunctionOndemandActiveInstance',

  FunctionQualifierProvisionedCurrentInstance: 'FunctionProvisionedCurrentInstance',

  RegionConcurrencyLimit: 'RegionConcurrencyLimit',
  RegionConcurrentCount: 'RegionConcurrentCount',

  FunctionQualifierCost: 'FunctionCost',

  FunctionQualifierAsyncEventExpiredDropped: 'FunctionAsyncEventExpiredDropped',
  FunctionQualifierDestinationErrors: 'FunctionDestinationErrors',
  FunctionQualifierDestinationSucceeded: 'FunctionDestinationSucceeded',
  InstanceConcurrentRequests: 'InstanceConcurrentRequests',
  InstanceCPUQuotaPercent: 'InstanceCPUQuotaPercent',
  InstanceCPUPercent: 'InstanceCPUPercent',
  InstanceMemoryLimitMB: 'InstanceMemoryLimitMB',
  InstanceMemoryUsageMB: 'InstanceMemoryUsageMB',
  InstanceMemoryUsagePercent: 'InstanceMemoryUsagePercent',
  InstanceRxBytesPerSecond: 'InstanceRxBytesPerSecond',
  InstanceTxBytesPerSecond: 'InstanceTxBytesPerSecond',
  FunctionQualifierEnqueueCount: 'FunctionEnqueueCount',
  FunctionQualifierDequeueCount: 'FunctionDequeueCount',
}

export const metricLegendListAll = [

  { metricName: 'RegionTotalInvocations', legendName: intl('fc.dashboard.success.label'), colorPrimary: '#0881FE', },
  { metricName: 'RegionServerErrors', legendName: intl('fc.dashboard.server.error.label'), colorPrimary: '#751616', },
  { metricName: 'RegionClientErrors', legendName: intl('fc.dashboard.client.error.label'), colorPrimary: '#E44F2F', },
  { metricName: 'RegionFunctionErrors', legendName: intl('fc.dashboard.function.error.label'), colorPrimary: '#E44390', },

  { metricName: 'ServiceConcurrencyLimit', legendName: intl('fc.dashboard.concurrent.max.label'), colorPrimary: '#FF7E4F', },
  { metricName: 'ServiceConcurrentCount', legendName: intl('fc.dashboard.functionConcurrentCount.lable'), colorPrimary: '#0881FE', },

  { metricName: 'ServiceConcurrentCount', legendName: intl('fc.dashboard.function.serviceConcurrentTol'), colorPrimary: '#2BABA8', },

  { metricName: 'FunctionQualifierTotalInvocations', legendName: intl('fc.dashboard.allCount.lable'), colorPrimary: '#0881FE', },
  { metricName: 'FunctionQualifierProvisionInvocations', legendName: intl('fc.dashboard.singletonCount.lable'), colorPrimary: '#5ad8a6', },

  { metricName: 'FunctionQualifierServerErrors', legendName: intl('fc.metrics.legend.service_errors'), colorPrimary: '#751616', },
  { metricName: 'FunctionQualifierClientErrors', legendName: intl('fc.metrics.legend.client_errors'), colorPrimary: '#E44F2F', },
  { metricName: 'FunctionQualifierFunctionErrors', legendName: intl('fc.metrics.legend.function_errors'), colorPrimary: '#E44390', },

  { metricName: 'FunctionQualifierConcurrencyThrottles', legendName: intl('fc.dashboard.traffic.control.concurrent.label'), colorPrimary: '#826AF9', },
  { metricName: 'FunctionQualifierResourceThrottles', legendName: intl('fc.dashboard.traffic.control.total.label'), colorPrimary: '#0881FE', },

  { metricName: 'FunctionQualifierAvgDuration', legendName: intl('fc.dashboard.functionAvgDuration.lable'), colorPrimary: '#0881FE', },
  { metricName: 'FunctionQualifierMaxDuration', legendName: intl('fc.dashboard.functionMaxDuration.lable'), colorPrimary: '#FF7E4F', },

  { metricName: 'FunctionQualifierLatencyAvg', legendName: intl('fc.dashboard.functionLatencyAvg.lable'), colorPrimary: '#0881FE', },
  { metricName: 'FunctionQualifierLatencyMax', legendName: intl('fc.dashboard.functionLatencyMax.lable'), colorPrimary: '#FF7E4F', },

  { metricName: 'FunctionQualifierMaxMemoryUsage', legendName: intl('fc.dashboard.function.memory.max.label'), colorPrimary: '#FF7E4F', },

  { metricName: 'FunctionQualifierOndemandInstanceQuota', legendName: intl('fc.dashboard.function.functionProvisionedInstanceCountLimit'), colorPrimary: '#FF7E4F', },
  { metricName: 'FunctionQualifierOndemandActiveInstance', legendName: intl('fc.dashboard.function.functionProvisionedInstanceCountCurrent'), colorPrimary: '#2BABA8', },

  { metricName: 'FunctionQualifierProvisionedCurrentInstance', legendName: intl('fc.dashboard.function.functionProvisionedCurrentInstanceCount'), colorPrimary: '#2BABA8', },
  { metricName: 'FunctionTotalActiveInstance', legendName: intl('fc.dashboard.function.functionProvisionedAlreadyCurrentInstance'), colorPrimary: '#0881FE', },

  { metricName: 'RegionConcurrencyLimit', legendName: intl('fc.dashboard.function.regionProvisionedInstanceCountLimit'), colorPrimary: '#FF7E4F', },
  { metricName: 'RegionConcurrentCount', legendName: intl('fc.dashboard.function.regionProvisionedInstanceCountCurrent'), colorPrimary: '#2BABA8', },

  { metricName: 'FunctionQualifierCost', legendName: intl('fc.dashboard.function.functionUseageInfo'), colorPrimary: '#0881FE', },

  { metricName: 'FunctionQualifierAsyncEventExpiredDropped', legendName: intl('fc.dashboard.destination.asyncEventExpiredDropped.label'), colorPrimary: '#E44390', },
  { metricName: 'FunctionQualifierDestinationErrors', legendName: intl('fc.dashboard.destination.error.label'), colorPrimary: '#E44F2F', },
  { metricName: 'FunctionQualifierDestinationSucceeded', legendName: intl('fc.dashboard.function.destination.succeed.label'), colorPrimary: '#5ad8a6', },
];

export function getMetricName(key) {
  const findArr = metricLegendListAll.filter((item) => item.metricName === key);
  return findArr[0] && findArr[0].legendName || '';
}



export function transChartData(data, params) {
  const { metric, startTime, endTime } = params;
  const getData = aheadFrontForward(data, Number(startTime), Number(endTime));
  return (getData || []).map((item: { Value: number, timestamp: string, }) => {
    return {
      names: getMetricName(metric),
      value: item.Value,
      timestamp: moment(item.timestamp).format('YYYY-MM-DD HH:mm'),
      id: item.timestamp,
      unit: `${moment(item.timestamp).format('lll')}`
    }
  })
}

//获取Function级别table数据
export function transFunctionTable(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  const out = data;

  //按照请求时间降序排列
  const sortOut = _.sortBy(out, function (item) {
    return -item.__time__;
  }) || [];
  //获取最大的调用时间
  let maxDurationMs = sortOut[0] && sortOut[0].durationMs || 0;
  let maxMemoryUsageMB = sortOut[0] && sortOut[0].memoryUsageMB || 0;
  sortOut.forEach((item) => {
    if (Number(item.durationMs) > Number(maxDurationMs)) {
      maxDurationMs = item.durationMs;
    }
    if (Number(item.memoryUsageMB) > Number(maxMemoryUsageMB)) {
      maxMemoryUsageMB = item.memoryUsageMB;
    }
  })

  sortOut.forEach((item) => {
    item.contentWidthNumber = (item.durationMs / maxDurationMs) * 100;
    item.contentWidth = (item.durationMs / maxDurationMs) * 100 + '%';
    item.contentMemoryWidthNumber = (item.memoryUsageMB / maxMemoryUsageMB) * 100;
    item.contentMemoryWidth = (item.memoryUsageMB / maxMemoryUsageMB) * 100 + '%';
  })
  return sortOut || [];
}


//获取不同qulifer时候，接口的入参指标
export function getApiMetricsTaget(qualifier, metricsNameList) {
  if (!qualifier || qualifier === "ALL") {
    try {
      return metricsNameList.map((item) => {
        return mapTargetTOALL[item];
      })
    } catch (e) {
      throw `指标不存在`;
    }
  } else {
    return metricsNameList;
  }
}

//当数组里首位不是开始时间的话，需要将开始时间补全进去
export function aheadFrontForward(data: any = [{}], startTime, endTime) {
  if (!data[0] || data[0].timestamp != startTime) {
    const item = {
      Value: null,
      timestamp: startTime,
    };
    data.unshift(item);
  }

  if (!data[0] || data[data.length - 1].timestamp != endTime) {
    const item = {
      Value: null,
      timestamp: endTime,

    };
    data.push(item);
  }
  return data;
}

function roundFun(value, n) {
  const pow = 10 ** n;
  return Math.round(value * pow) / pow;
}

export function intlNumberFormat(num) {
  if (typeof Intl !== 'object' || typeof Intl.NumberFormat !== 'function') {
    return num;
  }
  try {
    return new Intl.NumberFormat(window && window.ALIYUN_FC_CONSOLE_CONFIG === 'zh_CN' ? 'zh' : 'en').format(
      num || 0,
    );
  } catch (error) {
    return num;
  }
}
export function getConfig(key) {
  if (key === 'regions') {
    return [
      { regionId: 'cn-beijing' },
      { regionId: 'cn-hangzhou' },
      { regionId: 'ap-southeast-1' },
      { regionId: 'cn-hongkong' },
      { regionId: 'cn-shanghai' },
      { regionId: 'cn-shenzhen' },
      { regionId: 'ap-southeast-2' },
      { regionId: 'ap-northeast-1' }
    ];
  }
  if (key === 'vpcStatus') {
    return true;
  }
  if (key === 'serviceStatus') {
    if (config.ubmsWhite) { // 当前用户是否在 ubms 白名单里面，在则进入
      return true;
    }
    if (config.serviceStatus && config.spStatus) { // 如果 fc 开通并且（sp 存在 或者 请求 sp 异常）则一定为true
      return true;
    }
    return false; // 用户没有开通 fc 或者 sp.chargeType !== 'AfterPay' 为空, 则没有开通
  }
  return config[key];
}

export const momentFormat = (value) => {
  const lang = getConfig('lang');
  const format = lang === 'zh_CN' ? 'YYYY年MM月DD日 HH:mm:ss' : 'MMM D, YYYY, h:mm:ss';
  return moment.utc(value).local().format(format);
};

export function TableColStyle(value, contentWidth, contentWidthNumber) {
  if ((0 < contentWidthNumber) && (contentWidthNumber < 1)) {
    contentWidth = '1%'
  }

  const innerBg = {
    width: contentWidth,
    height: '6px',
    background: '#e1effe',
    backgroundImage: `linear-gradient(90deg, #9FC9FF 0%, #0881FE 100%)`,
    boxShadow: `0 -1px 0 0 #EBEBEB`,
    marginTop: '8px',
  }

  const ballonFont = {
    width: '96%',
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    cursor: 'pointer',
  }
  const Tooltip = Balloon.Tooltip;
  return (
    <div>
      <div style={{ float: 'left', width: '35%', height: '20px', textAlign: 'left' }}>
        <Tooltip trigger={<div style={ballonFont}>{value}</div>} align='l'>
          {value}
        </Tooltip>
      </div>
      <div style={{ float: 'left', width: '50%', height: '20px', textAlign: 'left' }}>
        <div style={innerBg}></div>
      </div>
    </div>
  )
}

export function formatBytes(a) {
  if (a === 0) {
    return '0 Bytes';
  }
  const d = Math.floor(Math.log(a) / Math.log(1024));
  const pow = 1024 ** d;
  return `${parseFloat((a / pow).toFixed(2))} ${['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
    }`;
}

export function formatDuration(ms) {
  if (ms === '' || ms === -1 || ms === null || ms === undefined) {
    return '--';
  }

  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: ms % 1000 > 10 ? Math.round(ms % 1000) : roundFun(ms % 1000, 2),
  };
  let found = false;
  if (time.second > 10) {
    time.millisecond = 0;
  }
  const filtered = [];
  const { length } = Object.keys(time);
  Object.keys(time).forEach((key, index) => {
    if (time[key] > 0 || found) {
      if (index !== length - 1 || time[key] > 0) {
        filtered.push(`${time[key]} ${intl(`time.diff.uinit.${key}${time[key] > 1 ? 's' : ''}`)}`);
      }
      if (time[key] > 0 && !found) {
        found = true;
      }
    }
  });

  return filtered.slice(0, 2).join(' ');
}


export function formatPercent(value) {
  return `${roundFun(value * 100, 2)} %`;
}

export function convertPoints(data) {
  const out = (data || []).map((v) => ({
    x: v.timestamp,
    y: v.Value,
  }));
  return out;
}


export function getTransQualifier(qualifier) {
  if (qualifier && qualifier !== 'ALL') {
    return qualifier;
  }
  return null;
}


export function getTransTableData(out, name) {
  const sortOut = _.sortBy(out, (item) => {
    return -item[name];
  }) || [];

  const getMaxInvocations = sortOut[0] && sortOut[0][name] || 0;
  sortOut.forEach((item) => {
    item.contentWidthNumber = (item[name] / getMaxInvocations) * 100;
    item.contentWidth = `${(item[name] / getMaxInvocations) * 100}%`;
  });
  return sortOut;
}


declare global {
  interface Window {
    ALIYUN_FC_CONSOLE_CONFIG: any;
  }
}
export function isEnLanguage() {
  const config = window.ALIYUN_FC_CONSOLE_CONFIG || {};
  if (config.lang === 'en_US') {
    return true;
  }
  return false;
}

interface FindObjClass {
  name: string;
  value: string;
}
export function getEchartColor(key) {
  const chartsClors = [
    { name: intl('fc.dashboard.success.label'), value: '#0881FE' },
    { name: intl('fc.dashboard.server.error.label'), value: '#751616' },
    { name: intl('fc.dashboard.function.error.label'), value: '#E44F2F' },
    { name: intl('fc.dashboard.client.error.label'), value: '#E44390' },
    { name: intl('fc.dashboard.traffic.control.concurrent.label'), value: '#826AF9' },
    { name: intl('fc.dashboard.traffic.control.total.label'), value: '#0881FE' },
    { name: intl('fc.dashboard.concurrent.count.label'), value: '#FF7E4F' },
    { name: intl('fc.dashboard.concurrent.max.label'), value: '#2BABA8' },
    { name: intl('fc.dashboard.function.error.title'), value: '#0881FE' },
    { name: intl('fc.dashboard.exec.time.avg.label'), value: '#0881FE' },
    { name: intl('fc.dashboard.exec.time.max.label'), value: '#751616' },
    { name: intl('fc.dashboard.exec.time.latency.avg.label'), value: '#E44F2F' },
    { name: intl('fc.dashboard.exec.time.latency.max.label'), value: '#E44390' },
    { name: intl('fc.dashboard.function.memory.max.label'), value: '#FF7E4F' },
    { name: intl('fc.dashboard.function.destination.succeed.label'), value: '#2BABA8' },
    { name: intl('fc.dashboard.destination.error.label'), value: '#FF7E4F' },
    { name: intl('fc.dashboard.destination.asyncEventExpiredDropped.label'), value: '#E44F2F' },
  ];
  const findObj: FindObjClass = _.find(chartsClors, (item) => item.name === key) || { name: '', value: '0070CC' };
  return findObj.value || '0070CC';
}

export function findEchartValue(data, index) {
  return data && data[index] && data[index].Value || 0;
}

export const staticfuncExecuData = ['调用次数', '服务端错误', '函数错误', '客户端错误'];
export const staticFlowControlData = ['并发实例超上限', '实例总数超上限'];
export const staticConcurrentRealData = ['并发实例数', '并发实例上限'];
export const staticFuncErrorData = ['函数错误'];
export const staticTimesDurationData = ['平均耗时', '最大耗时', '平均延迟', '最大延迟'];
export const staticMemoryData = ['最大消耗内存'];
export const staticDestinationData = ['超时丢弃', '目标触发失败', '目标触发成功'];


export function getFuncExecution(TotalInvocations, ServerErrors, FunctionErrors, ClientErrors, endTime) {
  if (Array.isArray(TotalInvocations) && TotalInvocations.length === 0) {
    return [{
      [staticfuncExecuData[0]]: null,
      [staticfuncExecuData[1]]: null,
      [staticfuncExecuData[2]]: null,
      [staticfuncExecuData[3]]: null,
      timestamp: endTime,
    }];
  }

  return (TotalInvocations || []).map((item, index) => {
    return {
      [staticfuncExecuData[0]]: findEchartValue(TotalInvocations, index),
      [staticfuncExecuData[1]]: findEchartValue(ServerErrors, index),
      [staticfuncExecuData[2]]: findEchartValue(FunctionErrors, index),
      [staticfuncExecuData[3]]: findEchartValue(ClientErrors, index),
      timestamp: item.timestamp || 0,
    };
  });
}

export function getFlowControl(Throttles, ResourceThrottles, endTime) {
  if (Array.isArray(Throttles) && Array.isArray(ResourceThrottles) && Throttles.length === 0 && ResourceThrottles.length === 0) {
    return [{
      [staticFlowControlData[0]]: null,
      [staticFlowControlData[1]]: null,
      timestamp: endTime,
    }];
  }

  return (Throttles || []).map((item, index) => {
    return {
      [staticFlowControlData[0]]: findEchartValue(Throttles, index),
      [staticFlowControlData[1]]: findEchartValue(ResourceThrottles, index),
      timestamp: item.timestamp || 0,
    };
  });
}

export function getConcurrentRealColumn(ConcurrencyLimit, ConcurrentCount, endTime) {
  if (Array.isArray(ConcurrencyLimit) && Array.isArray(ConcurrentCount) && ConcurrencyLimit.length === 0 && ConcurrentCount.length === 0) {
    return [{
      [staticConcurrentRealData[0]]: null,
      [staticConcurrentRealData[1]]: null,
      timestamp: endTime,
    }];
  }


  return (ConcurrencyLimit || []).map((item, index) => {
    return {
      [staticConcurrentRealData[0]]: findEchartValue(ConcurrencyLimit, index),
      [staticConcurrentRealData[1]]: findEchartValue(ConcurrentCount, index),
      timestamp: item.timestamp,
    };
  });
}

export function getFunctionError(FunctionFunctionErrors) {
  return (FunctionFunctionErrors || []).map((item, index) => {
    return {
      [staticFuncErrorData[0]]: findEchartValue(FunctionFunctionErrors, index),
      timestamp: item.timestamp,
    };
  });
}

export function getTimeDuation(FunctionAvgDuration, FunctionMaxDuration, FunctionLatencyAvg, FunctionLatencyMax) {
  return (FunctionAvgDuration || []).map((item, index) => {
    return {
      [staticTimesDurationData[0]]: findEchartValue(FunctionAvgDuration, index),
      [staticTimesDurationData[1]]: findEchartValue(FunctionMaxDuration, index),
      [staticTimesDurationData[2]]: findEchartValue(FunctionLatencyAvg, index),
      [staticTimesDurationData[3]]: findEchartValue(FunctionLatencyMax, index),
      timestamp: item.timestamp,
    };
  });
}

export function getMemory(FunctionMaxMemoryUsage) {
  return (FunctionMaxMemoryUsage || []).map((item, index) => {
    return {
      [staticMemoryData[0]]: findEchartValue(FunctionMaxMemoryUsage, index),
      timestamp: item.timestamp,
    };
  });
}

export function getDestination(FunctionAsyncEventExpiredDropped, FunctionDestinationErrors, FunctionDestinationSucceeded) {
  const getData = hasData(FunctionAsyncEventExpiredDropped) || hasData(FunctionDestinationErrors) || hasData(FunctionDestinationSucceeded);
  return (getData || []).map((item, index) => {
    return {
      [staticDestinationData[0]]: findEchartValue(FunctionAsyncEventExpiredDropped, index),
      [staticDestinationData[1]]: findEchartValue(FunctionDestinationErrors, index),
      [staticDestinationData[2]]: findEchartValue(FunctionDestinationSucceeded, index),
      timestamp: item.timestamp,
    };
  });
}

function hasData(data) {
  if (Array.isArray(data) && data.length !== 0) {
    return data;
  }
  return null;
}


// 用来判断API返回的当前图表数据是不是都是空的,主要是用来区分要不要对空数组进行数据填充
// 如果都是[]，就不需要，如果有某些是[],就需要进行数据补充，请查看getChartData方法
export function isEmptyArray(...data) {
  for (const key in data) {
    if (Array.isArray(data[key]) && data[key].length !== 0) {
      return false;
    }
  }
  return true;
}


export function queryStringSearch(str): { startTime: string, endTime: string, recent: string, traceId?: string, qualifier?: string } {
  const string = (str !== undefined) ? str : window.location.search;
  let result = string.match(new RegExp('[^\?\&]+=[^\?\&]+', 'g'));
  if (result == null) {
    return { startTime: "", endTime: "", recent: "", traceId: '' };
  }

  const params = {};
  for (let i = 0; i < result.length; i++) {
    const res = result[i].split('=');
    const getValue = (res[1] === 'undefined') ? '' : res[1];
    const key = res[0];
    const value = getValue;
    params[key] = value;
  }
  result = params;
  return result;
}

export function chartsColors() {
  return {
    functionChartsColors: ['#0881FE', '#751616', '#E44390', '#E44F2F'],
    flowControlChartsColors: ['#826AF9', '#0881FE'],
    concurrentRealColumnChartsColors: ['#2BABA8', '#FF7E4F'],
    specFunctionChartsColors: ['#0881FE', 'rgb(90 216 166)'],
    errorChartsColors: ['#751616', '#E44F2F', '#E44390'],
    specflowControlChartsColors: ['#826AF9', '#0881FE'],
    specConcurrentRealColumnChartsColors: ['#FF7E4F', '#2BABA8'],
    functionAvgDurationColors: ['#0881FE', 'rgb(90 216 166)'],
    functionLatencyColors: ['#0881FE', 'rgb(90 216 166)'],
    functionMemoryColors: ['#FF7E4F'],
    functionDestinationColors: ['#E44390', 'rgb(90 216 166)', '#E44F2F'],
    functionCostChartsColor: ['#0881FE'],
    functionProvisionedInstanceCountColors: ['#2BABA8', '#0881FE'],
    metricServericFunChartsColors: ['#E44F2F', '#751616', '#0881FE'],
  };
}


export const funFunctionItem = [
  {
    id: '1',
    name: intl('fc.dashboard.success.label'),
    value: intl('fc.dashboard.success.label'),
    marker: {
      symbol: 'square',
      style: { fill: '#0881FE' },
    },
  },
  {
    id: '2',
    name: intl('fc.dashboard.server.error.label'),
    value: intl('fc.dashboard.server.error.label'),
    marker: {
      symbol: 'square',
      style: { fill: '#751616' },
    },
  },
  {
    id: '3',
    name: intl('fc.dashboard.client.error.label'),
    value: intl('fc.dashboard.client.error.label'),
    marker: {
      symbol: 'square',
      style: { fill: '#E44F2F' },
    },
  },
  {
    id: '4',
    name: intl('fc.dashboard.function.error.label'),
    value: intl('fc.dashboard.function.error.label'),
    marker: {
      symbol: 'square',
      style: { fill: '#E44390' },
    },
  },

];


export const specErrorFunctionLegendList =
  [
    {
      name: intl('fc.dashboard.server.error.label'),
      colorPrimary: '#751616',
    },
    {
      name: intl('fc.dashboard.client.error.label'),
      colorPrimary: '#E44F2F',
    },
    {
      name: intl('fc.dashboard.function.error.label'),
      colorPrimary: '#E44390',
    },
  ];


export const specConcurrentRealLegendList =
  [
    {
      name: intl('fc.dashboard.concurrent.max.label'),
      colorPrimary: '#FF7E4F',
    },
    {
      name: intl('fc.dashboard.functionConcurrentCount.lable'),
      colorPrimary: '#2BABA8',
    },
  ];


export const specUtilizationLegendList =
  [
    {
      name: intl('fc.dashboard.function.functionProvisionedInstanceUtilization'),
      colorPrimary: '#0881FE',
    },
  ];

export const metricsServiceLegendList =
  [
    {
      name: intl('fc.dashboard.server.error.label'),
      colorPrimary: '#751616',
    },
    {
      name: intl('fc.dashboard.client.error.label'),
      colorPrimary: '#E44F2F',
    },
    {
      name: intl('fc.metrics.legend.total_invocathions'),
      colorPrimary: '#0881FE',
    },
  ];

export const metricsServicerRatesLegendList =
  [
    {
      name: intl('fc.metrics.rate.service_errors'),
      colorPrimary: '#751616',
    },
    {
      name: intl('fc.metrics.rate.clent_errors'),
      colorPrimary: '#E44F2F',
    },
    {
      name: intl('fc.metrics.legend.total_invocathions'),
      colorPrimary: '#0881FE',
    },
  ];

export const metricsfunFunctionLegendList =
  [
    {
      name: intl('fc.dashboard.server.error.label'),
      colorPrimary: '#751616',
    },
    {
      name: intl('fc.dashboard.client.error.label'),
      colorPrimary: '#E44F2F',
    },
    {
      name: intl('fc.metrics.legend.total_invocathions'),
      colorPrimary: '#0881FE',
    },
  ];


export function chartsItemsInfo() {
  return {
    functionChartItem: ['#0881FE', '#751616', '#E44F2F', '#E44390'],
    flowControlChartsItem: ['#826AF9', '#0881FE'],
    concurrentRealColumnChartsItem: ['#2BABA8', '#FF7E4F'],
    specFunctionChartsItem: ['#0881FE', 'rgb(90 216 166)'],
    errorChartsItem: ['#751616', '#E44F2F', '#E44390'],
    specflowControlChartsItem: ['#826AF9', '#0881FE'],
    specConcurrentRealColumnChartItem: ['#FF7E4F', '#2BABA8', '#0881FE'],
    functionAvgDurationItem: ['#0881FE', 'rgb(90 216 166)'],
    functionLatencyItem: ['#0881FE', 'rgb(90 216 166)'],
    functionMemoryItem: ['#FF7E4F'],
    functionDestinationItem: ['#E44390', 'rgb(90 216 166)', '#E44F2F'],
  };
}

export const sessionCharNames = {
  reginFunction: 'reginFunction',
  reginFlow: 'reginFlow',
  reginConcurrent: 'reginConcurrent',
};

const unitList = ['K', 'M', 'G', 'T', 'P', 'E'];
const unitData = {
  K: 1000,
  M: 1000000,
  G: 1000000000,
  T: 1000000000000,
  P: 1000000000000000,
  E: 1000000000000000000,
};

/**
 * @description 处理数字为K,M,G,T,P,E
 *  {K:千, M:百万,G:10亿,T:兆，P：千兆:E:百京}
 * @param {Number} val 要处理的数字
 * @param {Number} num 保留几位小数，1000表示3位, 1表是不保留小数
 */
export function publicComputeUnit(val, num = 1000, unit = -1, initUnit) {
  if (val) {
    // 固定单位
    const initNum = unitData[initUnit];
    if (initUnit && initNum) {
      return `${Math.round(((val - 0) / initNum) * num) / num}${initUnit}`;
    }

    // 自适应单位
    if (parseInt(val, 10) >= 1000 && unit < 5) {
      const currentVal = Math.round(val - 0) / 1000;
      const unitTmp = unit + 1;
      return publicComputeUnit(currentVal, num, unitTmp, '');
    }
    if (unit >= 0) {
      return `${Math.round((val - 0) * num) / num}${unitList[unit]}`;
    }
    return Math.round((val - 0) * num) / num;
  }
  return 0;
}

export const funcFunctionLegendList = [
  {
    name: intl('fc.dashboard.success.label'),
    colorPrimary: '#0881FE',
  },
  {
    name: intl('fc.dashboard.server.error.label'),
    colorPrimary: '#751616',
  },
  {
    name: intl('fc.dashboard.function.error.label'),
    colorPrimary: '#E44F2F',
  },
  {
    name: intl('fc.dashboard.client.error.label'),
    colorPrimary: '#E44390',
  },
];

//获取table的行点击的数据
export function getExpandRow(timeLineData) {
  if (!timeLineData || !timeLineData.Spans || !timeLineData.Spans.Span || timeLineData.Spans.Span.length == 0) {
    return [];
  }

  const originArr = Array.isArray(timeLineData.Spans.Span) ? (timeLineData.Spans.Span) : [];
  const expandRowArr = originArr.map((item) => item.RpcId);
  console.log('expandRowArr', expandRowArr);
  return expandRowArr;

}

//获取table的数据
export function getTableData(timeLineData) {
  if (!timeLineData || !timeLineData.Spans || !timeLineData.Spans.Span) {
    return {};
  }

  let rootEle;
  const originArr = Array.isArray(timeLineData.Spans.Span) ? (timeLineData.Spans.Span) : [];
  const idArr = [];
  originArr.forEach(element => {
    const splitArr = element.RpcId.split('.');
    if (splitArr && splitArr.length > 1) {
      splitArr.splice(splitArr.length - 1, 1);
      console.log('splitArr.splice(splitArr.length,1)', splitArr);
      element.PID = splitArr.join('.');
      if (idArr.indexOf(element.ServiceName) == -1) {
        idArr.push(element.ServiceName)
        element.id = element.ServiceName;
      }
    } else {
      element.PID = null;
      element.id = element.ServiceName;
      rootEle = element;
      if (idArr.indexOf(element.ServiceName) == -1) {
        idArr.push(element.ServiceName)
        element.id = element.ServiceName;
      }
    }
  });

  return transTableInfo(originArr, rootEle);

}


//增加偏移量字段和所占UI宽阔比例
export function transTableInfo(originArr, rootEle) {
  const { Duration, Timestamp } = rootEle || {};
  const ereyyMSWidth = 1 / Number(Duration);
  const numberTimestamp = Number(Timestamp);
  originArr.forEach((item) => {
    item.colorConentWidth = (ereyyMSWidth * item.Duration) * 100 + '%';
    item.deviation = (Number(item.Timestamp) - numberTimestamp) * ereyyMSWidth * 100 + '%';
  })
  console.log('originWidth', originArr)
  return composeTree(originArr);
}

//吧数组转换成tree
export function composeTree(array = []) {
  const data = JSON.parse(JSON.stringify(array))
  const result = []
  if (!Array.isArray(data)) {
    return {}
  }
  data.forEach(item => {
    delete item.children
  })
  const map = {}
  let max = 0;
  let min = 0;
  let endTime = 0;
  data.forEach(item => {
    map[item.RpcId] = item
    if (!endTime) {
      endTime = parseInt(item.Timestamp) + parseInt(item.Duration);
    } else if (endTime < parseInt(item.Timestamp) + parseInt(item.Duration)) {
      endTime = parseInt(item.Timestamp) + parseInt(item.Duration);
    }
    if (!min) {
      min = item.Timestamp;
    }
  })

  console.log('min', min, 'max', endTime - min)
  //最大Duration = 最大结束时间- 最小开始时间
  max = endTime - min;
  const obj: { data?: { children?: [] | {}, Duration: number, Timestamp: string | number, id: string} } = {};
  //const obj = {};
  console.log('noTransData',data);
  data.forEach(item => {
    const parent = map[item.PID]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      obj.data = {
        Duration: max,
        Timestamp: min,
        id: item.ServiceName,
      }
      result.push(item);
    }
  })

  if (obj.data) {
    obj.data.children = result
  }
  console.log('trasnOBj', obj);
  return obj;
}

export const staticMockdataNew = {
  "code": "200",
  "data": {
    "RequestId": "17C8251C-AE87-48E8-BCF4-DCF9BA96BD4F",
    "Spans": {
      "Span": [
        {
          "ParentSpanId": "0",
          "ServiceIp": "21.0.5.1",
          "OperationName": "InvokeFunction",
          "Duration": 5000314,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "be0486ed-01e4-4b9e-b8d6-9651cf6c4ab0",
                "Key": "x-fc-request-id"
              },
              {
                "Value": "ratelimiting",
                "Key": "sampler.type"
              },
              {
                "Value": "1.0",
                "Key": "sampler.param"
              }
            ]
          },
          "Timestamp": "1610451336867692",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": []
          },
          "ServiceName": "FC:observability-demo/arms-java",
          "RpcId": "0",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "5380abbf10490039"
        },
        {
          "ParentSpanId": "5380abbf10490039",
          "ServiceIp": "21.0.5.1",
          "OperationName": "Invocation",
          "Duration": 5000252,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "1c45p1b",
                "Key": "__error.kind"
              },
              {
                "Value": "be0486ed-01e4-4b9e-b8d6-9651cf6c4ab0",
                "Key": "x-fc-request-id"
              }
            ]
          },
          "Timestamp": "1610451336867751",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": [
              {
                "TagEntryList": {
                  "TagEntry": [
                    {
                      "Value": "FunctionTimeoutError:Function timed out after 5 seconds (maxMemoryUsage: 211.99MB) ",
                      "Key": "stack"
                    },
                    {
                      "Value": "error",
                      "Key": "event"
                    }
                  ]
                },
                "Timestamp": "1610451341868003"
              }
            ]
          },
          "ServiceName": "FC:observability-demo/arms-java-1",
          "RpcId": "0.1",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "72356a49c955f00d"
        },
        {
          "ParentSpanId": "72356a49c955f00d",
          "ServiceIp": "21.0.5.1",
          "OperationName": "AccessOSS",
          "Duration": 11,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "objectValue",
                "Key": "objectKey"
              }
            ]
          },
          "Timestamp": "1610451336869000",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": []
          },
          "ServiceName": "FC:observability-demo/arms-java-2",
          "RpcId": "0.1.1",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "966128d76653b546"
        },
        {
          "ParentSpanId": "72356a49c955f00d",
          "ServiceIp": "21.0.5.1",
          "OperationName": "SelectSQL",
          "Duration": 5093,
          "TagEntryList": {
            "TagEntry": []
          },
          "Timestamp": "1610451336869000",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": []
          },
          "ServiceName": "FC:observability-demo/arms-java",
          "RpcId": "0.1.2",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "2dcee466e08820ce"
        },
        {
          "ParentSpanId": "72356a49c955f00d",
          "ServiceIp": "21.0.5.1",
          "OperationName": "InvokeFunction",
          "Duration": 1025909,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "5b141f46-be49-45e2-a2ba-417e1cba3f0f",
                "Key": "x-fc-request-id"
              }
            ]
          },
          "Timestamp": "1610451336880704",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": []
          },
          "ServiceName": "FC:observability-demo/arms-java",
          "RpcId": "0.1.3",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "85a24b93dad3d7d"
        },
        {
          "ParentSpanId": "85a24b93dad3d7d",
          "ServiceIp": "21.0.5.1",
          "OperationName": "Invocation",
          "Duration": 1025854,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "5b141f46-be49-45e2-a2ba-417e1cba3f0f",
                "Key": "x-fc-request-id"
              }
            ]
          },
          "Timestamp": "1610451336880757",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": []
          },
          "ServiceName": "FC:observability-demo/arms-java",
          "RpcId": "0.1.3.1",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "26cef8f3ac0c0dba"
        },
        {
          "ParentSpanId": "72356a49c955f00d",
          "ServiceIp": "21.0.5.4",
          "OperationName": "InvokeFunction",
          "Duration": 5000439,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "97aaa133-8f2a-4965-b543-ad03bb45fb3e",
                "Key": "x-fc-request-id"
              }
            ]
          },
          "Timestamp": "1610451337914511",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": []
          },
          "ServiceName": "FC:observability-demo/arms-java",
          "RpcId": "0.1.4",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "6707479f40fb3819"
        },
        {
          "ParentSpanId": "6707479f40fb3819",
          "ServiceIp": "21.0.5.4",
          "OperationName": "Invocation",
          "Duration": 5000392,
          "TagEntryList": {
            "TagEntry": [
              {
                "Value": "goazvg",
                "Key": "__error.kind"
              },
              {
                "Value": "97aaa133-8f2a-4965-b543-ad03bb45fb3e",
                "Key": "x-fc-request-id"
              }
            ]
          },
          "Timestamp": "1610451337914554",
          "HaveStack": false,
          "LogEventList": {
            "LogEvent": [
              {
                "TagEntryList": {
                  "TagEntry": [
                    {
                      "Value": "FunctionTimeoutError:Function timed out after 5 seconds (maxMemoryUsage: 27.64MB) ",
                      "Key": "stack"
                    },
                    {
                      "Value": "error",
                      "Key": "event"
                    }
                  ]
                },
                "Timestamp": "1610451342914946"
              }
            ]
          },
          "ServiceName": "FC:observability-demo/arms-java",
          "RpcId": "0.1.4.1",
          "TraceID": "5380abbf10490039",
          "ResultCode": "0",
          "SpanId": "6f51fd294e3a740c"
        }
      ]
    }
  },
  "hostName": "fc-console011136047178.et2",
  "message": "success",
  "requestID": "3b6ea053-4e6b-4012-9a2e-a67b5d3f533b",
  "success": true
}


export const ISFUNCMETRICSACTIVE = true;
export const SIZEROW1 = 1;
export const SIZEROW2 = 2;
export const WIDTH95 = 95;
export const WIDTH100 = 100;
export const WIDTH124 = 124;
export const WIDTH130 = 130;
export const WIDTH144 = 144;
export const WIDTH164 = 164;
export const WIDTH190 = 190;
export const WIDTH200 = 200;
export const WIDTH210 = 210;
export const WIDTH230 = 230;
export const WIDTH310 = 310;

