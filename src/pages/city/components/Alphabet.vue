<template>
  <ul class="list">
    <li class="item"
      v-for="letter of letters"
      :key="letter"
      :ref="letter"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
    {{letter}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false, // 手指是否开始触摸序号区域
      startY: 0,
      timer: null
    }
  },
  computed: {
    // 存放字母(序号) 列表
    letters () {
      const letters = []
      for (let i in this.cities) { // cities key值为序号(字母)
        letters.push(i)
      }
      return letters
    }
  },
  // 页面被更新渲染后，执行updated()
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // (字母表首字母)当前位置与当前父元素 顶部之间的距离(差值)
  },
  methods: {
    // 将数据传递至父组件
    handleLetterClick (e) { // e：事件对象
      const number = e.target.innerText // 当前点击的序号
      this.$emit('change', number) // 向父组件派发一个事件，传递选中的序号
    },
    // 手指开始 触摸序号区域
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 手指滑动区域 与屏幕顶部区域之间的距离(差值) 计算当前的序号
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 延时执行 touchmove()事件，提高性能
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79.2 // 触摸位置与当前父元素 顶部之间的距离(差值)
          let index = Math.floor((touchY - this.startY) / 20) // 计算手指滑动区域序号(字母)的索引，20px/序号(字母)
          console.log(index)
          if (index < 0 || index > this.letters.length) {
            index = 0
            console.log('....')
          }
          this.$emit('change', this.letters[index]) // 向父组件派发一个事件，传递手指滑动选中的序号
        }, 16)
      }
    },
    // 手指结束 序号区域滑动
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
