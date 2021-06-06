"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTraceClicnt = exports.getSLSClient = exports.getCmsClient = exports.getFcClient = void 0;
const Core = require('@alicloud/pop-core');
const FC = require('@alicloud/fc2');
const ALY = require('aliyun-sdk');
exports.getFcClient = (credentials, region) => {
    return new FC(credentials.AccountID, {
        accessKeyID: credentials.AccessKeyID,
        accessKeySecret: credentials.AccessKeySecret,
        region: region,
        timeout: 60000,
    });
};
exports.getCmsClient = (credentials) => {
    return new Core({
        accessKeyId: credentials.AccessKeyID,
        accessKeySecret: credentials.AccessKeySecret,
        endpoint: 'http://metrics.cn-hangzhou.aliyuncs.com',
        apiVersion: '2019-01-01',
    });
};
exports.getSLSClient = (credentials, region) => {
    return new ALY.SLS({
        accessKeyId: credentials.AccessKeyID,
        secretAccessKey: credentials.AccessKeySecret,
        endpoint: "http://" + region + ".log.aliyuncs.com",
        apiVersion: '2015-06-01'
    });
};
exports.getTraceClicnt = (credentials, region) => {
    return new Core({
        accessKeyId: credentials.AccessKeyID,
        accessKeySecret: credentials.AccessKeySecret,
        endpoint: 'https://xtrace.' + region + '.aliyuncs.com',
        apiVersion: '2019-08-08'
    });
};
//# sourceMappingURL=client.js.map