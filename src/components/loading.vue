<template>
  <!-- loading-1 -->
  <div class="loading" :style="`transform: scale(${scale}, ${scale};`">
    <div class="loading-container">
      <div>
        <span style="transform: rotate(-45deg) translate(0px, 6px); background-color: rgba(100,100,100,0.9);"></span>
        <span style="background-color: rgba(100,100,100,0.8);"></span>
        <span style="transform: rotate(45deg) translate(0px, 6px); background-color: rgba(100,100,100,0.7);"></span>
      </div>
      <div>
        <span style="transform: rotate(90deg); background-color: rgba(100,100,100,0.2);"></span>
        <span></span>
        <span style="transform: rotate(90deg); background-color: rgba(100,100,100,0.6);"></span>  
      </div>
      <div>
        <span style="transform: rotate(45deg) translate(0px, -6px); background-color: rgba(100,100,100,0.3);"></span>
        <span style="background-color: rgba(100,100,100,0.4);"></span>
        <span style="transform: rotate(-45deg) translate(0px, -6px); background-color: rgba(100,100,100,0.5);"></span>
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
    }
  },
  data() {
    return {
      scale: this.initScale
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  12.5% {
    tramsform: rotate(45deg);
  }
  25% {
    tramsform: rotate(45deg * 2);
  }
  37.5% {
    tramsform: rotate(45deg * 3);
  }
  50% {
    tramsform: rotate(45deg * 4);
  }
  62.5% {
    tramsform: rotate(45deg * 5);
  }
  75% {
    tramsform: rotate(45deg * 6);
  }
  87.5% {
    tramsform: rotate(45deg * 7);
  }
  100% {
    transform: rotate(1turn);
  }
}
.loading {
  display: inline-block;
  .loading-container {
    display: inline-flex;
    flex-direction: column;
    // animation: loading 4s linear 0s infinite; // 效果不佳，还是用step吧
    animation: loading 1s steps(8, jump-start) 0s infinite;
    transition: rotate 0.5s linear;
    div {
      display: flex;
      span {
        display: inline-block;
        width: 5px;
        height: 15px;
        margin: 0 5px;
        border-radius: 10px;
      }
    }
  }
}
</style>