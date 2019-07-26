<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
