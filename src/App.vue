<template>
  <div id="app">
    <ass-header></ass-header>
    <router-view></router-view>
    <ass-footer></ass-footer>
    <a v-link="{ path: '/'}">welcome</a>
    <a v-link="{ path: '/home'}">home</a>
  </div>
</template>

<script>
import AssHeader from './components/AssHeader'
import AssFooter from './components/AssFooter'
import store from './vuex/store'

export default {
  components: {
    AssHeader,
    AssFooter
  },
  store
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
