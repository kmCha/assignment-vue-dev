<template>
  <div class="modal-shadow" @click.self="tryToggleSignup" @keyup.enter="signUp">
    <div class="modal-content">
      <span class="modal-title">注册账号</span>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <input type="password" placeholder="password again" v-model="password2">
      <span class="modal-msg">{{ msg }}</span>
      <button type="button" :disabled="warningExist || !usernameValid || !passwordValid || !passwordConf" @click="signUp">确认</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, toggleSignup, setUsername } from '../vuex/actions'
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
      setUsername
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
    }
  },
  methods: {
    signUp () {
      let User = this.$resource('/users/logIn')
      return User.save({
        name: this.username,
        password: this.password1
      }).then(user => {
        if (user.data.status === 'success') {
          this.setUsername(this.username)
          this.toggleLogin()
          router.go({
            path: '/home'
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
