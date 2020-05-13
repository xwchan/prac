<template>
  <div class="loading-container">
    <div class="outer"></div>
    <div class="inner"></div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="less" scoped>
.loading-container {
  position: relative;
  .outer {
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border-radius: 50%;
  }
  .inner {
    position: absolute;
    top: 5px;
    left: 5px;
    display: inline-block;
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 50%;
  }
}
</style>