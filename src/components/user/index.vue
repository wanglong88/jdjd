<template>
  <div>
    <header class="top">
      <div class="one cl">
        <p class="lt">设置</p>
        <div class="lt">
          <van-icon name="chat-o" class="vantI" size="25px" />
        </div>
      </div>

      <wd v-if="!$store.state.flag"></wd>
      <yd v-else></yd>
      
      <div class="three">
        <p>商品关注</p>
        <p>店铺关注</p>
        <p>喜欢的内容</p>
        <p>浏览记录</p>
      </div>
    </header>
    <div class="boxB">
      <div class="boxOne">
        <span>
          <van-icon name="balance-pay" size="28px" />
          <p>待付款</p>
        </span>
        <span>
          <van-icon name="gift-o" size="28px" />
          <p>待收货</p>
        </span>
        <span>
          <van-icon name="comment-o" size="28px" />
          <p>待评价</p>
        </span>
        <span>
          <van-icon name="gold-coin-o" size="28px" />
          <p>退换 /售后</p>
        </span>
        <!-- <div style="float:left;width: 1px;height: 66px; background: #ccc;"></div> -->
        <span>
          <van-icon name="description" size="28px" color="red" />
          <p>我的订单</p>
        </span>
      </div>
      <div class="boxTwo">
        <span>
          <van-icon name="smile-o" size="28px" />
          <p>京豆</p>
        </span>
        <span>
          <van-icon name="vip-card-o" size="28px" />
          <p>优惠券</p>
        </span>
        <span>
          <van-icon name="comment-circle-o" size="28px" />
          <p>白条</p>
        </span>
        <span>
          <van-icon name="gift-card-o" size="28px" />
          <p>礼品卡</p>
        </span>
        <!-- <div style="float:left;width: 1px;height: 66px; background: #ccc;"></div> -->
        <span>
          <van-icon name="description" size="28px" color="red" />
          <p>我的钱包</p>
        </span>
      </div>
      <div class="boxThree">
        <span class="spBox cl">
          <p class="lt">游戏与互动</p>
          <h4 class="rt">
            查看更多
            <van-icon name="arrow" />
          </h4>
        </span>
        <div class="sBox">
          <span>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <h4>全民领现金</h4>
            <p>天天可提现</p>
          </span>
          <span>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <h4>京东农场</h4>
            <p>0元领水果</p>
          </span>
          <span>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <h4>赚2.50元</h4>
            <p>万元奖金提现</p>
          </span>
          <span>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <h4>种豆得豆</h4>
            <p>瓜分12亿京豆</p>
          </span>
        </div>
      </div>
      <div class="fourBox">
        <span class="fsBox cl">
          <p class="tolP lt">工具与服务</p>
          <h4 class="rt">
            查看更多
            <van-icon name="arrow" />
          </h4>
        </span>
        <div class="tilBox">
          <span>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <h4>客户服务</h4>
          </span>
          <span>
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <h4>主题换肤</h4>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import wd from './wDl'
import yd from './yiDl'
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {
    wd,yd
  },
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
.top {
  background: url("../../assets/bj2.jpg");
  display: flex;
  flex-direction: column;
  .one {
    float: left;
    margin: 45px 10px 0px 250px;
    height: 100%;
    font-size: 20px;
    p {
      margin-right: 20px;
    }
  }
  .two {
    width: 100%;
    height: 100%;
    margin: 5px 0 0 -125px;
    position: relative;
    > span {
      font-size: 17px;
      position: absolute;
      height: 50px;
      margin: 25px 10px 0 10px;
      line-height: 50px;
    }
  }
  .three {
    display: flex;
    justify-content: space-around;
    margin: 15px;
    font-size: 16px;
  }
}
.boxB {
  // background: #eeeeee;
  .boxOne,
  .boxTwo {
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    margin: 20px 5px 0 0;
    border: 1px solid #ccc;
    box-shadow: -1px 0px 10px -3px;
    font-size: 16px;
    width: 100%;
    height: 10vh;
    line-height: 5vh;
    padding: 10px 0;
  }
  .boxThree {
    width: 100%;
    margin: 20px 4px 0 2px;
    border-top: 0.5px solid #cccccc;
    .spBox {
      height: 30px;
      line-height: 30px;
      display: block;
      border-bottom: 1px solid #ccc;
      > p {
        font-size: 16px;
        font-weight: 600;
      }
      > h4 {
        font-size: 13px;
        color: #ccc;
      }
    }
    .sBox {
      display: flex;
      justify-content: space-around;
      margin: 15px 5px 0px 5px;
      border-bottom: 1px solid #ccc;
      // height: 50px;
      // line-height:50px;
      > span p {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
  .fourBox {
      padding-bottom: 80px;
    border-top: 0.5px solid #cccccc;
    margin: 15px 5px 0 5px;
    .fsBox {
      display: block;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #cccc;
      .tolP {
        font-size: 16px;
        font-weight: 600;
      }
      h4 {
        color: #cccc;
      }
    }
    .tilBox {
      display: flex;
      justify-content: space-between;
      margin: 15px 220px 0 22px;
    }
  }
}
</style>