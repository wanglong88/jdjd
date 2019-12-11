<template>
  <div>
    <header class="headerBox cl">
      <!-- <img src="../assets/背景.jpg" alt /> -->
      <span class="icoO lt" @click="$router.go(-1)">
        <van-icon name="arrow-left" size="30px" />
      </span>
      <h4>我的订单</h4>
      <div class="icoT">
        <van-icon name="shop-collect-o" class="rt" size="30px" />
        <van-icon name="search" class="rt" size="30px" />
        <van-icon name="qr" class="rt" size="30px" />
      </div>
    </header>
    <main class="mainBox">
      <!-- <ul class="per">
        <li>
          <router-link to="/user/all">全部</router-link>
        </li>
        <li>
          <router-link to="/user/waitpay">待付款</router-link>
        </li>
        <li>
          <router-link to="/user/waitreceive">待收货</router-link>
        </li>
        <li>
          <router-link to="/user/finished">已完成</router-link>
        </li>
        <li>
          <router-link to="/user/cancel">已取消</router-link>
        </li>
      </ul>-->
      <van-tabs animated class="vant" :swipe-threshold="6">
        <van-tab v-for="(item ,index) in ary" :title="item.name" size="40px" :key="index">
          <div class="goodsBox">
            <span class="cl">
              <p class="lt p1">
                {{item.title}}
                <van-icon name="arrow" />
              </p>
              <p class="rt">
                <van-icon name="delete" size="30px" />
              </p>
            </span>
            <div class="good">
              <img :src="item.img" alt />
              <p class="pp1">{{item.desc}}</p>
              <div class="pp2">
                <p>
                  <van-icon name="refund-o" />
                </p>
                <p>{{item.pric}}</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ary: [
        {
          name: "全部",
          title: "达利园京东旗舰店",
          img: require("../assets/背景.jpg"),
          desc: "三星（SAMSUNG）Active2伯爵黑44mm钢版 智能手表",
          pric: "￥55.50"
        },
        {
          name: "待付款",
          title: " 达利园京东旗舰店",
          img: require("../assets/背景.jpg"),
          desc: "三星（SAMSUNG）Active2伯爵黑44mm钢版 智能手表",
          pric: "￥55.50"
        },
        {
          name: "待收货",
          title: " 达利园京东旗舰店",
          img: require("../assets/背景.jpg"),
          desc: "三星（SAMSUNG）Active2伯爵黑44mm钢版 智能手表",
          pric: "￥55.50"
        },
        {
          name: "已完成",
          title: " 达利园京东旗舰店",
          img: require("../assets/背景.jpg"),
          desc: "三星（SAMSUNG）Active2伯爵黑44mm钢版 智能手表",
          pric: "￥55.50"
        },
        {
          name: "已取消",
          title: " 达利园京东旗舰店",
          img: require("../assets/背景.jpg"),
          desc: "三星（SAMSUNG）Active2伯爵黑44mm钢版 智能手表",
          pric: "￥55.50"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.headerBox {
  background: url("../assets/1.jpg");
  background-size: cover;
  .icoO {
    text-align: center;
    padding-top: 55px;
  }
  h4 {
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    padding-top: 45px;
    margin-left: 10px;
  }
  .icoT {
    width: 367px;
    height: 30px;
    margin: -44px 0 2px 0;
  }
}
.mainBox {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 20px 0;
  .per {
    display: flex;
    justify-content: space-between;
    li {
      margin: 10px 10px;
      font-size: 17px;
    }
  }
  .vant {
    width: 100%;
    height: 33vh;
    font-size: 20px;
  }
}
.goodsBox {
  overflow: hidden;
   background: #ccc
   ;
  .p1 {
    font-size: 20px;
    color: black;
  }

  .good {
    display: flex;
    justify-content: space-between;
   
    img {
      width: 80px;
      height: 90px;
      // padding: 5px;
      margin: 5px 5px;
    }
    .pp1 {
      // margin-top: 50% 50%;
      margin: 20px 5px 0 5px;
      height: 14vw;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      word-break: break-all;
    }
    .pp2 {
      margin: 40px 20px;
      float: right;
    }
  }
}
</style>