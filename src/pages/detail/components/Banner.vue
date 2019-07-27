<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="wrapper-img">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1503/dc/dce06160f5db7e6f.water.jpg_600x330_7dcc50cb.jpg" alt="">
      </div>
      <div class="banner-info">
        <div class="banner-title">青海湖仙女湾</div>
        <div class="banner-number">
          <i class="iconfont icontupian"></i>
          <span>4</span>
        </div>
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
  height: 4.125rem;
  color: $default-color;
  position: relative;

  & .wrapper-img {
    height: 100%;

    & .banner-img {
      width: 100%;
    }
  }
  // &-img {
  //   width: 100%;
  // }

  &-info {
    padding: 0 .2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 1rem;
    display: flex;
    align-items: center;

    & .banner-title {
      font-size: .36rem;
      flex: 1;
      @include ellipsis();
    }

    & .banner-number {
      padding: 0 .3rem;
      height: .4rem;
      line-height: .4rem;
      border-radius: .2rem;
      font-size: .24rem;
      background-color: rgba(0, 0, 0, .5);
      @include flex-center();

      & * {
        padding: 0 .06rem;
      }
    }
  }
}
</style>
