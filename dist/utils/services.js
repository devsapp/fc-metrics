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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@serverless-devs/core");
const constant_1 = require("../constant");
const express = require('express');
const { exec } = require('child_process');
class StartService {
    constructor(context) {
        this.context = context || {};
        this.app = express();
        this.counter = 0;
    }
    randomNum() {
        return 3000 + Math.round(Math.random() * 2000);
    }
    start() {
        this.port = this.context.port || 3000;
        this.context.callback(this.app);
        this.listen();
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.counter += 1;
            this.server = this.app.listen(this.port, () => {
                const uri = `http://localhost:${this.port}`;
                this.logger.info(`Getting domain: ${uri}, 请用浏览器访问Uri地址进行查看`);
                if (this.context.openBrowser) {
                    switch (process.platform) {
                        case "darwin":
                            exec(`open ${uri}`);
                            break;
                        case "win32":
                            exec(`start ${uri}`);
                            break;
                        case "linux":
                            exec(`xdg-open ${uri}`);
                        default:
                            exec(`open ${uri}`);
                    }
                }
            });
            this.server.on('error', (e) => {
                if (e.code === 'EADDRINUSE') {
                    if (this.counter < 5) {
                        this.port = this.randomNum();
                        this.listen();
                    }
                    else {
                        this.logger.error('接口错误', e);
                    }
                }
            });
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server.close();
        });
    }
}
__decorate([
    core_1.HLogger(constant_1.CONTEXT),
    __metadata("design:type", typeof (_a = typeof core_1.ILogger !== "undefined" && core_1.ILogger) === "function" ? _a : Object)
], StartService.prototype, "logger", void 0);
exports.default = StartService;
//# sourceMappingURL=services.js.map