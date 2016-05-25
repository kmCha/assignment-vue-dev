<template>
  <div class="modal-shadow" @click.self="tryToggleLogin" @keyup.enter="logIn">
    <div class="modal-content">
      <span class="modal-title">用户登录</span>
      <input type="text" v-focus="isLoginOpened" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <span class="modal-msg">{{ msg }}</span>
      <button type="button" :disabled="disable" @click="logIn">登录</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, setUsername, addWarning, setLoadingMsg, clearLoadingMsg } from '../vuex/actions'
import { router } from '../vue-router/router'
import { getWarnings, modalTransitting, isLoginOpened } from '../vuex/getters'
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
      addWarning,
      setLoadingMsg,
      clearLoadingMsg
    },
    getters: {
      getWarnings,
      modalTransitting,
      isLoginOpened
    }
  },
  mixins: [validation],   // 用户名和密码的验证计算属性（下方注释部分）
  computed: {
    warningExist () {
      return this.getWarnings.length > 0
    },
    disable () {
      return this.warningExist || !this.usernameValid || !this.passwordValid
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
      if (this.disable) {
        return
      }
      this.setLoadingMsg('登录')
      let User = this.$resource('/users/logIn')
      return User.save({
        name: this.username,
        password: this.password
      }).then(user => {
        this.clearLoadingMsg()
        if (user.data.status === 'success') {
          this.setUsername(this.username)
          this.username = ''
          this.password = ''
          this.toggleLogin()
          this.addWarning({
            msg: user.data.msg,
            type: 'success'
          })
          router.go({
            path: '/home'
          })
        } else {
          this.addWarning({
            msg: user.data.msg,
            type: 'fail'
          })
        }
      })
    },
    tryToggleLogin () {
      if (!this.modalTransitting) {
        this.toggleLogin()
      }
    }
  }
}
</script>

<style src="../stylesheets/modal.less" lang="less"></style>
