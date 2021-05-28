"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取诊断详细信息
 * @param {*} params
 */
function i18nDocLinkFun(key, def) {
    const docs = window.ARMS_DOC_LINKS || {};
    const test = docs[key];
    return docs[key] || def;
}
exports.default = i18nDocLinkFun;
//# sourceMappingURL=i18n.js.map