<template>
  <div class="home">
    <span v-if="$loadingRouteData">loading...</span>
    <ul v-if="!$loadingRouteData">
      <assignment v-for="assignment in assignments" :assignment="assignment"></assignment>
    </ul>
    <!-- <button type="button" @click="setAssignments('hahaha')">设置assignment</button> -->
  </div>
</template>

<script>
  import { setAssignments } from '../vuex/actions'
  import { getAssignments } from '../vuex/getters'
  import Assignment from './Assignment'

  export default {
    components: {
      Assignment
    },
    route: {
      // activate (transition) {
      //   transition.next()
      // },
      data () {
        // transition.abort()
        // setTimeout(() => transition.next(), 2000)
        var assResource = this.$resource('/assignments{/username}')
        return assResource.get({ username: 'ma2321987' }).then(function (response) {
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
        assignments: getAssignments
      }
    }
  }
</script>
