<template>
  <div>
    <div class="two lt">
      <van-image round width="6rem" height="6rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <!-- <van-image round width="6rem" color='#ccc' height="6rem" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2611319105,3497875243&fm=26&gp=0.jpg" /> -->
      <span @click="btn">
        登录 / 注册
        <a href="javascript:;">
          <van-icon name="arrow" />
        </a>
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
    }
  },
  created(){
     
     
  },
  components: {}
};
</script>
<style lang="less">
</style>