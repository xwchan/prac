<template>
  <div>
    <section v-html="html"></section>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      html: ''
    }
  },
  created() {
    let md = this.$route.query.md;
    this.html = require(`../content/md/${md}.md`)
  }
}
</script>

<style lang="less" scoped>

</style>