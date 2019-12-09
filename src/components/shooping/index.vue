<template>
  <div class="shopping">
    <div class="top">
      <van-icon name="arrow-left" class="lt" />
      <span>购物车</span>
      <van-icon name="weapp-nav" class="rt" />
    </div>
    <div class="edit">
      <div class="lt">
        <van-icon name="location-o" />
        <span>北京市朝阳区</span>
      </div>
      <span class="rt">编辑商品</span>
    </div>
    <div>
      登录后可同步账户购物车中的商品
      <van-button round type="info" size="small" color="red">登录</van-button>
    </div>
    <!-- 购物车里面的物品 -->
    <div class="cart" v-show="0">
      <van-checkbox-group v-model="result" v-for="item in cartList" :key="item.id">
        <van-checkbox :name="item.p" @click="checkAll(item)">{{item.p}}</van-checkbox>
        <div v-for="i in item.data" :key="i.id">
          <van-checkbox :name="i.name" class="check" checked-color="#07c160"></van-checkbox>
          <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.thumb">
            <div slot="tags">
              <span class="choose">{{i.style}},{{i.modle}}</span>
            </div>
            <div slot="footer">
              <van-stepper v-model="i.num" />
              <van-button type="primary" size="mini" color="#999" plain>删除</van-button>
            </div>
          </van-card>
        </div>
      </van-checkbox-group>
    </div>
    <div class="empty" v-show="1">
      <div>
        <img
          src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
          alt
        />
      </div>登录后可同步购物车中商品
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="3050" button-text="去结算">
      <van-checkbox v-model="checked" checked-color="red" bind-group>全选</van-checkbox>
    </van-submit-bar>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
    <sku></sku>
  </div>
</template>
<script>
import sku from "./sku";
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      show: false,
      cartList: [
        {
          p: "京东自营",
          data: [
            {
              id: 1,
              num: 2,
              price: 330,
              desc: "描述信息",
              title:
                "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              name: "a",
              style: "深蓝色",
              modle: "M"
            },
            {
              id: 3,
              num: 2,
              price: 330,
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              name: "b",
              style: "深蓝色",
              modle: "M"
            }
          ]
        },
        {
          p: "飞利浦专卖店",
          data: [
            {
              id: 2,
              num: 3,
              price: 330,
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              name: "c",
              style: "深蓝色",
              modle: "M"
            }
          ]
        }
      ],
      checked: false,
      result: []
    };
  },
  computed: {},
  components: {
    sku
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    checkAll(ary) {
      this.result.length == 0
        ? ary.data.forEach(i => this.result.push(i.name))
        : (this.result = []);
    }
  }
};
</script>
<style lang="less" scoped>
.shopping {
  box-sizing: border-box;
  padding: 5vw;
  font-size: 4vw;
  > div {
    height: 11vw;
    line-height: 11vw;
    border-bottom: 1px solid #eee;
  }
  .check {
    position: relative;
    left: 0vw;
    top: 20vw;
    z-index: 30;
    width: 5vw;
  }
  .choose {
    color: rgb(112, 106, 106);
  }
  .empty {
    width: 100vw;
    margin-left: -5vw;
    img {
      margin-top: 10vw;
      width: 25vw;
    }
    height: 60vw;
    background: #eee;
  }
}
</style>
vb