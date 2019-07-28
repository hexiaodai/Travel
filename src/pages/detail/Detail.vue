<template>
  <div class="">
    <detail-banner />
    <detail-header />
    <detail-list :list="list" />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票 - XXX连锁店销售',
                  children: [
                    {
                      title: '成人三馆联票 - XXX连锁店销售'
                    }
                  ]
                }
              ]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生三馆联票'
            }
          ]
        }, {
          title: '儿童票'
        }
      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>
