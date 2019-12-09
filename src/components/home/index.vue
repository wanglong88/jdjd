<template>
  <div>
    <header>
      <span class="ico">
        <img src="../../assets/下载.png" />
      </span>
      <van-search
        placeholder="请输入搜索关键词"
        shape="round"
        @search="onSearch"
        style="box-sizing:boder-box;
        padding-right:50px;
        "
        background="none"
      ></van-search>
      <span class="icon">
        <img src="../../assets/man.png" />
      </span>
    </header>
    <main>
      <div class="Tb cl">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in images" :key="index">
            <img :src="item" width="100%" height="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
     
    </main>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      images: [
        require("../../assets/download.jpg"),
        require("../../assets/download.jpg"),
        require("../../assets/download.jpg")
      ]
    };
  },
  methods: {
    onSearch() {}
  },
  components: {}
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 14vw;
  background: #d48b18;
  float: left;
}
.ico {
  margin: 14px 0 0 15px;
  width: 20px;
  height: 18px;
  display: block;
  z-index: 22;
  float: left;
  > img {
    width: 100%;
  }
}
.icon {
  margin: 14px 15px 0 0;
  width: 20px;
  height: 18px;
  display: block;
  z-index: 22;
  position: absolute;
  right: 0;
  top: 0;
  > img {
    width: 100%;
  }
}
.Tb {
  width: 100%;
  height: 50vw;
  background: #d48b18;
  border-radius: 0 0 60px 60px;
}
.van-swipe {
  width: 92vw;
  height: 35vw;
  margin: auto;
  background: red;
  border-radius: 3vw;
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>