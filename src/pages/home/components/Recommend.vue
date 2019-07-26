<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <dir class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </dir>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array // 热销推荐数据
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.title {
  margin-top: .2rem;
  line-height: .8rem;
  background-color: $title-bgc;
  font-weight: bold;
  text-indent: .2rem;
  font-size: $font-size-title;
}

.item {
  overflow: hidden;
  height: 1.9rem;
  margin: .1rem 0;
  display: flex;

  &-img {
    width: 1.7rem;
    height: 1.7rem;
    margin: .1rem;
  }

  &-info {
    flex: 1;
    margin: .1rem;
    padding: 0;
    min-width: 0;

    & .item-title {
      font-size: $font-size-title;
      line-height: .54rem;
      @include ellipsis();
    }

     & .item-desc {
       line-height: .4rem;
       color: $desc-color;
       @include multiline-ellipsis($num: 2);
     }

     & .item-btn {
       color: $default-color;
       background-color: $details-btn-bgc;
       margin-top: .08rem;
       padding: .05rem .16rem;
       border-radius: .06rem;
       font-size: .24rem;
     }
  }
}
</style>
