import { Message } from '@alicloud/console-components';
import { transChartData, transFunctionTable } from '../components/LineChart/Chart/helper';
const axios = require('axios');

//获取函数级别图表
const getMetricData = async (params) => {
  try {
    const result = await axios.post(`/get/metric`, params, {
      headers: {
        'Access-Control-Allow-Origin': '*', // 解决cors头问题
        'Access-Control-Allow-Credentials': 'true', // 解决session问题
        'Content-Type': 'application/json; charset=UTF-8', // 将表单数据传递转化为form-data类型
      },
      withCredentials: true,
    });
    const { data } = result || {};
    if (data.success === true && !result.data.errorMsg) {
      return transChartData(data.data, params);
    }
    Message.error(`Metric ${params.metric} 请求失败。`);
    return [];
  } catch (e) {
    Message.error(`Metric ${params.metric} 请求失败:  ${e.toString()}`);
    return [];
  }
};
//获取函数级别列表
const getRequestTableList = async (params) => {
  try {
    console.log('requestTableParams', params);
    const result = await axios.post(`/get/RequestTableList`, params, {
      headers: {
        'Access-Control-Allow-Origin': '*', // 解决cors头问题
        'Access-Control-Allow-Credentials': 'true', // 解决session问题
        'Content-Type': 'application/json; charset=UTF-8', // 将表单数据传递转化为form-data类型
      },
      withCredentials: true,
    });
    const { data } = result || {};
    if (data.success === true) {
      if (data.data.errorCode === 'RequestMetricsNotEnable') {
        return { RequestMetricsNotEnable: true, tableData: [] };
      } else {
        return { RequestMetricsNotEnable: false, tableData: transFunctionTable(data.data) };
      }
    }
    Message.error(`Metric Function 请求失败:  ${data.toString()}`);
    return { RequestMetricsNotEnable: false, tableData: [] };
  } catch (e) {
    Message.error(`Metric Function 请求失败:  ${e.toString()}`);
    return { RequestMetricsNotEnable: false, tableData: [] };
  }
};

//获取请求详情数据
const getRequestInfo = async (params) => {
  try {
    console.log('getRequestInfo params', params);
    const result = await axios.post(`/get/RequestInfo`, params, {
      headers: {
        'Access-Control-Allow-Origin': '*', // 解决cors头问题
        'Access-Control-Allow-Credentials': 'true', // 解决session问题
        'Content-Type': 'application/json; charset=UTF-8', // 将表单数据传递转化为form-data类型
      },
      withCredentials: true,
    });
    const { data } = result || {};
    if (data.success === true && !result.data.errorMsg) {
      console.log('getRequestInfodata', data);
      return data.data
    }
    Message.error(`getRequestInfo 请求失败。`);
    return [];
  } catch (e) {
    Message.error(`getRequestInfo 请求失败:  ${e.toString()}`);
    return [];
  }
};

//获取请求级别Trace
const getTraceData = async (params) => {
  try {
    const result = await axios.post(`/get/Trace`, params, {
      headers: {
        'Access-Control-Allow-Origin': '*', // 解决cors头问题
        'Access-Control-Allow-Credentials': 'true', // 解决session问题
        'Content-Type': 'application/json; charset=UTF-8', // 将表单数据传递转化为form-data类型
      },
      withCredentials: true,
    });
    const { data } = result || {};
    if (data.success === true && !result.data.errorMsg) {
      return data.data
    }
    Message.error(`getTraceData 请求失败。`);
    return [];
  } catch (e) {
    Message.error(`getTraceData 请求失败:  ${e.toString()}`);
    return [];
  }
};

//获取服务版本
const getVersion = async () => {
  const result = await axios.get(`/get/version`);
  if (result.success === true) {
    return result.data;
  }
  return [];
};

//获取别名
const getAlias = async () => {
  const result = await axios.get(`/get/alias`);
  if (result.success === true) {
    return result.data;
  }
  return [];
};

export {
  getMetricData,
  getRequestTableList,
  getRequestInfo,
  getTraceData,
  getVersion,
  getAlias,
};
