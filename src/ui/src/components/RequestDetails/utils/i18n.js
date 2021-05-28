
/**
 * 获取诊断详细信息
 * @param {*} params 
 */
export default function i18nDocLinkFun(key, def) {
    const docs = window.ARMS_DOC_LINKS || {};
    const test = docs[key];
    return docs[key] || def;
}



