<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <i class="item-title-icon"></i>
        <span>{{item.title}}</span>
      </div>
      <!-- 递归组件 -->
      <!-- 如果存在item.childern，则将 item.children当做参数传递给本身组件 -->
      <div v-if="item.children" class="item-children">
        <!-- 调用 list组件，并且传递参数 -->
        <list :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List', // name: 一般用于递归组件调用
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.item-title {
  line-height: .8rem;
  font-size: $font-size-title;
  padding: 0 .2rem;
  @include ellipsis();

  &-icon {
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
}

.item-children {
  margin-left: .5rem;
}
</style>
