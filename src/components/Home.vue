<template>
  <div class="home">
    <span v-if="$loadingRouteData">loading...</span>
    <ul v-if="!$loadingRouteData" class="assignmentWrap">
      <assignment v-for="assignment in limitedAss" :assignment="assignment"></assignment>
    </ul>
    <button type="button" v-if="!$loadingRouteData" :disabled="!!warnings.length" @click="loadAssignment">继续加载</button>
  </div>
</template>

<script>
import { setAssignments, addWarning } from '../vuex/actions'
import { getAssignments, getUsername, getWarnings } from '../vuex/getters'
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
      } else {
        this.addWarning({
          type: 'fail',
          msg: '没有更多'
        })
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
      setAssignments,
      addWarning
    },
    getters: {
      assignments: getAssignments,
      getUsername,
      warnings: getWarnings
    }
  }
}
</script>

<style lang="less">
  @import "../stylesheets/color.less";
  .home {
    padding-top: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 1.8rem);
    background: rgba(100, 100, 100, 0.05);
    button {
      padding: 0.5rem 0.25rem;
      background: #fff;
      border: none;
      border-radius: 0.1rem;
      color: @red;
      border: @red 1px solid;
      font-weight: bold;
      margin-bottom: 1.5rem;
      cursor: pointer;
    }
  }
  .assignmentWrap {
    padding: 0;
    margin: 0;
  }
</style>
