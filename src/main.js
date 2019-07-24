// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 第三方组件，解决移动端点击事件 300毫秒延迟
import './assets/styles/reset.css' // 重置 css样式表
import './assets/styles/border.css' // 移动端 1px像素问题

Vue.config.productionTip = false
fastClick.attach(document.body) // attach：将  fastClick绑定到 body上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  components: { App },
  template: '<App/>'
})
