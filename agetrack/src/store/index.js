import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function load(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export default new Vuex.Store({
  state: {
    people: load('people'),
    years: load('years')
  },
  mutations: {
    addYear(state) {
      state.years.push({year:0})
      save('years', state.years)
    },
    addPerson(state) {
      state.people.push({name:'', year:9999})
      save('people', state.people)
    },
    reset(state) {
      state.people.splice(0, state.people.length)
      save('people', state.people)

      state.years.splice(0, state.years.length)
      save('years', state.years)
    }
  },
  actions: {

  },
  modules: {
  }
})
