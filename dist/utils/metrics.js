"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@serverless-devs/core");
const constant_1 = require("../constant");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const services_1 = __importDefault(require("./services"));
const client_1 = require("./client");
const bodyParser = require('body-parser');
class Metrics {
    constructor(properties, credentials) {
        this.requestOption = constant_1.requestOption;
        this.accountId = credentials.AccountID;
        this.accessKeyID = credentials.AccessKeyID;
        this.accessKeySecret = credentials.AccessKeySecret;
        this.region = properties.region;
        this.serviceName = properties.serviceName;
        this.functionName = properties.functionName;
        this.fcClient = client_1.getFcClient(credentials, properties.region);
        this.cmsClient = client_1.getCmsClient(credentials);
        this.buildSLSClient = client_1.getSLSClient(credentials, properties.region);
        this.getTraceClicnt = client_1.getTraceClicnt(credentials, properties.region);
    }
    getService(tableParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { serviceName, qualifier } = tableParams || {};
            try {
                this.logger.debug('this.fcClientparams', serviceName, qualifier);
                var service = yield this.fcClient.getService(serviceName, {}, qualifier);
                this.logger.debug('service', service);
                return service.data.logConfig;
            }
            catch (e) {
                this.logger.debug("An error occured when get service");
                this.logger.debug('this.fcClientparams', serviceName, qualifier);
                // try again
                var service = yield this.fcClient.getService(serviceName, {}, qualifier);
                return service.data.logConfig;
            }
        });
    }
    describeFunctionInsights(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var logConfig = yield this.getService(params);
            if (!logConfig["enableRequestMetrics"]) {
                var errResp = {
                    "statusCode": "400",
                    "errorCode": "RequestMetricsNotEnable",
                    "errorMessage": "Please enable requestMetrics and try again."
                };
                return errResp;
            }
            var client = this.buildSLSClient;
            var topic = "FCRequestMetrics:" + params["serviceName"] + "/" + params["functionName"];
            var opt = {
                "projectName": logConfig["project"],
                "logStoreName": logConfig["logstore"],
                "topic": topic,
                "from": params["startTime"].substr(0, params["startTime"].length - 3),
                "to": params["endTime"].substr(0, params["endTime"].length - 3),
                "reverse": true
            };
            if (params["qualifier"]) {
                opt["query"] = params["qualifier"];
            }
            return new Promise((resolve, reject) => {
                client.getLogs(opt, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    if (data) {
                        var logsCnt = data["headers"]["x-log-count"];
                        var resp = new Array();
                        for (var i = logsCnt - 1; i >= 0; i--) {
                            resp.push(data["body"][i]);
                        }
                        resolve(resp);
                    }
                    else {
                        resolve([]);
                    }
                });
            });
        });
    }
    //请求详情卡片数据
    describeRequestInsights(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var logConfig = yield this.getService(params);
            var client = this.buildSLSClient;
            var topic = "FCRequestMetrics:" + params["serviceName"] + "/" + params["functionName"];
            var opt = {
                "projectName": logConfig["project"],
                "logStoreName": logConfig["logstore"],
                "topic": topic,
                "from": params["startTime"].substr(0, params["startTime"].length - 3),
                "to": params["endTime"].substr(0, params["endTime"].length - 3),
                "query": params["requestId"]
            };
            return new Promise((resolve, reject) => {
                client.getLogs(opt, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    var logsCnt = data["headers"]["x-log-count"];
                    var resp = new Array();
                    for (var i = logsCnt - 1; i >= 0; i--) {
                        resp.push(data["body"][i]);
                    }
                    resolve(resp);
                });
            });
        });
    }
    fetchMetrics(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { startTime, endTime, period, qualifier, metric } = data;
            const dimension = {
                userId: this.accountId,
                region: this.region,
                serviceName: this.serviceName,
                functionName: this.functionName,
            };
            const params = {
                Namespace: constant_1.apiNamespace,
                RegionId: this.region,
                Period: period,
                StartTime: startTime,
                EndTime: endTime,
                MetricName: metric,
                Dimensions: JSON.stringify(dimension),
                qualifier,
            };
            this.logger.debug(`${metric} api params: ${JSON.stringify(params)}`);
            return yield this.cmsClient.request('DescribeMetricList', params, { method: 'POST' }).then((result) => {
                return result.Datapoints && JSON.parse(result.Datapoints) || null;
            }).catch((e) => {
                this.logger.error(`/get/metric: ${this.functionName}下的${metric}获取metrics图表出错,${e}`);
            });
        });
    }
    //获取请求详情的调用链路
    fetchTrace(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { regionId, traceId } = data;
            const args = {
                "RegionId": regionId,
                "TraceID": traceId
            };
            const requestOption = {
                method: 'POST',
            };
            return yield this.getTraceClicnt.request('GetTrace', args, requestOption).then((result) => {
                // console.log(JSON.stringify(result));
                const res = {
                    "data": result,
                    "success": true,
                    "errorMsg": ''
                };
                return res;
            }, (ex) => {
                const res = {
                    "data": ex,
                    "success": false,
                    "errorMsg": ex.name + ': ' + ex.message,
                    "errorStack": ex.stack
                };
                return res;
            });
        });
    }
    //获取函数列表
    fetchTableList(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { startTime, endTime, qualifier } = data;
            const tableListParams = {
                regionId: this.region,
                startTime: `${startTime}`,
                endTime: `${endTime}`,
                serviceName: this.serviceName,
                functionName: this.functionName,
                qualifier,
            };
            return yield this.describeFunctionInsights(tableListParams).then(function (data) {
                return data;
            }).catch(function (e) {
                console.log("An error occurred when describeFunctionInsights", e);
                return e;
            });
        });
    }
    //获取request 信息
    fetchRequestInfo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { startTime, endTime, qualifier, requestId } = data;
            const requestParams = {
                regionId: this.region,
                startTime: `${startTime}`,
                endTime: `${endTime}`,
                serviceName: this.serviceName,
                functionName: this.functionName,
                qualifier,
                requestId,
            };
            return yield this.describeRequestInsights(requestParams).then(function (data) {
                return data;
            }).catch(function (e) {
                console.log("An error occurred when describeRequestInsights", e);
                return e;
            });
        });
    }
    //获取请求详情日志
    // async fetchLogs(params) {
    //   const { startTime, endTime, qualifier, requestId } = params;
    //   const endpoint = this.regionId + ".log.aliyuncs.com";
    //   const request_id = requestId;
    //   const function_name = this.functionName;
    //   const start_time = Number(startTime) / 1000;
    //   const end_time = Number(endTime) / 1000;
    //   const log_config = get_logconfig(params);
    //   const logstore = log_config["logstore"];
    //   const project = log_config["project"];
    //   if (!logstore || !project) {
    //     const result = {
    //       "data": 'LogConfigNotSetException',
    //       "success": false,
    //       "errorMsg": 'LogConfigNotSetException' + ": Please set logConfig and try again",
    //       "errorStack": ""
    //     }
    //     return json.dumps(result)
    //   }
    //   const client = LogClient(endpoint, this.accessKeyID, this.accessKeySecret, "");
    // }
    // async get_logconfig(params) {
    //   if ("project" in params.keys() && "logstore" in params.keys()) {
    //     const project = params["project"];
    //     const logstore = params["logstore"];
    //     return {
    //       "project": project,
    //       "logstore": logstore
    //     }
    //   }
    //   const region_id = this.regionId;
    //   const endpoint = "https://{0}.{1}.fc.aliyuncs.com".format(this.accountId, region_id)
    //   const service_name = this.serviceName;
    //   let qualifier = "LATEST";
    //   if ("qualifier" in params.keys() && params["qualifier"] != "ALL") {
    //     qualifier = params["qualifier"];
    //   }
    //   const client = fc2.Client({
    //     endpoint,
    //     accessKeyID: this.accessKeyID,
    //     accessKeySecret: this.accessKeySecret,
    //   });
    //   const service = client.get_service({ serviceName: service_name, qualifier, })
    //   return service.data["logConfig"]
    // }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = path_1.default.join(__dirname, 'static');
            this.logger.debug(`uri path: ${JSON.stringify(uri)}`);
            const that = this;
            function callback(app) {
                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({ extended: true }));
                app.use(express_1.default.static(path_1.default.join(uri)));
                // 设置跨域访问
                app.all('*', (req, res, next) => {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
                    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
                    res.header('Content-Type', 'application/json');
                    next();
                });
                app.post('/get/metric', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    req.headers['content-type'] = 'application/json';
                    const params = req.body;
                    try {
                        const result = yield that.fetchMetrics(params);
                        const resp = {
                            data: result || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                    }
                }));
                app.post('/get/RequestTableList', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    req.headers['content-type'] = 'application/json';
                    const params = req.body;
                    try {
                        const result = yield that.fetchTableList(params);
                        const resp = {
                            data: result || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                    }
                }));
                app.post('/get/RequestInfo', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    req.headers['content-type'] = 'application/json';
                    const params = req.body;
                    try {
                        const result = yield that.fetchRequestInfo(params);
                        const resp = {
                            data: result || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                    }
                }));
                app.post('/get/Trace', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    req.headers['content-type'] = 'application/json';
                    const params = req.body;
                    try {
                        const result = yield that.fetchTrace(params);
                        const resp = {
                            data: result || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                    }
                }));
                app.post('/get/Logs', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    req.headers['content-type'] = 'application/json';
                    const params = req.body;
                    try {
                        const result = yield that.fetchLogs(params);
                        const resp = {
                            data: result || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                    }
                }));
                app.get('/get/version', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    that.logger.info('Get /get/version Request');
                    try {
                        const list = yield that.fcClient.listVersions(that.serviceName);
                        const resp = {
                            data: list.data.versions || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                        that.logger.error(`/get/version: ${that.serviceName}获取服务版本出错`);
                    }
                }));
                app.get('/get/alias', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    that.logger.info('Get /get/alias Request');
                    try {
                        const list = yield that.fcClient.listAliases(that.serviceName);
                        const resp = {
                            data: list.data.aliases || [],
                            success: true,
                            errorMsg: '',
                        };
                        res.send(resp);
                    }
                    catch (e) {
                        res.send({ success: false, error: true, message: e.message });
                        that.logger.error(`/get/alias: ${that.serviceName}获取服务别名出错`);
                    }
                }));
                app.get('/', (req, res) => {
                    that.logger.info(`Get Express - ${req}`);
                    res.header('Content-Type', 'text/html;charset=utf-8');
                    res.sendFile(path_1.default.join(__dirname, '../../dist/static'));
                });
            }
            const server = new services_1.default({ callback, openBrowser: constant_1.openBrowser });
            server.start();
        });
    }
}
__decorate([
    core_1.HLogger(constant_1.CONTEXT),
    __metadata("design:type", Object)
], Metrics.prototype, "logger", void 0);
exports.default = Metrics;
//# sourceMappingURL=metrics.js.map