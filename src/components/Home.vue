<template>
  <div class="home">
    <span v-if="$loadingRouteData">loading...</span>
    <ul v-if="!$loadingRouteData">
      <assignment v-for="assignment in limitedAss" :assignment="assignment"></assignment>
    </ul>
    <button type="button" @click="loadAssignment">继续加载</button>
  </div>
</template>

<script>
import { setAssignments } from '../vuex/actions'
import { getAssignments, getUsername } from '../vuex/getters'
import Assignment from './Assignment'

export default {
  data () {
    return {
      numOfAss: 1
    }
  },
  methods: {
    loadAssignment () {
      if (this.numOfAss < this.assignments.length) {
        this.numOfAss++
      }
    }
  },
  computed: {
    limitedAss () {
      return this.assignments.slice(0, this.numOfAss)
    }
  },
  components: {
    Assignment
  },
  route: {
    // activate (transition) {
    //   transition.next()
    // },
    data (transition) {
      if (!this.getUsername) {
        transition.abort()
        return
      }
      // setTimeout(() => transition.next(), 2000)
      var assResource = this.$resource('/assignments{/username}')
      return assResource.get({ username: this.getUsername }).then(function (response) {
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
      assignments: getAssignments,
      getUsername
    }
  }
}
</script>
