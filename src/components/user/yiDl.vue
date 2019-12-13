<template>
  <div>
    <div class="two lt">
      <van-image
        round
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        v-if="!$store.state.flag"
      />
      <van-image round width="6rem" height="6rem" :src="img" v-else />
      <!-- <van-image round width="6rem" color='#ccc' height="6rem" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2611319105,3497875243&fm=26&gp=0.jpg" /> -->
      <span>
        {{U}}
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
  name: "XXX",
  data() {
    return {
      U: "",
      img: ""
    };
  },
  created() {
    this.U = this.$store.state.userName;
    let imgs = this.$store.state.img;
    let ss = imgs.find(item => {
      return item.username == this.U;
    });
    this.img = ss.img;
  },
  methods: {
    //  btn(){
    //      this.$router.push("/login");
    //  },
  },
  computed: {
    US() {
      return;
      // console.log(use);

      // this.U = use;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.two {
  width: 100%;
  height: 100%;
  margin: 5px 0 0 -125px;
  position: relative;
  span {
    font-size: 17px;
    position: absolute;
    height: 50px;
    margin: 25px 10px 0 10px;
    line-height: 50px;
  }
}
</style>