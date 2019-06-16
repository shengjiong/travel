<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '01',
      //     imgUrl: 'https://imgs.qunarzz.com/p/tts9/1904/e8/d1bfb0c5c87b0b02.jpg_160x160_22608049.jpg',
      //     title: '大连圣亚海洋圣地',
      //     desc: '浪漫大连首站，浪漫的海洋主题乐园'
      //   },
      //   {
      //     id: '001',
      //     imgUrl: 'https://imgs.qunarzz.com/p/tts9/1904/e8/d1bfb0c5c87b0b02.jpg_160x160_22608049.jpg',
      //     title: '大连圣亚海洋圣地',
      //     desc: '浪漫大连首站，浪漫的海洋主题乐园'
      //   },
      //   {
      //     id: '0001',
      //     imgUrl: 'https://imgs.qunarzz.com/p/tts9/1904/e8/d1bfb0c5c87b0b02.jpg_160x160_22608049.jpg',
      //     title: '大连圣亚海洋圣地',
      //     desc: '浪漫大连首站，浪漫的海洋主题乐园'
      //   }
      // ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
