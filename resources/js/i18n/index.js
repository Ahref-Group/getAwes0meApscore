import Vue from 'vue'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const DEFAULT_LANG = window.localStorage.localeLanguage === undefined ?
	navigator.language : window.localStorage.localeLanguage;

const locales = {
	'en-US': require('../../../public/i18n/en-US.json'),
	'zh-CN': require('../../../public/i18n/zh-CN.json'),
	'ja-JP': require('../../../public/i18n/ja-JA.json'),
};

const i18n = new VueI18n({
	locale: DEFAULT_LANG,
	messages: locales,
});

export default i18n