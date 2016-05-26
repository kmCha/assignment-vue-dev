<template>
  <li class="assignment">
    <span>{{ assignment.code }},{{ assignment.title }}</span>
  </li>
</template>

<script>
  export default {
    props: [
      'assignment'
    ]
  }
</script>

<style lang="less">
  .assignment {
    display: block;
    margin: 0;
    width: 50vw;
    height: 50vh;
    border: 1px solid #000;
  }
</style>
