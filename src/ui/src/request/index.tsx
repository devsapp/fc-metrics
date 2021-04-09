import { Message } from '@alicloud/console-components';
import { transChartData } from '../components/LineChart/Chart/helper';
const axios = require('axios');

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

const getVersion = async () => {
  const result = await axios.get(`/get/version`);
  if (result.success === true) {
    return result.data;
  }
  return [];
};

const getAlias = async () => {
  const result = await axios.get(`/get/alias`);
  if (result.success === true) {
    return result.data;
  }
  return [];
};

export {
  getMetricData, getVersion, getAlias,
};
