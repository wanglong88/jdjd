<template>
  <div>
    <div class="two lt">
      <van-image round width="6rem" height="6rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <!-- <van-image round width="6rem" color='#ccc' height="6rem" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2611319105,3497875243&fm=26&gp=0.jpg" /> -->
      <span @click="btn" class="s1">
        登录 /
        <a href="javascript:;"></a>
      </span>
      <span @click="btn2" class="s2">
        注册
        <a href="javascript:;"></a>
        <van-icon name="arrow" />
      </span>
      
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "yiDl",
  data() {
    return {};
  },
  methods: {
    btn() {
      this.$router.push("/login");
    },
    btn2() {
      this.$router.push("/ZC");
    }
  },
  created() {},
  components: {}
};
</script>
<style lang="less" scoped>
.two {
  width: 100%;
  height: 100%;
  margin: 5px 0 0 -125px;
  position: relative;
  .s1 {
    font-size: 17px;
    position: absolute;
    height: 50px;
    margin: 25px 10px 0 10px;
    line-height: 50px;
  }
  .s2 {
    font-size: 17px;
    position: absolute;
    height: 50px;
    margin: 25px 10px 0 60px;
    line-height: 50px;
  }
}
</style>