<template>
  <div class="assignment">
    <span>{{ assignment.code }},{{ assignment.title }}</span>
  </div>
</template>

<script>
  export default {
    props: [
      'assignment'
    ]
  }
</script>
