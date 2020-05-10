<template>
  <div class="container">
    <aside>
      <router-link class="cart" v-for="(item, inx) in modulesList" :key="inx" :to="{path: '/note', query: {md: item.md}}"><p>{{item.module}}</p></router-link>
    </aside>
    <main>
      <section v-html="html" class="markdown-body"></section>
      <div class="tools">
        <div class="top" @click=go2top()>
          <div class="line"></div>
          <div class="triangle"></div>
          <div class="rectangle"></div>
        </div>     
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
  },
  methods: {
    go2top() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/github.css');

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
      border: 1px solid rgba(0,0,0, 0.2);
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
        .top {
          transform: scale(0.5,0.5);
          .line {
            width: 50px;
            height: 10px;
            background-color: gray;
          }
          .triangle {
            border-top: 0px solid transparent;
            border-left: 25px solid transparent;
            border-bottom: 25px solid gray;
            border-right: 25px solid transparent;
          }
          .rectangle {
            width: 20px;
            height: 20px;
            background-color: gray;
            margin: auto;
          }
        }
      }
  }
}
</style>