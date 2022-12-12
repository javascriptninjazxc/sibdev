import Vue from 'vue'
import Vuex from 'vuex'
import favouritesModule from './modules/favourites.module';
import userModule from './modules/user.module';

import YouTubeService from "@/api/YoutubeService.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'default',
    searchList: null
  },
  getters: {
  },
  mutations: {
    SetLayout(state, payload) {
      state.layout = payload;
    },
    setSearchList(state, payload) {
      state.searchList = payload;
    }
  },
  actions: {
    getSearchList({ commit }, payload) {
      console.log(payload);
      return YouTubeService.search(payload).then(res => {
        commit('setSearchList', res.items);
        return true;
      }).catch(err => Promise.reject(err));
    }
  },
  modules: {
    userModule,
    favouritesModule
  }
})
