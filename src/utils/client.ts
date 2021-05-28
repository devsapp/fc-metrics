import { ICredentials } from '../interface';

const Core = require('@alicloud/pop-core');
const FC = require('@alicloud/fc2');
const ALY = require('aliyun-sdk');

export const getFcClient = (credentials: ICredentials, regionId: string) => {
  return new FC(credentials.AccountID, {
    accessKeyID: credentials.AccessKeyID,
    accessKeySecret: credentials.AccessKeySecret,
    region: regionId,
    timeout: 10000000,
  });
};

export const getCmsClient = (credentials: ICredentials) => {
  return new Core({
    accessKeyId: credentials.AccessKeyID,
    accessKeySecret: credentials.AccessKeySecret,
    endpoint: 'http://metrics.cn-hangzhou.aliyuncs.com',
    apiVersion: '2019-01-01',
  });
};

export const getSLSClient = (credentials: ICredentials, regionId: string) => {

  return new ALY.SLS({
    accessKeyId: credentials.AccessKeyID,
    secretAccessKey: credentials.AccessKeySecret,
    endpoint: "http://" + regionId + ".log.aliyuncs.com",
    apiVersion: '2015-06-01'
  });
};

export const getTraceClicnt = (credentials: ICredentials, regionId: string) => {
  return new Core({
    accessKeyId: credentials.AccessKeyID,
    accessKeySecret: credentials.AccessKeySecret,
    endpoint: 'https://xtrace.' + regionId + '.aliyuncs.com',
    apiVersion: '2019-08-08'
  });
};




