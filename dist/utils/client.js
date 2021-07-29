"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTraceClicnt = exports.getSLSClient = exports.getCmsClient = exports.getFcClient = void 0;
const core = __importStar(require("@serverless-devs/core"));
const Core = require('@alicloud/pop-core');
const FC = require('@alicloud/fc2');
const ALY = require('aliyun-sdk');
function getFcEndpoint() {
    return __awaiter(this, void 0, void 0, function* () {
        const fcDefault = yield core.loadComponent('devsapp/fc-default');
        const fcEndpoint = yield fcDefault.get({ args: 'fc-endpoint' });
        if (!fcEndpoint) {
            return undefined;
        }
        const enableFcEndpoint = yield fcDefault.get({ args: 'enable-fc-endpoint' });
        return (enableFcEndpoint === true || enableFcEndpoint === 'true') ? fcEndpoint : undefined;
    });
}
exports.getFcClient = (credentials, region) => __awaiter(void 0, void 0, void 0, function* () {
    return new FC(credentials.AccountID, {
        region,
        endpoint: yield getFcEndpoint(),
        accessKeyID: credentials.AccessKeyID,
        accessKeySecret: credentials.AccessKeySecret,
        securityToken: credentials.SecurityToken,
        timeout: 60000,
    });
});
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