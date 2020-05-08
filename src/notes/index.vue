<template>
  <div class="container">
    <aside>
      <router-link class="cart" v-for="(item, inx) in modulesList" :key="inx" :to="{path: '/note', query: {md: item.md}}"><p>{{item.module}}</p></router-link>
    </aside>
    <main id="top">
      <section v-html="html"></section>
      <div class="tools">
        <a href="#top">TOP</a>
      </div>
    </main>
  </div>
</template>

<script>
import * as enums from '../assets/js/enums.js';

export default {
  name: 'test',
  data() {
    return {
      modulesList: enums.modules, 
    }
  },
  computed: {
    html: function() {
      let md = this.$route.query.md || this.modulesList[0].md || undefined;
      return md ? require(`../notes/md/${md}.md`) : '暂无内容';
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  max-width: 1920px;
  overflow-x: hidden;
  aside {
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    .cart {
      display: flex;
      width: 350px;
      height: 200px;
      border: 1px solid gray;
      border-radius: 5px;
      p {
        margin: auto;
      }
    }
    .cart:not(:first-child) {
      margin-top: 20px;
    }
  }
  main {
    margin-left: 400px;
    width: calc(100% - 400px);
    .tools {
      position: fixed;
      bottom: 10%;
      right: 5%;
    }
  }
}
</style>