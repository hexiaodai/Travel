<template>
  <div class="header">
    <div class="header-left"><i class="iconfont iconfanhui"></i></div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <router-link to="./city">
      <div class="header-right">
        <!-- this.$store: vuex数据仓库, state存放共公数据 -->
        <span class="city">{{this.city}}</span>
        <i class="iconfont iconjiantou"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex state对象上的数据

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 将vuex state储存的city数据，映射到 city计算属性中
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.header {
  line-height: $header-height;
  // height: $header-height;
  background-color: $header-bgc;
  color: #fff;
  @include flex-between();

  &-left {
    width: .64rem;
    text-align: center;

    & .iconfont {
      font-size: $icon-back-font-size;
      font-weight: bold;
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
    min-width: 1.24rem;
    max-width: 2.5rem;
    padding: 0 .2rem;
    display: flex;
    color: $default-color;
    @include flex-center();

    & .city {
      @include ellipsis();
    }
  }
}

</style>
