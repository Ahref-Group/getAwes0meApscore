import {app} from '../app';
import * as types from './mutation-types';
import axios from 'axios';

export const state = {
	lang: 'en-US',
	userInfo: {},
	adminPermission: {}
};

export const mutations = {
	[types.SET_LANG] (state, payload) {
		app.$i18n.locale = payload;
	},
	[types.STORE_USER_INFO] (state, payload) {
		state.userInfo = payload;
	},
	[types.STORE_PERMISSION] (state, payload) {
		state.permission = payload;
	}
};

export const actions = {
	setLang({commit}, payload) {
		commit(types.SET_LANG, payload);
	},

	async storePermission({commit}){
		axios.get('/api/v1/admin/adminPermission')
			.then(resp => {
				commit(types.STORE_PERMISSION, resp.data);
			})
			.catch(resp=>{

			});

	},

	async storeUserInfo({commit}){
		axios.get('/api/v1/user/userInfo')
			.then(resp => {
				commit(types.STORE_USER_INFO, resp.data);
			})
			.catch(resp=>{

			});

	},

	async setLangNew({commit}, payload){
		window.localStorage.localeLanguage = payload;
		if (payload in app.$i18n.messages) {
			commit(types.SET_LANG, payload);
		} else {
			try {
				const res = await axios.get('../i18n/'+ payload +'.json');
				app.$i18n.setLocaleMessage(payload, res.data);
				commit(types.SET_LANG, payload);
			}
			catch(e) {
				console.log(e);
			}
		}
	}
};
