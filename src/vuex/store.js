import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  assignments: [],
  loginOpened: false,
  signupOpened: false,
  username: '',
  warnings: [],
  modalTransitting: false
}

const mutations = {
  SETASSIGNMENTS (state, assignments) {
    state.assignments = assignments
  },
  TOGGLELOGIN (state) {
    state.loginOpened = !state.loginOpened
  },
  TOGGLESIGNUP (state) {
    state.signupOpened = !state.signupOpened
  },
  SETUSERNAME (state, username) {
    state.username = username
  },
  CLEARUSERNAME (state) {
    state.username = ''
  },
  ADDWARNING (state, warning) {
    state.warnings.push(warning)
  },
  REMOVEWARNING (state) {
    state.warnings.shift()
  },
  BEGINTRANSIT (state) {
    state.modalTransitting = true
  },
  TRANSITEND (state) {
    state.modalTransitting = false
  }
}

export default new Vuex.Store({
  state,
  mutations
})
