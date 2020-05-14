<template>
  <!-- loading-1 -->
  <div :style="`transform: scale(${scale}, ${scale};`">
    <div class="loading-container">
      <div>
        <span :style="`transform: rotate(-45deg) translate(0px, 6px); opacity: 0.9; background-color: ${bgcolor};`"></span>
        <span :style="`opacity: 0.8; background-color: ${bgcolor};`"></span>
        <span :style="`transform: rotate(45deg) translate(0px, 6px); opacity: 0.7; background-color: ${bgcolor};`"></span>
      </div>
      <div>
        <span :style="`transform: rotate(90deg); opacity: 0.2; background-color: ${bgcolor};`"></span>
        <span :style="`opacity: 0; background-color: ${bgcolor};`"></span>
        <span :style="`transform: rotate(90deg); opacity: 0.6; background-color: ${bgcolor};`"></span>  
      </div>
      <div>
        <span :style="`transform: rotate(45deg) translate(0px, -6px); opacity: 0.3; background-color: ${bgcolor};`"></span>
        <span :style="`opacity: 0.4; background-color: ${bgcolor};`"></span>
        <span :style="`transform: rotate(-45deg) translate(0px, -6px); opacity: 0.5; background-color: ${bgcolor};`"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    initScale: {
      type: Number,
      default: 1
    },
    initColor: {
      type: String,
      default: 'rgb(100,100,100)'
    }
  },
  data() {
    return {
      scale: this.initScale,
      bgcolor: this.initColor
    }
  }
}
</script>

<style lang="less" scoped>
@bgcolor: rgb(100, 100, 100);

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}

  .loading-container {
    display: inline-flex;
    flex-direction: column;
    animation: loading 1s steps(8, end) 0s infinite normal forwards; // 没用linear，感觉像在转风车
    transition: rotate 0.5s linear;
    div {
      display: flex;
      span {
        display: inline-block;
        width: 5px;
        height: 15px;
        margin: 0 5px;
        border-radius: 10px;
        background-color: @bgcolor;
      }
    }
  }

</style>