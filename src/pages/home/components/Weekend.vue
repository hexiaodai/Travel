<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array // 周末去哪儿数据
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.title {
  // margin-top: .2rem;
  line-height: .8rem;
  background-color: $title-bgc;
  font-weight: bold;
  text-indent: .2rem;
  font-size: $font-size-title;
}

.item {
  overflow: hidden;
  margin-bottom: .2rem;

  &-img-wrapper {
    overflow: hidden;
    height: 2.78175rem;

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
