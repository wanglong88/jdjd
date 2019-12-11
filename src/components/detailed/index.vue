<template>
  <div class="boss">
  <div class="header">
    <div class="jianBox">
      <van-icon name="arrow-left" size="30px" class="jiantou" />
    </div>
    <div class="dianbox">
      <van-icon name="weapp-nav" size="30px" class="dianBox"/>
    </div>
    <div class="biaoqian">
      <div class="onesaild" @click="onchange1">
        <van-icon name="location" size="14" color="red" class="tu1" v-show="tuid0" />商品
      </div>
      <div class="twosaild" @click="onchange2">
        <van-icon name="location" size="14" color="red" class="tu2" v-show="tuid1" />评价
      </div>
      <div class="threesaild" @click="onchange3">
        <van-icon name="location" size="14" color="red" class="tu3" v-show="tuid2" />详情
      </div>
      <div class="foursaild" @click="onchange4">
        <van-icon name="location" size="14" color="red" class="tu4" v-show="tuid3" />推荐
      </div>
    </div>
    
  </div>
  <div class="lunBox">
  <van-swipe :autoplay="3000" indicator-color="blue" :width=375 :height=375 :loop='true'>
  <van-swipe-item><img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/90837/9/5517/104281/5dedf5ecE15944774/fe09bce4fe307192.jpg!q80.dpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/97521/30/3177/287868/5ddb831aE966eeca7/2485ada36946dace.jpg!q70.dpg.webp" alt=""></van-swipe-item>
  <van-swipe-item><img src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/51455/22/15118/393685/5dc0f2a2E5b860503/20c282bca282f9ff.jpg!q70.dpg.webp" alt=""></van-swipe-item>
  <van-swipe-item><img src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/74828/21/14581/73580/5dc0f2a2E1239add4/18a16afd7ced0b7e.jpg!q70.dpg.webp" alt=""></van-swipe-item>
  </van-swipe>
  </div>
  <div class="jieshao">
      <div class="jiage">{{price}}</div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      tuid0: true,
      tuid1: false,
      tuid2: false,
      tuid3: false,
      price:198,
    };
  },
  methods: {
    onchange1() {
      this.tuid0 = true;
      this.tuid0 = true
        ? (this.tuid1 = this.tuid2 = this.tuid3 = false)
        : (this.tuid0 = true);
      this.tuid0 = true;
    },
    onchange2() {
      this.tuid1 = true;
      this.tuid1 = true
        ? (this.tuid0 = this.tuid2 = this.tuid3 = false)
        : (this.tuid1 = true);
      this.tuid1 = true;
    },
    onchange3() {
      this.tuid2 = true;
      this.tuid2 = true
        ? (this.tuid0 = this.tuid1 = this.tuid3 = false)
        : (this.tuid2 = true);
      this.tuid2 = true;
    },
    onchange4() {
      this.tuid3 = true;
      this.tuid3 = true
        ? (this.tuid0 = this.tuid2 = this.tuid1 = false)
        : (this.tuid3 = true);
      this.tuid3 = true;
    }
  }
};
</script>

<style lang="less" scoped>
.boss{
    background-color: #eee;
    height:100vh;
    width:100%;
    z-index: -999 ;
.header {
  position: absolute;
  margin-left: 0;
  margin-top: 0;
  width: 100%;
  height: 13vw;
  z-index: 5;
  .dianbox{
      position: absolute;
      margin-left: 90vw;
      margin-top: 2vw;
      height: 10vw;
      width: 10vw;

  }
  .jianBox {
    position: absolute;
    margin-left: 2 vw;
    margin-top: 2.5vw;
    height: 10vw;
    width: 10vw;
  }
  .biaoqian {
    position: absolute;
    margin-left: 20vw;
    margin-top: 0;
    height: 13vw;
    width: 60vw;
    .onesaild {
      position: absolute;
      margin-left: 0vw;
      height: 13vw;
      width: 15vw;
      text-align: right;
      line-height: 13vw;
      font-size: 4vw;
    }
    .twosaild {
      position: absolute;
      margin-left: 15vw;
      height: 13vw;
      width: 15vw;
      text-align: right;
      line-height: 13vw;
      font-size: 4vw;
    }
    .threesaild {
      position: absolute;
      margin-left: 30vw;
      height: 13vw;
      width: 15vw;
      text-align: right;
      line-height: 13vw;
      font-size: 4vw;
    }
    .foursaild {
      position: absolute;
      margin-left: 45vw;
      height: 13vw;
      width: 15vw;
      text-align: right;
      line-height: 13vw;
      font-size: 4vw;
    }
  }
}
.lunBox{
    position: absolute;
    margin-top: 0;
    height: 100vw;
    width: 100%;
    img{
        height: 375px;
        width: 375px;
    }
}
.jieshao{
    position: absolute;
    margin-top: 375px;
    height: 135px;
    width: 100%;
}
}
</style>