<template>
  <div>
    <asideBar></asideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import asideBar from '../components/asideBar.vue';

export default {
  name: 'contentLayout',
  components: {asideBar}
}
</script>

<style lang="less" scoped>

</style>