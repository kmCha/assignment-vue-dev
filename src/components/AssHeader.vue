<template>
  <div class="header">
    <ul class="list list-left">
      <li>logo</li>
      <li>登录</li>
      <li>注册</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'header'
      }
    }
  }
</script>

<style lang="less" scoped>
  @grey: #bbb;
  .header {
    background: @grey;
  }
  .list {
    list-style: none;
    margin-top: 0;
    padding: 0 1em;
    li {
      display: inline-block;
      padding: 0.5em 0.3em;
    }
  }
</style>
