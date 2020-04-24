<template>
  <div>
    <header style="text-align: center;font-size: 150%;">This is a test page!</header>
    <section v-html="html"></section>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      html: ""
    }
  },
  created() {
    this.html = require('./test.content.md')
  }
}
</script>

<style lang="less" scoped>
.md {
  width: 80%;
  min-width: 666px;
  max-width: 888px;
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
  padding: 20px;
  .code {
        margin-left: 32px;
        border-left: 4px solid #CCC;
        padding-left: 16px;
    }
}

</style>