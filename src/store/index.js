import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		list: [
			{
				type: "INCOME",
				value: 200,
				comment: "Some comment",
				id: 1,
			},
			{
				type: "OUTCOME",
				value: -50,
				comment: "Some outcome comment",
				id: 2,
			},
		],
	},
	getters: {},
	mutations: {
		ON_FORM_SUBMIT(state, obj) {
			state.list.push(obj);
		},
		DELETE_ITEM(state, id) {
			state.list = state.list.filter((item) => item.id !== id);
		},
	},
	actions: {},
	plugins: [createPersistedState()],
});
