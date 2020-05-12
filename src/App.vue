<template>
  <div class="app-container">
    <nav>
      <ul>
        <li><router-link to='note'>笔记</router-link></li>
        <li><router-link to='css-case'>CSS小栗子</router-link></li>
      </ul>
    </nav>
    <!-- 路由出口 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
@import url('./assets/css/github.css');
@import url('./assets/css/variable.less');

body {
  overflow-x: hidden;
}
.app-container {
  nav {
    padding: 20px;
    position: fixed;
    width: 100%;
    height: 20px;
    background-color: white;
    z-index: 9999;
    li {
      display: inline-block;
      margin: 0 10px;
      &::before {
        content: '>';
        display: inline-block;
        padding: 0 0.5em 0 0;
      }
    }
  }
  main {
    position: relative;
    top: @top-bar-height;
  }
}
</style>