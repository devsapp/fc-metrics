"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wind_intl_1 = __importDefault(require("@ali/wind-intl"));
const messages_1 = __importDefault(require("./locales/messages"));
const js_cookie_1 = __importDefault(require("js-cookie"));
wind_intl_1.default.set({
    messages: messages_1.default,
}, {
    determineLocale: {
        globalIdentifier: 'ALIYUN_FC_CONSOLE_CONFIG.lang',
        cookieLocaleKey: 'aliyun_lang',
        cookie: 'locale',
        fallback: 'en-US',
    },
});
const lang = ['zh', 'en', 'ja'];
if (js_cookie_1.default.get('aliyun_lang') && !lang.includes(js_cookie_1.default.get('aliyun_lang'))) {
    document.cookie = 'aliyun_lang=en; path=/; Domain=.aliyun.com';
}
//# sourceMappingURL=initializer.js.map