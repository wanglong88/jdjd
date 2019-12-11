<template>
  <div>
    <router-view></router-view>
    <van-tabbar >
      <van-tabbar-item icon="home-o" to="/home"></van-tabbar-item>
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
  data() {
    return {
      data:''
    };
  },
  created(){
    
  },
  methods:{
    
  }
}
</script>

<style lang="less">
</style>