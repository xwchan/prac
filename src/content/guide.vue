<template>
  <div>
    <header style="text-align: center;"><h1>This is the guide page!</h1></header>
    <main>
      <router-link class="cart" v-for="(item, inx) in toc" :key="inx" :to=item.link>
      {{item.title}}
      </router-link>
    </main>
    
  </div>
</template>

<script>
export default {
  name: 'guide',
  data() {
    return {
      toc: [
        {title: "test",link: '/content/test'},
        {title: "color", link: '/content/#'},
        {title: "selector", link: '/content/#'},
        {title: "flex", link: '/content/#'},
        {title: "transform", link: '/content/#'},
        {title: "transition", link: '/content/#'},
        {title: "animation", link: '/content/#'},
        {title: "unit", link: '/content/#'},
      ]
    }
  },
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
