<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <dir class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </dir>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWekkend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
      }, {
        id: '0002',
        title: '帝都必打卡',
        desc: '来北京必去的景点非这些地方莫属',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.title {
  margin-top: .2rem;
  line-height: .8rem;
  background-color: $recommend-bgc;
  font-weight: bold;
  text-indent: .2rem;
  font-size: $font-size-title;
}

.item {
  overflow: hidden;
  margin-bottom: .2rem;

  &-img-wrapper {
    overflow: hidden;
    height: 2.5425rem;

    & .item-img {
      width: 100%;
    }
  }

  &-info {
    margin: .1rem;
    padding: 0;
    & .item-title {
      font-size: .28rem;
      line-height: .54rem;
      @include ellipsis();
    }

     & .item-desc {
       font-size: 12px;
       line-height: .4rem;
      //  color: $desc-color;
       @include multiline-ellipsis($num: 2);
     }
  }
}
</style>
