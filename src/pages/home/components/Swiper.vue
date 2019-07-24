<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" :alt="item.alt"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' // 导入 swiper组件

export default {
  name: 'HomeSwiper',
  data () {
    return {
      // swiper配置项
      swiperOption: {
        pagination: '.swiper-pagination', // 轮播分页
        loop: true // swiper 循环轮播
      },
      swiperList: [{
        id: '0001',
        'alt': '暑假你会玩',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/82fd1a5457649a9c43b82eb36a7bbc86.jpg_750x200_27211d2d.jpg'
      }, {
        id: '0002',
        'alt': '酷玩夏日',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
      }]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  // scoped 限制样式只对当前组件生效
  // /deep/ 样式穿透，样式作用于其它组件
  // 修改轮播分页背景
  .wrapper /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .wrapper {
    // 图片宽高比
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    // 图片宽高比
    background-color: #eee;

    & .swiper-img {
      width: 100%;
    }
  }

</style>
