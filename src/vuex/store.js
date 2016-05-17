import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  assignments: [],
  loginOpened: false,
  username: ''
}

const mutations = {
  SETASSIGNMENTS (state, assignments) {
    state.assignments = assignments
  },
  TOGGLELOGIN (state) {
    state.loginOpened = !state.loginOpened
  },
  SETUSERNAME (state, username) {
    state.username = username
  },
  CLEARUSERNAME (state) {
    state.username = ''
  }
}

export default new Vuex.Store({
  state,
  mutations
})
