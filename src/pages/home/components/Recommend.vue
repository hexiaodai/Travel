<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '北京欢乐谷',
        desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地！时尚、动感、欢乐、梦幻的北京欢乐谷欢迎你！',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'
      }, {
        id: '0002',
        title: '古北水镇',
        desc: '观赏制酒流程工艺，醇厚浓香烧酒，体验制作酒糟菜肴。',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg'
      }, {
        id: '0003',
        title: '故宫',
        desc: '观赏制酒流程工艺，醇厚浓香烧酒，体验制作酒糟菜肴。',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg'
      }, {
        id: '0004',
        title: '八达岭长城',
        desc: '观赏制酒流程工艺，醇厚浓香烧酒，体验制作酒糟菜肴。',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg'
      }, {
        id: '0005',
        title: '京东石林峡',
        desc: '观赏制酒流程工艺，醇厚浓香烧酒，体验制作酒糟菜肴。',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg'
      }, {
        id: '0006',
        title: '什刹海',
        desc: '观赏制酒流程工艺，醇厚浓香烧酒，体验制作酒糟菜肴。',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg'
      }, {
        id: '0007',
        title: '颐和园',
        desc: '观赏制酒流程工艺，醇厚浓香烧酒，体验制作酒糟菜肴。',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg'
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
      font-weight: bold;
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
       padding: .05rem .16rem;
       border-radius: .06rem;
       font-size: .24rem;
     }
  }
}
</style>
