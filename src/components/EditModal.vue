<template>
  <div class="modal-shadow" @click.self="toggleEdit">
    <div class="modal-content">
      <span class="modal-title">编辑</span>
      <input type="text" v-focus="isLoginOpened" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <span class="modal-msg">{{ msg }}</span>
      <button type="button" :disabled="disable">提交</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin, clearUsername, toggleSignup, addWarning, setAssFilter, toggleEdit } from '../vuex/actions'
import { getUsername } from '../vuex/getters'
import { router } from '../vue-router/router'

export default {
  data () {
    return {
      title: 'header'
    }
  },
  methods: {
    logOut () {
      this.$http.get('/users/logOut').then(res => {
        this.clearUsername()
        this.addWarning({
          type: 'success',
          msg: '已注销'
        })
        router.go({ path: '/' })
      }).catch(() => {
        this.addWarning({
          type: 'fail',
          msg: '注销失败'
        })
      })
    },
    setFilter (e) {
      this.setAssFilter(e.target.value)
    }
  },
  vuex: {
    actions: {
      toggleLogin,
      toggleSignup,
      clearUsername,
      addWarning,
      setAssFilter,
      toggleEdit
    },
    getters: {
      getUsername
    }
  }
}
</script>
