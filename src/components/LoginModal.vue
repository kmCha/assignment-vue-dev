<template>
  <div class="modal-shadow" @click.self="toggleLogin">
    <div class="modal-content">
      <span class="modal-title">用户登录</span>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <span class="modal-msg">{{ msg }}</span>
      <button type="button" :disabled="warningExist || !usernameValid || !passwordValid" @click="logIn">登录</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, setUsername, addWarning } from '../vuex/actions'
import { router } from '../vue-router/router'
import { getWarnings } from '../vuex/getters'
import validation from '../vue-mixins/user-validation'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  vuex: {
    actions: {
      toggleLogin,
      setUsername,
      addWarning
    },
    getters: {
      getWarnings
    }
  },
  mixins: [validation],   // 用户名和密码的验证计算属性（下方注释部分）
  computed: {
    warningExist () {
      return this.getWarnings.length > 0
    }
    // usernameValid () {
    //   if (this.username.length >= 6 && this.username.length <= 12) {
    //     return true
    //   }
    //   return false
    // },
    // passwordValid () {
    //   if (this.password.length >= 6 && this.password.length <= 15) {
    //     return true
    //   }
    //   return false
    // },
    // msg () {
    //   if (!this.usernameValid) {
    //     return '请输入6~12位的用户名'
    //   } else if (!this.passwordValid) {
    //     return '请输入6~15位的密码'
    //   } else {
    //     return ''
    //   }
    // }
  },
  methods: {
    logIn () {
      let User = this.$resource('/users/logIn')
      return User.save({
        name: this.username,
        password: this.password
      }).then(user => {
        if (user.data.status === 'success') {
          this.setUsername(this.username)
          this.toggleLogin()
          router.go({
            path: '/home'
          })
        } else {
          this.addWarning({
            msg: user.data.msg
          })
        }
      })
    }
  }
}
</script>

<style src="../stylesheets/modal.less" lang="less"></style>
