"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCmsClient = exports.getFcClient = void 0;
const Core = require('@alicloud/pop-core');
const FC = require('@alicloud/fc2');
exports.getFcClient = (credentials, regionId) => {
    return new FC(credentials.AccountID, {
        accessKeyID: credentials.AccessKeyID,
        accessKeySecret: credentials.AccessKeySecret,
        region: regionId,
        timeout: 60000,
    });
};
exports.getCmsClient = (credentials, region) => {
    return new Core({
        accessKeyId: credentials.AccessKeyID,
        accessKeySecret: credentials.AccessKeySecret,
        endpoint: 'http://metrics.cn-hangzhou.aliyuncs.com',
        apiVersion: '2019-01-01',
    });
};
//# sourceMappingURL=client.js.map