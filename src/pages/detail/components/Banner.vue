<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="wrapper-img">
        <img class="banner-img" :src="bannerImg" alt="">
      </div>
      <div class="banner-info">
        <div class="banner-number">
          <i class="iconfont icontupian"></i>
          <span>{{gallaryImgs.length}}</span>
        </div>
        <div class="banner-title">{{sightName}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleBannerClose" />
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'components/gallary/Gallary'
import FadeAnimation from 'components/fade/Fade'

export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    gallaryImgs: Array,
    bannerImg: String,
    sightName: String
  },
  components: {
    CommonGallary,
    FadeAnimation
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
