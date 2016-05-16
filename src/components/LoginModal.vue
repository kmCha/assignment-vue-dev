<template>
  <div class="login-shadow" @click.self="toggleLogin">
    <div class="login-content">
      <input type="text" name="username" placeholder="username">
      <input type="password" name="password" placeholder="password">
      <button type="button">提交</button>
    </div>
  </div>
</template>

<script>
import { toggleLogin } from '../vuex/actions'

export default {
  vuex: {
    actions: {
      toggleLogin
    }
  }
}
</script>

<style lang="less">
  .login-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    // justify-content: center;
    // align-items: center;
    .login-content {
      background-color: #fff;
      max-width: 400px;
      min-height: 20vh;
      margin: auto;
      padding: 50px;

      input {
        display: block;
      }
    }
  }
</style>
