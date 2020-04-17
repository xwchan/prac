<template>
  <div>
    <img src="./assets/logo.png" alt="logo"/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>