<template>
  <div class="header">
    <ul class="list">
      <li class="item">Assignment Recorder</li>
      <li class="item clickable" v-if="!getUsername" @click="toggleLogin">登录</li>
      <li class="item clickable" v-if="!getUsername" @click="toggleSignup">注册</li>
      <li class="item-right">
        <div class="item" v-if="getUsername">{{ getUsername }}</div>
        <div class="item clickable" v-if="getUsername" @click="logOut">注销</div>
        <img class="nav-logo" src="../assets/logo.png" alt="logo" />
      </li>
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
  @import "../stylesheets/color.less";
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: @rose;
    color: white;
    font-weight: bold;
  }
  .list {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0 1rem;
    .item {
      display: inline-block;
      font-size: 0.88rem;
      padding: 0.5em 0.3em;
      transition: background-color 0.3s;
      &.clickable {
        &:hover {
          background-color: darken(@rose, 5%);
        }
        cursor: pointer;
      }
    }
    .item-right {
      position: absolute;
      right: 1rem;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-logo {
      height: 0.88rem;
      width: 0.88rem;
      padding: 0.5rem 0.3rem;
      display: inline-block;
    }
  }
</style>
