import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  assignments: [],
  loginOpened: false,
  signupOpened: false,
  editOpened: false,
  username: '',
  warnings: [],
  modalTransitting: false,
  loadingMsg: '',
  assFilter: ''
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
  TOGGLEEDIT (state) {
    state.editOpened = !state.editOpened
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
  },
  SETLOADINGMSG (state, msg) {
    state.loadingMsg = msg
  },
  CLEARLOADINGMSG (state) {
    state.loadingMsg = ''
  },
  SETASSFILTER (state, filter) {
    state.assFilter = filter
  }
}

export default new Vuex.Store({
  state,
  mutations
})
