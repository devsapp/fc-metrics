import intl from '@ali/wind-intl';
import messages from './locales/messages';
import Cookie from 'js-cookie';

intl.set({
  messages,
}, {
  determineLocale: {
    globalIdentifier: 'ALIYUN_FC_CONSOLE_CONFIG.lang',
    cookieLocaleKey: 'aliyun_lang',
    cookie: 'locale',
    fallback: 'en-US',
  },
});

const lang = ['zh', 'en', 'ja'];
if (Cookie.get('aliyun_lang') && !lang.includes(Cookie.get('aliyun_lang'))) {
  document.cookie = 'aliyun_lang=en; path=/; Domain=.aliyun.com';
}
