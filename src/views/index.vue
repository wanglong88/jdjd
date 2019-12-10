<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home">
        <img src="../assets/logo/download.png" class="logos" alt />
      </van-tabbar-item>
      <van-tabbar-item to="/classify">
        <img src="../assets/logo/2.png" class="logos" alt />
      </van-tabbar-item>
      <van-tabbar-item>
        
        <a href="https://wq.jd.com/webportal/event/27358?ptag=138097.1.19&sceneval=2">
          <img src="../assets/logo/3.gif" class="logos" alt />
        </a>
      </van-tabbar-item>
      <van-tabbar-item to="/shooping">
        <img src="../assets/logo/4.png" class="logos" alt />
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        <img src="../assets/logo/5.png" class="logos" alt />
      </van-tabbar-item>
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
<style lang="less" scoped>
.logos {
  width: 16vw;
}
</style>