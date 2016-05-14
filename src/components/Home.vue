<template>
  <div class="home">
    <span v-if="$loadingRouteData">loading...</span>
    <ul v-if="!$loadingRouteData">
      <li v-for="assignment in getAssignments">{{ assignment.title }}</li>
    </ul>
    <!-- <button type="button" @click="setAssignments('hahaha')">设置assignment</button> -->
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
        // setTimeout(() => transition.next(), 2000)
        return this.$http.get('/assignments').then(function (response) {
          let assignments = response.data
          this.setAssignments(assignments)
          // transition.next()
        })
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
