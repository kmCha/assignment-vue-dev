<template>
  <div class="modal-shadow" @click.self="tryToggleSignup" @keyup.enter="signUp">
    <div class="modal-content">
      <span class="modal-title">注册账号</span>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <input type="password" placeholder="password again" v-model="password2">
      <span class="modal-msg">{{ msg }}</span>
      <button type="button" :disabled="disable" @click="signUp">确认</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, toggleSignup, setUsername, setLoadingMsg, clearLoadingMsg, addWarning } from '../vuex/actions'
import { router } from '../vue-router/router'
import { getWarnings, modalTransitting } from '../vuex/getters'
import validation from '../vue-mixins/user-validation'

export default {
  data () {
    return {
      username: '',
      password: '',
      password2: ''
    }
  },
  vuex: {
    actions: {
      toggleLogin,
      toggleSignup,
      setUsername,
      setLoadingMsg,
      clearLoadingMsg,
      addWarning
    },
    getters: {
      getWarnings,
      modalTransitting
    }
  },
  mixins: [validation],
  computed: {
    warningExist () {
      return this.getWarnings.length > 0
    },
    disable () {
      return this.warningExist || !this.usernameValid || !this.passwordValid || !this.passwordConf
    }
  },
  methods: {
    signUp () {
      if (this.disable) {
        return
      }
      this.setLoadingMsg('注册')
      let User = this.$resource('/users/signUp')
      return User.save({
        name: this.username,
        password: this.password
      }).then(user => {
        this.clearLoadingMsg()
        if (user.data.status === 'success') {
          this.setUsername(this.username)
          this.username = ''
          this.password = ''
          this.password2 = ''
          this.addWarning({
            type: 'success',
            msg: user.data.msg
          })
          this.toggleSignup()
          router.go({
            path: '/home'
          })
        } else {
          this.addWarning({
            type: 'fail',
            msg: user.data.msg
          })
        }
      })
    },
    tryToggleSignup () {
      if (!this.modalTransitting) {
        this.toggleSignup()
      }
    }
  }
}
</script>

<style src="../stylesheets/modal.less" lang="less"></style>
