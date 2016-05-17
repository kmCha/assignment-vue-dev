<template>
  <div id="app">
    <login-modal v-if="loginOpened"></login-modal>
    <signup-modal></signup-modal>
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
import store from './vuex/store'
import { isLoginOpened } from './vuex/getters'

export default {
  components: {
    AssHeader,
    AssFooter,
    LoginModal,
    SignupModal
  },
  store,
  vuex: {
    getters: {
      loginOpened: isLoginOpened
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
