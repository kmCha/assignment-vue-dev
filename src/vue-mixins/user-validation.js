export default {
  computed: {
    usernameValid () {
      if (this.username.length >= 6 && this.username.length <= 12) {
        return true
      }
      return false
    },
    passwordValid () {
      if (this.password.length >= 6 && this.password.length <= 15) {
        return true
      }
      return false
    },
    passwordConf () {
      if (this.password === this.password2) {
        return true
      }
      return false
    },
    msg () {
      if (!this.usernameValid) {
        return '请输入6~12位的用户名'
      } else if (!this.passwordValid) {
        return '请输入6~15位的密码'
      } else if (!this.passwordConf) {
        return '两次输入的密码必须相同'
      } else {
        return ''
      }
    }
  }
}
