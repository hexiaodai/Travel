<template>
  <div>
    <home-header :city="city" />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios' // 发送ajax请求

export default {
  name: 'Home',
  data () {
    return {
      city: null, // 加载的城市
      swiperList: [], // 幻灯片数据
      iconList: [], // 类目数据
      recommendList: [], // 热销推荐
      weekendList: [] // 周末去哪儿
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    // ajax请求, 获取 home页面数据
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    // 数据获取成功，执行回调
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data // home页 json数据
        this.city = data.city // 选中的城市
        this.swiperList = data.swiperList // 幻灯片数据
        this.iconList = data.iconList // 类目数据
        this.recommendList = data.recommendList // 热销推荐
        this.weekendList = data.weekendList // 周末去哪儿
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
