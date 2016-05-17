<template>
  <div class="welcome">
    <span>welcome</span>
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
