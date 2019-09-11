import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import { State } from './types';

Vue.use(Vuex);

let state: State = {
  username: '',
  password: '',
  status: null,
};

let store = new Vuex.Store({
  state,
  mutations,
  actions: {},
  getters: {},
});

export default store;
