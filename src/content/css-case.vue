<template>
  <div class="container">
    <aside>
      <nav>
        <ul>
          <li v-for="(item,inx) in cases" :key="inx" @click="active = inx" :class="{'active': active === inx}">{{item}}</li>
        </ul>
      </nav>
    </aside>
    <main>
      <!-- 加载中 -->
      <div class="loading" v-if="active === 0">
        <header>1x</header>
        <Loading1 style="text-align: center;"></Loading1>

        <header>0.5x</header>
        <Loading1 :initScale=0.5 initColor="lightsalmon"  style="text-align: center;"></Loading1>

        <header>2x</header>
        <Loading1 :initScale=2 initColor="#4183c4"  style="text-align: center;"></Loading1>
      </div>
      <!-- 半像素 -->
      <div class="half-px" v-if="active === 1">
        <div>height: 1px</div>
        <div style="width: 100%; height: 1px; background-color: black;"></div>
        <br>
        
        <div>height: 1px + scaleY(0.5)</div>
        <div style="width: 100%; height: 1px; background-color: black; transform-origin: 50% 100%; transform: scaleY(0.5); "></div>
        <br>
        
        <div>height: 0.5px</div>
        <div style="width: 100%; height: 0.5px; background-color: black;"></div>
        <br>
        
        <div>box-shadow: 0px 0.5px 0 black;</div>
        <div style="width: 100%; height: 1px; background-color:transparent; box-shadow: 0px 0.5px 0 black;"></div>
      </div>
      <!-- 放大镜 -->
      <div class="magnifing-glass" v-if="active === 2">

      </div>
    </main>
  </div>
</template>

<script>
import Loading1 from '../components/loading-1.vue';

export default {
  name: 'css-case',
  components: {Loading1},
  data() {
    return {
      active: 0,
      cases: [
        '加载中',
        '半像素线',
      ]
    }
  },
  created() {

  },
  

}
</script>

<style lang="less" scoped>
@import url('../assets/css/variable.less');

.container {
  display: flex;
  aside {
    flex: 1;
    
    nav {
      ul {
        display: flex;
        flex-direction: column;
        float: right;
        li {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          list-style: none;
          display: inline-block;
          writing-mode: vertical-rl;
          width: 30px;
          padding: 5px;
          border-left: 1px solid @primary-color;
          border-bottom: 1px solid @primary-color;
          border-top-left-radius: 30%;
          border-bottom-left-radius: 15%;
          font-family: @basic-font;
          letter-spacing: 0.2em;
          line-height: 1.5em;
          &:first-child {
            border-top: 1px solid @primary-color;
          }
          &:hover{
            cursor: pointer;
            background-color: @warning-color;
            color: white;
            border: 1px solid transparent; // 不用none是为了防止抖动
          }
          &.active {
            background-color: @primary-color;
            color: white;
            border: 1px solid transparent;
          }
        }
      }
    }
  }
  main {
    flex: 4;
    min-height: 500px;
    border: 1px solid @primary-color;
    box-shadow: 5px 5px 10px #c3d2e1;
    padding: 20px;
  }
}
</style>