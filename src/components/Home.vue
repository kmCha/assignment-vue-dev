<template>
  <div class="home">
    <span v-if="!$loadingRouteData">{{ getAssignments }}</span>
    <span v-if="$loadingRouteData">loading...</span>
    <button type="button" @click="setAssignments('hahaha')">设置assignment</button>
  </div>
</template>

<script>
  import { setAssignments } from '../vuex/actions'
  import { getAssignments } from '../vuex/getters'

  export default {
    route: {
      // activate (transition) {
      //   transition.next()
      // },
      data (transition) {
        // transition.abort()
        setTimeout(() => transition.next(), 2000)
      }
    },
    vuex: {
      actions: {
        setAssignments
      },
      getters: {
        getAssignments
      }
    }
  }
</script>
