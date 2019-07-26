<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.list {
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: .5rem;
  display: flex;
  @include flex-center(column);

  & .item {
    line-height: .4rem;
    color: $header-bgc;
  }
}
</style>
