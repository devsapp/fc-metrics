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
const lodash_1 = __importDefault(require("lodash"));
const constant_1 = require("./constant");
const metrics_1 = __importDefault(require("./utils/metrics"));
const client_1 = require("./utils/client");
class MetricsComponent {
    //组件入口函数  
    metrics(inputs) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('Create Metrics start...');
            const prop = inputs === null || inputs === void 0 ? void 0 : inputs.props;
            const region = prop.regionId;
            const serviceName = prop.serviceName;
            const functionName = prop.functionName;
            if (!region) {
                this.logger.error(`region is empty.`);
            }
            if (!serviceName) {
                this.logger.error(`serviceName is empty.`);
            }
            if (!functionName) {
                this.logger.error(`functionName is empty.`);
            }
            this.logger.debug(`获取入参:inputs params: ${JSON.stringify(prop)}`);
            const access = (_a = inputs === null || inputs === void 0 ? void 0 : inputs.project) === null || _a === void 0 ? void 0 : _a.access;
            const credentials = yield core_1.getCredential(access);
            yield this.report('metrics', 'metrics', credentials.AccountID);
            const metricsClient = new metrics_1.default(prop, credentials);
            const isFindFunction = yield this.getFunction(credentials, region, serviceName, functionName);
            //当函数存在的情况下，启动查询metrics，否则Log写入错误
            if (isFindFunction) {
                yield metricsClient.start();
            }
        });
    }
    //查询当前函数是否合法，合法后才可以进行组件查询
    getFunction(credentials, region, serviceName, functionName) {
        return __awaiter(this, void 0, void 0, function* () {
            const fcClient = client_1.getFcClient(credentials, region);
            return yield fcClient.getFunction(serviceName, functionName).then(res => {
                if (res && res.data) {
                    this.logger.info(`存在Servics:${serviceName},Function:${functionName}`);
                    return true;
                }
                else {
                    this.logger.error(`不存在${serviceName} 下的${functionName}`);
                    return false;
                }
            });
        });
    }
    report(componentName, command, accountID, access) {
        return __awaiter(this, void 0, void 0, function* () {
            let uid = accountID;
            if (lodash_1.default.isEmpty(accountID)) {
                const credentials = yield core_1.getCredential(access);
                uid = credentials.AccountID;
            }
            core_1.reportComponent(componentName, {
                command,
                uid,
            });
        });
    }
}
__decorate([
    core_1.HLogger(constant_1.CONTEXT),
    __metadata("design:type", Object)
], MetricsComponent.prototype, "logger", void 0);
exports.default = MetricsComponent;
//# sourceMappingURL=index.js.map