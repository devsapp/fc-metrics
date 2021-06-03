import { ICredentials } from '../interface';

const Core = require('@alicloud/pop-core');
const FC = require('@alicloud/fc2');

export const getFcClient = (credentials: ICredentials, region: string) => {
  return new FC(credentials.AccountID, {
    accessKeyID: credentials.AccessKeyID,
    accessKeySecret: credentials.AccessKeySecret,
    region: region,
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

