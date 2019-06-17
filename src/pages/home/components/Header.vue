<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  // props: {
  //   city: String
  // },
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
    // 这时候的city相当于this.$store.state.city
  }
}
</script>

<style lang='stylus' scoped>
// 1rem = html font-size = 50px
  @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin: .12rem 0 0 .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color:#ccc
        .header-right
            mini-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: white
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
