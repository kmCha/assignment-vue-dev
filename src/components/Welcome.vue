<template>
  <div class="welcome">
    <span>welcome</span>
  </div>
</template>

<script>
export default {
  route: {
    data (transition) {
      this.$http.get('users/loggedIn').then(logged => {
        console.log(logged)
      })
    }
  }
}
</script>
