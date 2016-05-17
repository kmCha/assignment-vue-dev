<template>
  <div class="login-shadow" @click.self="toggleLogin">
    <div class="login-content">
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <button type="button" @click="logIn">登录</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, setUsername } from '../vuex/actions'
import { router } from '../vue-router/router'

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
      setUsername
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
        }
      })
    }
  }
}
</script>

<style lang="less">
  .login-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 400px;
      min-height: 20vh;
      // margin: auto;
      // padding: 50px;

      input, button {
        // display: block;
        // margin: 0 20px;
        width: 200px;
      }
    }
  }
</style>
