import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [{name:'Person One', year:1955}],
    years: [1960, 1970, 1980]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
