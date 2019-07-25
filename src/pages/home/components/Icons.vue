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
  data () {
    return {
      // swiper配置项
      swiperOption: {
        pagination: '.swiper-pagination', // 轮播分页
        loop: true // swiper 循环轮播
      },
      iconList: [{
        id: '0001',
        desc: '门票景点',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '0002',
        desc: '故宫',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
      }, {
        id: '0003',
        desc: '深圳必玩',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
      }, {
        id: '0004',
        desc: '水上乐园',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
      }, {
        id: '0005',
        desc: '爬长城',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png'
      }, {
        id: '0006',
        desc: '古北冰镇',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png'
      }, {
        id: '0007',
        desc: '动植物园',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
      }, {
        id: '0008',
        desc: '北京野生动物园',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'
      }, {
        id: '0009',
        desc: '故宫',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
      }, {
        id: '0010',
        desc: '深圳必玩',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
      }, {
        id: '0011',
        desc: '水上乐园',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
      } ]
    }
  },
  computed: {
    // 分类类目 分页算法
    pages () {
      const pages = [] // 总页数
      // 遍历所有类目，产生一个二维数组
      this.iconList.forEach((item, index) => {
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

.wrapper-icons /deep/ .swiper-pagination-bullets {
  bottom: 0;
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
