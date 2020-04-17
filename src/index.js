import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index.js';
import App from './App.vue';

Vue.config.productionTip = false; //关闭控制台开发模式提示

Vue.use(VueRouter);
var router = new VueRouter({
  mode: 'hash',
  routes
})

const app = document.createElement('div');
document.body.appendChild(app);

new Vue({
  render: h => h(App),
  router
}).$mount(app)