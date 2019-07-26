<template>
  <div class="wrapper-icons">
    <swiper :options="swiperOption">
      <swiper-slide class="icons" v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" :alt="item.desc"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' // 导入 swiper组件

export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      // swiper配置项
      swiperOption: {
        pagination: '.swiper-pagination', // 轮播分页
        autoplay: false, // 自动播放幻灯片
        loop: false // swiper 循环轮播
      }
    }
  },
  computed: {
    // 分类类目 分页算法
    pages () {
      const pages = [] // 总页数
      // 遍历所有类目，产生一个二维数组
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8) // 每页 8项
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages // 分页数据
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

// swiper分页条样式
.wrapper-icons /deep/ .swiper-pagination-bullets {
  bottom: 0;

  & .swiper-pagination-bullet {
    width: .08rem;
    height: .08rem;
  }
}

.icons {
  overflow: hidden;
  height: 3.74rem;
  display: flex;
  flex-wrap: wrap;

  & .icon {
    overflow: hidden;
    height: 50%;
    width: 25%;
    display: flex;
    @include flex-center(column);

    &-img {
      width: 1.1rem;

      & img {
        width: 100%;
      }
    }

    &-desc {
      margin-top: .1rem;
      color: $dark-text-color;
      @include ellipsis();
    }
  }
}
</style>
