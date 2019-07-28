<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="wrapper-img">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1503/dc/dce06160f5db7e6f.water.jpg_600x330_7dcc50cb.jpg" alt="">
      </div>
      <div class="banner-info">
        <div class="banner-number">
          <i class="iconfont icontupian"></i>
          <span>4</span>
        </div>
        <div class="banner-title">青海湖仙女湾</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleBannerClose" />
  </div>
</template>

<script>
import CommonGallary from 'components/gallary/Gallary'

export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1503/dc/dce06160f5db7e6f.water.jpg_r_800x800_1d174506.jpg',
        'http://img1.qunarzz.com/sight/p0/1503/b1/b19ddc56773ee672.water.jpg_r_800x800_474cd8e2.jpg'
      ]
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    // 启用 Gallary组件
    handleBannerClick () {
      this.showGallary = true
    },
    // 关闭 Gallary组件
    handleBannerClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.banner {
  overflow: hidden;
  height: auto;
  // height: 4.125rem;
  color: $default-color;
  position: relative;

  & .wrapper-img {
    height: 100%;

    & .banner-img {
      height: 100%;
      width: 100%;
    }
  }

  &-info {
    position: absolute;
    left: .2rem;
    bottom: .18rem;

    & .banner-title {
      font-size: .36rem;
      line-height: .6rem;
    }

    & .banner-number {
      max-width: 1.2rem;
      border-radius: .2rem;
      font-size: .24rem;
      background-color: rgba(0, 0, 0, .6);
      @include flex-center();

      & * {
        padding: .04rem .06rem;
      }
    }
  }
}
</style>
