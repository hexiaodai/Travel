<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(img, index) of gallaryImgs" :key="index">
          <img class="swiper-img" :src="img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      // swiper配置项
      swiperOption: {
        pagination: '.swiper-pagination', // 图片分页器
        paginationType: 'fraction', // 分式 分页器
        // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    gallaryImgs: {
      type: Array,
      // 默认值
      default () {
        return [
          '/static/img/404.bc1895d.png'
        ]
      }
    }
  },
  methods: {
    // 关闭Gallary组件
    handleGallaryClick () {
      // 向父组件派发一个 close事件，执行关闭 Gallary组件操作
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

// 取消swiper溢出隐藏
.wrapper /deep/.swiper-container {
  overflow: inherit;

  & .swiper-wrapper {
    display: flex;
    align-items: center;
  }
}

.container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  z-index: $gallary-z-index;
  @include flex-center(column);

  & .wrapper {
    // overflow: hidden;
    width: 100%;

    & .swiper-img {
      width: 100%;
    }

    & .swiper-pagination {
      // position: absolute;
      bottom: -.6rem;
      color: #000;
    }
  }
}
</style>
