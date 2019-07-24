<template>
  <div class="header">
    <div class="header-left"><i class="iconfont iconfanhui"></i></div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i>
      <span>输入城市 / 景点 / 游玩主题</span>
    </div>
    <div class="header-right">
      <span>深圳</span>
      <i class="iconfont iconjiantou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.header {
  // line-height: .88rem;
  @include flex-between();
  background-color: $header-bgc;
  color: #fff;

  &-left {
    width: .64rem;
    text-align: center;

    & .iconfont {
      font-size: .36rem;
    }
  }

  &-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    background-color: #fff;
    border-radius: .1rem;
    margin: .12rem 0;
    margin-left: .2rem;
    color: #ccc;
    display: flex;
    align-items: center;

    & .iconfont {
      margin: 0 .2rem;
    }
  }

  &-right {
    width: 1.24rem;
    display: flex;
    @include flex-center();
  }
}

</style>
