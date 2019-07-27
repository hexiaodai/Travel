<template>
  <div>
    <home-header />
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
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: null, // 最后一次加载的城市
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
  computed: {
    ...mapState(['city']) // 城市内容
  },
  methods: {
    // ajax请求, 获取 home页面数据
    getHomeInfo () {
      axios.get(`/api/index.json?city=${this.city}`)
        .then(this.getHomeInfoSucc)
    },
    // 数据获取成功，执行回调
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data // home页 json数据
        // this.city = data.city // 选中的城市
        this.swiperList = data.swiperList // 幻灯片数据
        this.iconList = data.iconList // 类目数据
        this.recommendList = data.recommendList // 热销推荐
        this.weekendList = data.weekendList // 周末去哪儿
      }
    }
  },
  // 页面首次加载，执行 mounted()生命周期函数
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  // 使用<keep-alive>(缓存)时，开启activated() 生命周期函数
  // 页面重新被显示时，执行 activated()生命周期函数
  activated () {
    // 判断城市是否被切换
    if (this.city !== this.lastCity) {
      this.lastCity = this.city
      // 重新请求 home ajax数据
      this.getHomeInfo()
      console.log(this.city)
    }
  }
}
</script>

<style>

</style>
