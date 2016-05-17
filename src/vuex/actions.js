export const setAssignments = function ({ dispatch }, assignments) {
  dispatch('SETASSIGNMENTS', assignments)
}
export const toggleLogin = ({ dispatch }) => dispatch('TOGGLELOGIN')
export const setUsername = function ({ dispatch }, username) {
  dispatch('SETUSERNAME', username)
}
