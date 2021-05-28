"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegionDomain = exports.getRegionAppList = exports.updatePid = exports.currentPid = exports.updateRegionId = exports.regionId = void 0;
const console_base_messenger_1 = require("@ali/console-base-messenger");
const lodash_1 = __importDefault(require("lodash"));
const util_1 = require("../utils/util");
const global_1 = require("../global");
console_base_messenger_1.forApp.setRegions(global_1.regionList);
exports.regionId = (() => {
    let id = util_1.getCookieValue('currentRegionId');
    if (!global_1.regionIds.includes(id)) {
        id = lodash_1.default.get(global_1.regionList, '[0].id');
        console_base_messenger_1.forApp.setRegionId(id);
    }
    return id;
})();
function updateRegionId(id) {
    exports.regionId = id;
    getRegionAppList();
}
exports.updateRegionId = updateRegionId;
console_base_messenger_1.forConsoleBase.onSetRegionId(updateRegionId);
exports.currentPid = (() => {
    let id = util_1.getCookieValue('currentRegionId');
    if (location.hash.indexOf('detail') > -1) {
        let arr = location.hash.substr(2).split('/');
        // ["detail", "cn-beijing", "deydyr0nqp@f359ba6f8f1176c", "home"]
        return arr[2];
    }
    else {
        return '';
    }
})();
function updatePid(pid) {
    exports.currentPid = decodeURIComponent(pid);
}
exports.updatePid = updatePid;
function getRegionAppList(formatting = true) {
    const arr = window.APP_LIST || []; // region列表
    // 获取当前region下的pid
    const arr2 = arr.filter((item) => {
        return item.regionId === exports.regionId;
    });
    // 格式化数据为wind数据格式
    if (formatting) {
        return arr2.map((item) => {
            return { value: item.pid, label: item.siteName };
        });
    }
    else {
        return arr2;
    }
}
exports.getRegionAppList = getRegionAppList;
function getRegionDomain(regionId) {
    return global_1.regionDomain[regionId];
}
exports.getRegionDomain = getRegionDomain;
//# sourceMappingURL=regions.js.map