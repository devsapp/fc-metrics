"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RETRYOPTIONS = exports.requestOption = exports.apiNamespace = exports.openBrowser = exports.CONTEXT = void 0;
exports.CONTEXT = 'FC-METRICS';
exports.openBrowser = false;
exports.apiNamespace = 'acs_fc';
exports.requestOption = 'GET';
exports.RETRYOPTIONS = {
    retries: 5,
    factor: 2,
    minTimeout: 1 * 1000,
    randomize: true,
};
//# sourceMappingURL=constant.js.map