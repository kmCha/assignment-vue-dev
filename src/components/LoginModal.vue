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
  computed: {
    warningExist () {
      return this.getWarnings.length > 0
    },
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
    msg () {
      if (!this.usernameValid) {
        return '请输入6~12位的用户名'
      } else if (!this.passwordValid) {
        return '请输入6~15位的密码'
      } else {
        return ''
      }
    }
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

<style lang="less">
  @blue: #66aaee;
  @grey: #bbb;
  @red: #fb7777;
  .modal-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-content {
      // border-radius: 50px;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 400px;
      min-height: 20vh;
      // margin: auto;
      // padding: 50px;
      .modal-title {
        color: @blue;
        font-weight: bold;
        margin: 10px 0 10px 0;
      }
      .modal-msg {
        font-size: 0.8rem;
        font-weight: bold;
        color: @red;
        margin-top: 10px;
      }
      input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px @blue solid;
      }
      button {
        margin: 10px 0;
        color: white;
        font-weight: bold;
        border: none;
        background: @blue;
        &:disabled {
          background: @grey;
        }
      }
      input, button {
        // display: block;
        // margin: 0 20px;
        width: 200px;
      }
    }
  }
</style>
