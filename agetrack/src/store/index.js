import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function load(key) {
  return JSON.parse(localStorage.getItem(key)) || { people: [], years: [] };
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

let store = new Vuex.Store({
  state: load('default') ,
  mutations: {
    addYear(state) {
      state.years.push({year:0})
    },
    addPerson(state) {
      state.people.push({name:'', year:9999})
    },
    removeYear(state, i) {
      state.years.splice(i, 1)
    },
    removePerson(state, i) {
      state.people.splice(i, 1)
    },
    reset(state) {
      state.people.splice(0)
      state.years.splice(0)
    }
  },
  actions: {

  },
  modules: {
  }
})

store.watch((state) => {
  save('default', state)
})

export default store;
