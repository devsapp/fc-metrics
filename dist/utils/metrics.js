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