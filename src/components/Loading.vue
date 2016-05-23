<template>
  <div class="loading-wrap">
    <span>{{ loadingMsg + '中...' }}</span>
  </div>
</template>

<script>
  import { getLoadingMsg } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        loadingMsg: getLoadingMsg
      }
    }
  }
</script>
