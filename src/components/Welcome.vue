<template>
  <div class="welcome">
    <h1>welcome</h1>
  </div>
</template>

<script>
import { setUsername } from '../vuex/actions'
import { router } from '../vue-router/router'

export default {
  route: {
    data (transition) {
      this.$http.get('users/loggedIn').then(res => {
        let username = res.data
        if (username) {   // 如果登录了，跳转到home页面
          this.setUsername(username)
          router.go({ path: '/home' })
        }
      })
    }
  },
  vuex: {
    actions: {
      setUsername
    }
  }
}
</script>

<style lang="less">
  .welcome {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/index-background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
  }
</style>
