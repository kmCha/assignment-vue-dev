<template>
  <div class="warning-wrap">
    <ul class="warning-list">
      <li v-for="warning in warnings">{{ warning.msg }}</li>
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
    }
  }
</script>

<style lang="less">
  .warning-list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
</style>
