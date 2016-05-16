import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  assignments: [],
  loginOpened: false
}

const mutations = {
  SETASSIGNMENTS (state, assignments) {
    state.assignments = assignments
  },
  TOGGLELOGIN (state) {
    state.loginOpened = !state.loginOpened
  }
}

export default new Vuex.Store({
  state,
  mutations
})
