<template>
  <div id="app">
    <ass-header></ass-header>
    <ass-body></ass-body>
    <ass-footer></ass-footer>
    <router-view></router-view>
    <a v-link="{ path: '/foo'}">header</a>
    <a v-link="{ path: '/bar'}">footer</a>
  </div>
</template>

<script>
import AssHeader from './components/AssHeader'
import AssBody from './components/AssBody'
import AssFooter from './components/AssFooter'

export default {
  components: {
    AssHeader,
    AssBody,
    AssFooter
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
