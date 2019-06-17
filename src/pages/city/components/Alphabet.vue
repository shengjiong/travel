<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="(item,key) of letters"
        :key="key"
        :ref='item'
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      // cities对象转换成字符串数组
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
        console.log(letters)
      }
      return letters
    }
  },
  methods: {
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.startY
          console.log(startY)
          const touchY = e.touches[0].clientY - 79
          console.log(touchY)
          const index = Math.floor((touchY - startY) / 20)
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    handleLetterClick (e) {
      console.log(e)
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
