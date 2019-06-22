<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- 显示当前路由对应的内容 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
