<template>
  <div id="app">
    <warning v-show="warningExist"></warning>
    <login-modal v-show="loginOpened" transition="fade"></login-modal>
    <signup-modal v-show="signupOpened" transition="fade"></signup-modal>
    <ass-header></ass-header>
    <router-view></router-view>
    <ass-footer></ass-footer>
    <!-- <a v-link="{ path: '/'}">welcome</a>
    <a v-link="{ path: '/home'}">home</a> -->
  </div>
</template>

<script>
import AssHeader from './components/AssHeader'
import AssFooter from './components/AssFooter'
import LoginModal from './components/LoginModal'
import SignupModal from './components/SignupModal'
import Warning from './components/Warning'
import store from './vuex/store'
import { isLoginOpened, isSignupOpened, getWarnings } from './vuex/getters'

export default {
  components: {
    AssHeader,
    AssFooter,
    LoginModal,
    SignupModal,
    Warning
  },
  computed: {
    warningExist () {
      return this.getWarnings.length > 0
    }
  },
  store,
  vuex: {
    getters: {
      loginOpened: isLoginOpened,
      signupOpened: isSignupOpened,
      getWarnings
    }
  }
}
</script>

<style lang="less">
  * {
  	&:focus, &:active, &:visited {
  		outline: none !important; // 取消浏览器自带的focus蓝边框
  	}
  }
  body {
    margin: 0;
  }
</style>
<style src="./vue-animation/animation.less" lang="less"></style>
