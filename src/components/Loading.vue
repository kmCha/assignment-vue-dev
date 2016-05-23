<template>
  <div class="loading-wrap">
    <div class="loading-content">
      <div class="loading-logo"></div>
      <span class="loading-text">{{ loadingMsg + '中...' }}</span>
    </div>
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

<style lang="less">
  @import "../stylesheets/color.less";
  .loading-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    .loading-content {
      padding: 1rem 2rem;
      background: @brown;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .loading-logo {
        height: 20px;
        width: 20px;
        margin-bottom: 0.7rem;
        background: white;
        animation: loading-animation 8s linear infinite;
      }
      .loading-text {
        color: white;
        font-weight: bold;
      }
    }
  }
</style>
