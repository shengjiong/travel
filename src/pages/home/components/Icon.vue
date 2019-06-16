<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
          <div class="icon">
            <div class="icon-img">
                <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" class="icon-img-content">
            </div>
            <p class="icon-desc">热门景点</p>
          </div>
      </swiper-slide>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      // iconList: [
      //   {
      //     id: '01',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '02',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '03',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '04',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '05',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '06',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '07',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '08',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '09',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   },
      //   {
      //     id: '10',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //     desc: '热门景点'
      //   }
      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  // background: green;
.icons
  margin-top: .1rem
  .icon
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    // background: red;
    .icon-img
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      // background: blue;

      .icon-img-content
        display: block;
        margin: 0 auto;
        height: 100%;

    .icon-desc
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
</style>
