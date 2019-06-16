<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for='item of swiperList' :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: '01',
          imgUrl: 'https://img1.qunarzz.com/vc/b3/fe/15/1bf4756d8c13532a31accdf942.jpg_624x340x92.jpg'
        },
        {
          id: '02',
          imgUrl: 'https://img1.qunarzz.com/vc/b4/42/b5/9d970b0bed4b6b313e29465943.jpg_624x340x92.jpg'
        },
        {
          id: '03',
          imgUrl: 'https://img1.qunarzz.com/vc/7b/90/41/8812f267dd9a566cba97eca8b1.jpg_624x340x92.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
    // overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
      height: 2.3rem
</style>
