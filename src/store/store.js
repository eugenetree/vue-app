import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import plan from './modules/plan'
import checkpoint from './modules/checkpoint'
import place from './modules/place'
import map from './modules/map'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {

  },
  mutations: {

  },
  state: {
  },
  modules: {
    user, plan, checkpoint, place, map
  }
})