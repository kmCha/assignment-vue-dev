<template>
  <div class="modal-shadow" @click.self="toggleSignup">
    <div class="modal-content">
      <span class="modal-title">注册账号</span>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password1">
      <input type="password" placeholder="password again" v-model="password2">
      <button type="button" @click="signUp">确认</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, toggleSignup, setUsername } from '../vuex/actions'
import { router } from '../vue-router/router'

export default {
  data () {
    return {
      username: '',
      password1: '',
      password2: ''
    }
  },
  vuex: {
    actions: {
      toggleLogin,
      toggleSignup,
      setUsername
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
    }
  }
}
</script>

<style lang="less">

</style>
