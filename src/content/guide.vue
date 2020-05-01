<template>
  <div>
    <header style="text-align: center;"><h1>This is the guide page!</h1></header>
    <main>
      <div class="cart" v-for="(item, inx) in modules" :key="inx">
        <router-link :to="{path: 'note', query: {md: item.md}}">
          {{item.module}}
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import * as enums from './enums.js';

export default {
  name: 'guide',
  data() {
    return {
      toc: [
        {title: "color", link: '/content/#'},
        {title: "selector", link: '/content/#'},
        {title: "flex", link: '/content/#'},
        {title: "transform", link: '/content/#'},
        {title: "transition", link: '/content/#'},
        {title: "animation", link: '/content/#'},
      ],
      modules: enums.moduleMap
    }
  },
  created() {
    
  }
}
</script>

<style lang="less" scoped>
main {
  display: flex;
  width: 844px;
  margin: auto;
  flex-wrap: wrap;
  .cart {
    width: 400px;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    background: rgba(123, 123, 123, .1);
    text-decoration: none;

  }
  
}
</style>
