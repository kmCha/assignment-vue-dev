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
import Vue from 'vue'

Vue.transition('fade', {
  enter (el) {
    el.querySelector('.modal-content').classList.add('down-transition', 'down-enter')
  },
  afterEnter (el) {
    el.querySelector('.modal-content').classList.remove('down-enter')
  },
  leave (el) {
    el.querySelector('.modal-content').classList.add('down-leave')
  },
  afterLeave (el) {
    el.querySelector('.modal-content').classList.remove('down-leave', 'down-transition')
  }
})

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
  .down-transition {
    transform-origin: left bottom;
  }
  .down-enter {
    animation: down-in 0.5s;
  }
  .down-leave {
    animation: down-out 0.5s;
  }
  @keyframes down-in {
    0% {
      transform: translateY(-200px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes down-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(200px);
    }
  }
  .fade-enter {
    animation: fade-in 0.5s;
  }
  .fade-leave {
    animation: fade-out 0.5s;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
