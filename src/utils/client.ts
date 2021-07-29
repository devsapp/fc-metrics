import * as core from '@serverless-devs/core';
import { ICredentials } from '../interface';
const Core = require('@alicloud/pop-core');
const FC = require('@alicloud/fc2');
const ALY = require('aliyun-sdk');

async function getFcEndpoint(): Promise<string | undefined> {
  const fcDefault = await core.loadComponent('devsapp/fc-default');
  const fcEndpoint: string = await fcDefault.get({ args: 'fc-endpoint' });
  if (!fcEndpoint) { return undefined; }
  const enableFcEndpoint: any = await fcDefault.get({ args: 'enable-fc-endpoint' });
  return (enableFcEndpoint === true || enableFcEndpoint === 'true') ? fcEndpoint : undefined;
}

export const getFcClient = async (credentials: ICredentials, region: string) => {
  return new FC(credentials.AccountID, {
    region,
    endpoint: await getFcEndpoint(),
    accessKeyID: credentials.AccessKeyID,
    accessKeySecret: credentials.AccessKeySecret,
    securityToken: credentials.SecurityToken,
    timeout: 60000,
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

export const getSLSClient = (credentials: ICredentials, region: string) => {

  return new ALY.SLS({
    accessKeyId: credentials.AccessKeyID,
    secretAccessKey: credentials.AccessKeySecret,
    endpoint: "http://" + region + ".log.aliyuncs.com",
    apiVersion: '2015-06-01'
  });
};

export const getTraceClicnt = (credentials: ICredentials, region: string) => {
  return new Core({
    accessKeyId: credentials.AccessKeyID,
    accessKeySecret: credentials.AccessKeySecret,
    endpoint: 'https://xtrace.' + region + '.aliyuncs.com',
    apiVersion: '2019-08-08'
  });
};




