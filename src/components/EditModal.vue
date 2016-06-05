<template>
  <div class="modal-shadow" @click.self="toggleEdit">
    <div class="modal-content">
      <span class="modal-title">编辑</span>
      <input type="text" v-focus="isLoginOpened" placeholder="课程号" v-model="code">
      <input type="text" placeholder="课程名" v-model="name">
      <textarea placeholder="作业描述" rows="8" cols="40" draggable="false" v-model="description"></textarea>
      <input type="date" v-model="date">
      <span class="modal-msg">{{ date }}</span>
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
      code: '',
      name: '',
      description: '',
      date: ''
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
