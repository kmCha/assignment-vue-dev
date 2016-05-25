<template>
  <div class="warning-wrap">
    <ul class="warning-list">
      <li v-for="warning in warnings" :class="classObj(warning)" transition="warning">{{ warning.msg }}</li>
    </ul>
  </div>
</template>

<script>
  import { getWarnings } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        warnings: getWarnings
      }
    },
    methods: {
      classObj (warning) {
        return {
          'warning-success': warning.type === 'success',
          'warning-fail': warning.type === 'fail'
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../stylesheets/color.less";

  .warning-list {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
      display: block;
      padding: 2rem 4rem;
      font-weight: bold;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
    .warning-fail {
      background: @red;
    }
    .warning-success {
      background: @green;
    }
  }
</style>
