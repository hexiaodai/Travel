<template>
  <div id="app">
    <!-- 路由中的数据被加载过后，将数据放入内存中，再次请求该路由，直接返回缓存中的数据 -->
    <keep-alive>
      <!-- 路由 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
