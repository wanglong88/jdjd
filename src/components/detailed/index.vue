<template>
  <div class="boss">
    <div class="header">
      <div class="jianBox">
        <van-icon name="arrow-left" size="30px" class="jiantou" />
      </div>
      <div class="dianbox">
        <van-icon name="weapp-nav" size="30px" class="dianBox" />
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
      <van-swipe :autoplay="3000" indicator-color="blue" :width="375" :height="375">
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/90837/9/5517/104281/5dedf5ecE15944774/fe09bce4fe307192.jpg!q80.dpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/97521/30/3177/287868/5ddb831aE966eeca7/2485ada36946dace.jpg!q70.dpg.webp"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/51455/22/15118/393685/5dc0f2a2E5b860503/20c282bca282f9ff.jpg!q70.dpg.webp"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/74828/21/14581/73580/5dc0f2a2E1239add4/18a16afd7ced0b7e.jpg!q70.dpg.webp"
            alt
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="jieshao">
      <div class="jiage">
        <div class="yang">￥</div>
        {{price1}}.
        <div class="xiaozi">{{price2}}</div>
      </div>
      <div class="pricedown">
        <van-icon name="gold-coin-o" size="5.5vw" color="rgb(139, 123, 123)" />
        <div class="downtext">降价提醒</div>
      </div>
      <div class="shoucang">
        <van-icon name="star-o" size="5.5vw" color="rgb(139, 123, 123)" />
        <div class="downtext">收藏</div>
      </div>
      <div class="xinxi">{{dk}}</div>
    </div>
    <van-cell class="youhui">
      <div class="youhuitext">优惠</div>
      <van-icon
        slot="right-icon"
        name="ellipsis"
        style="line-height: inherit;"
        size="7vw"
        color="rgb(139, 123, 123)"
      />
      <div class="haveyou">
        <van-row type="flex" class="gongju1" justify="space-around">
          <van-col span="6" class="gongjuson">满减优惠</van-col>
          <van-col span="6" class="gongjuson">一只三元</van-col>
          <van-col span="6" class="gongjuson">3只十元</van-col>
        </van-row>
      </div>
    </van-cell>
    <div class="yidatuo">
      <van-cell size="large" class="yidatuo1">
        <div class="youhuitext1">已选</div>
        <div class="baozheng">本商品支持保障服务，点击可选服务</div>
        <van-icon
          slot="right-icon"
          name="ellipsis"
          style="line-height: inherit;"
          size="7vw"
          color="rgb(139, 123, 123)"
        />
      </van-cell>
      <van-cell size="large" class="yidatuo2">
        <div class="youhuitext1">送至</div>

        <van-icon
          slot="right-icon"
          name="ellipsis"
          style="line-height: inherit;"
          size="7vw"
          color="rgb(139, 123, 123)"
        />
      </van-cell>
      <van-cell size="large">
        <div class="youhuitext1">优惠</div>
        <van-icon
          slot="right-icon"
          name="ellipsis"
          style="line-height: inherit;"
          size="7vw"
          color="rgb(139, 123, 123)"
        />
      </van-cell>
    </div>
    <sku class="skubox"></sku>
    <van-area :area-list="areaList" class="chengshi" />
  </div>
</template>

<script>
import sku from "./sku";
export default {
  data() {
    return {
      tuid0: true,
      tuid1: false,
      tuid2: false,
      tuid3: false,
      price: 198.9,
      price1: "",
      price2: "",
      dk:
        "国产东方Project 幽幽子芙兰朵露 蕾米莉亚神枪 八云紫紫妈手办模型 红魔传说大小姐-22cm 做工精美，不要错过~"
    };
  },
  created() {
    this.xiaoshu();
  },
  methods: {
    //标签点击事件
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
    },
    //价格小数点前后处理
    xiaoshu() {
      let uio = Math.floor(this.price);
      this.price1 = uio;
      this.price2 = (this.price - this.price1).toFixed(2) * 100;
      /* console.log(this.price1);
        console.log(this.price2) */
    }
  },
  components: {
    sku
  }
};
</script>

<style lang="less" scoped>
.boss {
  background-color: #eee;
  height: 1000vh;
  width: 100%;
  z-index: -999;
  .header {
    position: absolute;
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    height: 13vw;
    z-index: 5;
    .dianbox {
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
  .lunBox {
    position: absolute;
    margin-top: 0;
    height: 100vw;
    width: 100%;
    img {
      height: 375px;
      width: 375px;
    }
  }
  .jieshao {
    position: absolute;
    margin-top: 100vw;
    height: 36vw;
    width: 100%;
    background-color: white;
    .jiage {
      position: absolute;
      margin-left: 4vw;
      margin-top: 5vw;
      height: 7vw;
      font-size: 7vw;
      width: 21vw;
      text-align: left;
      color: red;
      font-weight: 500;
      .xiaozi {
        position: absolute;
        margin-left: 15vw;
        margin-top: -5.7vw;
        font-size: 4vw;
      }
      .yang {
        position: absolute;
        margin-left: -2vw;
        margin-top: 2.1vw;
        font-size: 4vw;
      }
    }
    .pricedown {
      position: absolute;
      height: 10vw;
      width: 15vw;
      margin-top: 2vw;
      margin-left: 75vw;
      display: table-cell;
      vertical-align: bottom;
      .downtext {
        font-size: 1.5vw;
        color: rgb(139, 123, 123);
      }
    }
    .shoucang {
      position: absolute;
      height: 10vw;
      width: 10vw;
      margin-top: 2vw;
      margin-left: 90vw;
      display: table-cell;
      vertical-align: bottom;
      .downtext {
        font-size: 1.5vw;
        color: rgb(139, 123, 123);
      }
    }
    .xinxi {
      position: absolute;
      height: 20vw;
      width: 95vw;
      margin-top: 15vw;
      margin-left: 2vw;
      color: #333;
      font-size: 4.3vw;
      font-weight: 600;
      line-height: 6vw;
      text-align: left;
    }
  }
  .youhui {
    position: absolute;
    margin-top: 139vw;
    .youhuitext {
      font-size: 3.5vw;
      color: rgb(139, 123, 123);
    }
    .haveyou {
      position: absolute;
      margin-top: -6.5vw;
      margin-left: 10vw;
      height: 8vw;
      width: 70vw;
      color: red;
      font-size: 3.5vw;
      .gongju1 {
        .gongjuson {
          border: 1px solid red;
          height: 5vw;
          text-align: center;
          line-height: 5vw;
          border-radius: 3vw;
        }
      }
    }
  }
  .yidatuo {
    position: absolute;
    width: 100vw;
    height: 64vw;
    margin-top: 153vw;
    background-color: white;
    .yidatuo1 {
      .youhuitext1 {
        font-size: 3vw;
        color: rgb(139, 123, 123);
      }
      .baozheng {
        margin-left: 20vw;
        margin-top: -3vw;
        font-size: 3vw;
      }
    }
    .yidatuo2{
      .youhuitext1 {
        font-size: 3vw;
        color: rgb(139, 123, 123);
      }
    }
  }
  .skubox {
    position: absolute;
    margin-top: 156vw;
    height: 20vw;
    width: 100vw;
    font-size: 4vw;
  }
  .chengshi{
    position: absolute;
    margin-top: 250vw;
    height: 50vw;
    width: 100vw;
  }
}
</style>