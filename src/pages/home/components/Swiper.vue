<template>
  <div class="wrapper-swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' // 导入 swiper组件

export default {
  name: 'HomeSwiper',
  props: {
    list: Array // 幻灯片数据
  },
  data () {
    return {
      // swiper配置项
      swiperOption: {
        autoplay: 3000, // 轮播图自动滚动
        watchOverflow: true, // 只有个slide(非loop), swiper会失效
        pagination: '.swiper-pagination', // 轮播分页
        loop: true // swiper 循环轮播
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    // 幻灯片数据存在，加载 swiper组件
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
  // scoped 限制样式只对当前组件生效
  // /deep/ 样式穿透，样式作用于其它组件
  // 修改轮播分页背景
  .wrapper-swiper /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .wrapper-swiper {
    // 图片宽高比
    // width: 100%;
    // height: 0;
    // overflow: hidden;
    // padding-bottom: 31.25%;
    // 图片宽高比
    width: 100%;
    height: auto;
    background-color: #eee;

    & .swiper-img {
      width: 100%;
    }
  }

</style>
