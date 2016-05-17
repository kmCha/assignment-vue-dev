export const setAssignments = function ({ dispatch }, assignments) {
  dispatch('SETASSIGNMENTS', assignments)
}
export const toggleLogin = ({ dispatch }) => dispatch('TOGGLELOGIN')
export const setUsername = ({ dispatch }, username) => dispatch('SETUSERNAME', username)
export const clearUsername = ({ dispatch }) => dispatch('CLEARUSERNAME')