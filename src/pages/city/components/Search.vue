<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: null, // 搜索关键字
      list: [], // 搜索结果集合
      timer: null
    }
  },
  watch: {
    // 监听keyword值的改变，获取搜索结果（城市信息）
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // if (!this.keyword) {
      //   this.list = [{
      //     id: '0000',
      //     name: '请输入城市关键字 :)'
      //   }]
      //   return
      // }
      this.timer = setTimeout(() => {
        const result = [] // 储存匹配的城市
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              result.push(val) // 将匹配的结果push到result中
            }
          })
        }
        if (!result.length) {
          this.list = [{
            id: '0000',
            name: '你所查找的城市搭乘404航班去诗和远方了 :('
          }]
          return
        }
        this.list = result
      }, 100)
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.search {
  height: .72rem;
  background-color: $header-bgc;
  padding: 0 .1rem;

  &-input {
    height: .62rem;
    width: 100%;
    text-align: center;
    border-radius: .06rem;
    line-height: .62rem;
    padding: 0 .1rem;
  }
}

.search-content {
  overflow: hidden;
  background-color: $bgc-theme;
  position: absolute;
  top: 1.62rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  & .search-item {
    line-height: .7rem;
    padding-left: .3rem;
    color: #666;
    background-color: #fff;
    @include ellipsis();
  }
}
</style>
