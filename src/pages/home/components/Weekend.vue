<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          imgUrl: 'https://imgs.qunarzz.com/wugc/p102/201301/13/20805c2d8250fd1b93835fbb.jpg_434x216_3b336d12.jpg',
          title: '大连圣亚海洋圣地',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/wugc/p102/201301/13/20805c2d8250fd1b93835fbb.jpg_434x216_3b336d12.jpg',
          title: '大连圣亚海洋圣地',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/wugc/p102/201301/13/20805c2d8250fd1b93835fbb.jpg_434x216_3b336d12.jpg',
          title: '大连圣亚海洋圣地',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 49.8%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
