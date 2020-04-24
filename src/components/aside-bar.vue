<template>
  <nav>
    <ul>
      <li v-for="(item,inx) in toc" :key="inx"><router-link :to=item.link>{{item.title}}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'asideBar',
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
  }
}
</script>

<style lang="less" scoped>
nav {
  float: left;
  width: 300px;
}
</style>