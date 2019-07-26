<template>
  <!-- 页面滚动组件 - better-scroll -->
  <!-- ref="wapper": ref可以获取 DOM元素 -->
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="item-list">
          <li class="item">北京</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="item-list">
          <li class="item" v-for="hotCitie of hotCities" :key="hotCitie.id">{{hotCitie.name}}</li>
        </ul>
      </div>
      <div class="area" v-for="(citie, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li class="item" v-for="item of citie" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// better-scroll组件
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  mounted () {
    // 创建 better-scroll 实例
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.list {
  // 定位滚动区域，让其内容得以滚动
  overflow: hidden;
  position: absolute;
  top: 1.62rem;
  left: 0;
  right: 0;
  bottom: 0;

   .title {
    line-height: .7rem;
    padding-left: .2rem;
    font-weight: bold;
    background-color: $title-bgc;

  }

  .item-list {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    & .item {
      padding: 0;
      margin: 0;
      line-height: .88rem;
      width: 30%;
      text-align: center;
    }
  }
}

</style>
