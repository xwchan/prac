<template>
  <div class="container">
    <aside>
      <router-link class="cart" v-for="(item, inx) in modulesList" :key="inx" :to="{path: '/note', query: {md: item.md}}">
        <header>{{item.module}}</header>
        <section v-html="htmls[inx]" class="markdown-body aside-markdown-body"></section>
      </router-link>
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
      htmls: [],
    }
  },
  computed: {
    html: function() {
      let md = this.$route.query.md || this.modulesList[0].md || undefined;
      return md ? require(`../notes/md/css/${md}.md`) : '暂无内容';
    }
  },
  created() {
    this.initTOC();
  },
  methods: {
    go2top() {
      window.scrollTo(0,0);
    },
    initTOC() {
      for(let it of this.modulesList){
        this.htmls.push(require(`../notes/md/css/${it.md}.md`));
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/variable.less');

.container {
  width: 100%;
  max-width: @max-page-width;
  min-width: @aside-width;
  aside {
    position: fixed;
    width: @aside-width;
    height: calc(100vh - @top-bar-height);
    overflow-y: auto;
    .cart {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 200px;
      border: 1px solid rgba(0,0,0, 0.2);
      border-radius: 5px;
      header {
        margin: 10px auto;
        font-size: 1.5em;
      }
      &:not(:first-child) {
        margin-top: 20px;
      }
      .aside-markdown-body {
        transform: scale(0.8, 0.8);
      }
    }
  }
  main {
    margin-left: calc(@aside-width + 50px);
    width: calc(100% - 50px - @aside-width);
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