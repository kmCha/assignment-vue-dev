<template>
  <div class="header">
    <ul class="list">
      <li class="item">Assignment Recorder</li>
      <li class="item item-left" v-if="!getUsername" @click="toggleLogin">登录</li>
      <li class="item item-left" v-if="!getUsername" @click="toggleSignup">注册</li>
      <li class="item item-right">
        <img class="nav-logo" src="../assets/logo.png" alt="logo" />
      </li>
      <li class="item item-right" v-if="getUsername" @click="logOut">注销</li>
    </ul>
  </div>
</template>

<script>
import { toggleLogin, clearUsername, toggleSignup, addWarning } from '../vuex/actions'
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
    }
  },
  vuex: {
    actions: {
      toggleLogin,
      toggleSignup,
      clearUsername,
      addWarning
    },
    getters: {
      getUsername
    }
  }
}
</script>

<style lang="less" scoped>
  @grey: #bbb;
  .header {
    background: @grey;
  }
  .list {
    list-style: none;
    margin-top: 0;
    padding: 0 1rem;
    overflow: hidden;

    .item {
      display: inline-block;
      font-size: 0.88rem;
      padding: 0.5em 0.3em;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .item-left {
      &:hover {
        background-color: lighten(@grey, 10%);
      }
    }
    .item-right {
      float: right;
    }
    .nav-logo {
      height: 0.88rem;
      width: 0.88rem;
    }
  }
</style>
