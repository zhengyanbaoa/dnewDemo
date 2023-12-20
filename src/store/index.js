import Vue from 'vue'
import Vuex from 'vuex'

import { getItem, setItem } from "@/utils/storage";

Vue.use(Vuex)
const TOKEN_KEY = "X-Token";

export default new Vuex.Store({
  state: {
    user: getItem('user'),
    token: getItem(TOKEN_KEY),
  },
  getters: {
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
      setItem(TOKEN_KEY, data);
    },
    setUser(state, data) {
      state.user = data;
      setItem('user', data);
    },
  },
  actions: {
    SETTOKEN({commit}, data) {
      commit('setToken', data);
    },
  },
  modules: {
  }
})
