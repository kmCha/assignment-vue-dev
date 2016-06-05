<template>
  <div id="app">
    <warning></warning>
    <loading v-show="loadingMsg"></loading>
    <login-modal v-show="loginOpened" transition="modal-fade"></login-modal>
    <signup-modal v-show="signupOpened" transition="modal-fade"></signup-modal>
    <edit-modal v-if="editOpened" transition="modal-fade"></edit-modal>
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
import EditModal from './components/EditModal'
import Warning from './components/Warning'
import Loading from './components/Loading'
import store from './vuex/store'
import { isLoginOpened, isSignupOpened, getLoadingMsg, isEditOpened } from './vuex/getters'
import { beginTransit, transitEnd } from './vuex/actions'

export default {
  components: {
    AssHeader,
    AssFooter,
    LoginModal,
    SignupModal,
    Warning,
    Loading,
    EditModal
  },
  store,
  vuex: {
    getters: {
      loginOpened: isLoginOpened,
      signupOpened: isSignupOpened,
      editOpened: isEditOpened,
      loadingMsg: getLoadingMsg
    },
    actions: {
      beginTransit,
      transitEnd
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
    font-family: "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", sans-serif;
  }
</style>
<style src="./vue-animation/animation.less" lang="less"></style>
