<template>
  <div class="container">
    <aside>
      <nav>
        <ul>
          <li v-for="(item,inx) in cases" :key="inx">{{item}}</li>
        </ul>
      </nav>
    </aside>
    <main>
      <Loading :initScale=0.5></Loading>
    </main>
  </div>
</template>

<script>
import Loading from '../components/loading.vue';

export default {
  name: 'css-case',
  components: {Loading},
  data() {
    return {
      cases: [
        'loading',
        'half-px',
        'magnifying-glass'
      ]
    }
  }

}
</script>

<style lang="less" scoped>
@import url('../assets/css/variable.less');

.container {
  margin: 0;
  aside {
    position: fixed;
    left: 0;
    width: @aside-width;
  }
  main {
    margin-left: calc(@aside-width + 50px);
    width: calc(100% - 50px - @aside-width);
  }
}
</style>