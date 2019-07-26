<template>
  <div class="header">
    <router-link to="/">
      <i class="header-back iconfont iconfanhui"></i>
    </router-link>
    <span class="header-title">城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.header {
  overflow: hidden;
  // height: $header-height;
  line-height: $header-height;
  text-align: center;
  color: $default-color;
  background-color: $header-bgc;

  &-back {
    width: .64rem;
    text-align: center;
    float: left;
    font-size: $icon-back-font-size;
    color: $default-color;
    font-weight: bold;
  }

  &-title {
    font-size: $font-size-title;
    margin-left: -0.64rem;
  }
}

</style>
