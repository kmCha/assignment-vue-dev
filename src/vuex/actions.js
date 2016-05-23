export const setAssignments = ({ dispatch }, assignments) => dispatch('SETASSIGNMENTS', assignments)
export const toggleLogin = ({ dispatch }) => dispatch('TOGGLELOGIN')
export const toggleSignup = ({ dispatch }) => dispatch('TOGGLESIGNUP')
export const setUsername = ({ dispatch }, username) => dispatch('SETUSERNAME', username)
export const clearUsername = ({ dispatch }) => dispatch('CLEARUSERNAME')
export const addWarning = ({ dispatch }, warning) => {
  dispatch('ADDWARNING', warning)
  setTimeout(() => dispatch('REMOVEWARNING'), 2000)
}
