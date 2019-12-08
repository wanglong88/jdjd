<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="hot-sale-o"></van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/shooping">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/user">未登录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "XXX",
  data() {
    return {
      active: 0
    };
  },
  components: {}
};
</script>
<style lang="less">
</style>