<template>
  <li class="assignment">
    <span class="ass-item ass-code">{{ assignment.code }}</span>
    <span class="ass-item ass-title">{{ assignment.title }}</span>
    <span class="ass-item ass-description">{{ assignment.description }}</span>
    <span class="ass-item ass-date">{{ assignment.date }}</span>
    <span class="ass-item ass-submit">{{ assignment.submit }}</span>
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
  @import "../stylesheets/color.less";
  .assignment {
    display: flex;
    margin: 1.5rem 0;
    width: 50vw;
    height: 50vh;
    border: 1px solid @grey;
    border-radius: 0.2rem;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ass-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .ass-code {
      font-weight: bold;
      font-size: 1.3rem;
      flex-grow: 1;
    }
    .ass-title {
      font-weight: bold;
      font-size: 1.3rem;
      flex-grow: 1;
    }
    .ass-description {
      flex-grow: 3;
    }
    .ass-date {
      flex-grow: 1;
    }
    .ass-submit {
      flex-grow: 1;
    }
  }
</style>
