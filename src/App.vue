<template>
  <div id="app">
    <ass-header></ass-header>
    <ass-body></ass-body>
    <ass-footer></ass-footer>
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

</style>
