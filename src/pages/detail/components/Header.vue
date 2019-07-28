<template>
  <div class="header">
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <i class="header-back iconfont iconfanhui"></i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <i class="header-back iconfont iconfanhui"></i>
      </router-link>
      <span class="header-title">青海湖仙女湾</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: { // header区域渐变效果
        opacity: 0
      }
    }
  },
  // 页面被展示，执行 activated函数
  activated () {
    // 监听 scroll事件，执行 handleScroll()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  // 页面被隐藏（切换），执行 deactivated()
  deactivated () {
    // 移除 window对象上的 scroll事件
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    // header渐变效果
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 获取当前页面的滚动条纵坐标位置
      if (scrollTop > 20) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity // opacity属性 最大值为 1
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.header-abs {
  text-align: center;
  line-height: .7rem;
  font-weight: bold;
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .7rem;
  height: .7rem;
  border-radius: .4rem;
  background-color: rgba(0, 0, 0, .6);

  & .header-back {
    font-size: $icon-back-font-size;
    color: #fff;
  }
}

.header-fixed {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // height: $header-height;
  line-height: $header-height;
  text-align: center;
  color: $default-color;
  background-color: $header-bgc;
  z-index: $header-z-index;

  & .header-back {
    width: .64rem;
    text-align: center;
    float: left;
    font-size: $icon-back-font-size;
    color: $default-color;
    font-weight: bold;
  }

  & .header-title {
    font-size: $font-size-title;
    margin-left: -0.64rem;
  }
}
</style>
