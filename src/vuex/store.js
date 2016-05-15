import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  assignments: []
}

const mutations = {
  SETASSIGNMENTS (state, assignments) {
    state.assignments = assignments
  }
}

export default new Vuex.Store({
  state,
  mutations
})
