<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
    <button type="button" @click="getAssignments">获取资源</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    getAssignments () {
      this.msg = 'loading...'
      this.$http.get('/users').then(function (response) {
        this.msg = JSON.stringify(response.data)
      }, function (error) {
        window.alert(error)
      })
      // setTimeout(() => { this.msg = 'hahaha' }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
