// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 第三方组件，解决移动端点击事件 300毫秒延迟
import 'assets/scss/index.scss' // scss文件

Vue.config.productionTip = false
fastClick.attach(document.body) // attach：将  fastClick绑定到 body上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  components: { App },
  template: '<App/>'
})
