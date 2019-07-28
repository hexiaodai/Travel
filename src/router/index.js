import Vue from 'vue'
import Router from 'vue-router'
// 导入 vue 模板文件 （非异步）
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

// 路由配置项
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home') // 异步加载组件
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('pages/city/City')
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: () => import('pages/detail/Detail')
    }
  ],
  // 自定义路由切换时页面如何滚动
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
