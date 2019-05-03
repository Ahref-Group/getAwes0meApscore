window.Vue = require('vue');

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vue from 'vue';

// Vue i18n Imports
import i18n from './i18n';

// VueX Store Imports
import store from './store';

//Lodash Imports
import _ from 'lodash';
Object.defineProperty(Vue.prototype, '$_', { value: _ });

// Vue Activation and Register
window.Vue.use(VueRouter);
window.i18n = i18n;
Vue.use(Vuex);



const index = () => import('./components/index.vue');

const routes = [
	{
		path: '/',
		component: index,
	}];

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	//linkExactActiveClass: 'mu-bottom-item-active mu-primary-text-color',
});

export const app = new Vue({ i18n, store, router }).$mount('#app');