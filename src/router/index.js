import Vue from 'vue'
import Router from 'vue-router'
// 导入 vue 模板文件
import Home from '@/pages/home/Home'

Vue.use(Router)

// 路由配置项
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
