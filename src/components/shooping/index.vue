<template>
  <div class="shopping">
    <div class="top">
      <van-icon name="arrow-left" class="lt back" @click="go1" />
      <span>购物车</span>
      <van-icon name="weapp-nav" class="rt" />
    </div>
    <div class="edit">
      <div class="lt">
        <van-icon name="location-o" />
        <picker class="city"></picker>
      </div>
      <span class="rt" @click="editFn">编辑商品</span>
    </div>
    <div>
      登录后可同步账户购物车中的商品
      <van-button round type="info" size="small" color="red">登录</van-button>
    </div>
    <!-- 没有物品时 -->
    <div class="empty" v-show="0">
      <div>
        <img
          src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
          alt
        />
      </div>登录后可同步购物车中商品
    </div>
    <!-- 购物车有 -->
    <div class="cart" v-show="1">
      <cart
        v-for="item in cartList"
        :key="item.id"
        :title="item.p"
        :data="item.data"
        :ary="cartList"
      ></cart>
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="Total" button-text="去结算" v-show="Edi">
      <van-checkbox v-model="checked" checked-color="red">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar button-text="删除" v-show="!Edi" @submit="delAll">
      <van-checkbox v-model="checked" checked-color="red" style="position: absolute;left:0vw">全选</van-checkbox>
    </van-submit-bar>
    <div class="want" style="height:40vw;">可能你x</div>
  </div>
</template>
<script>
// @ is an alias to /src
import cart from "./cart";
import picker from "./picker";
export default {
  name: "XXX",
  data() {
    return {
      cartList: [
        {
          p: "京东自营",
          isA: true,
          data: [
            {
              id: 1,
              num: 2,
              price: 33000 / 100,
              desc: "描述信息",
              title:
                "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              name: "a",
              color: "深蓝色",
              modle: "M",
              isT: true
            },
            {
              id: 2,
              num: 2,
              price: 33000 / 100,
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              name: "b",
              color: "深蓝色",
              modle: "M",
              isT: false
            }
          ]
        },
        {
          p: "飞利浦专卖店",
          isA: true,
          data: [
            {
              id: 3,
              num: 3,
              price: 33000 / 100,
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              name: "c",
              color: "深蓝色",
              modle: "M",
              isT: true
            }
          ]
        }
      ],
      Edi: true
    };
  },
  computed: {
    // 全选按钮
    checked: {
      get() {
        return this.cartList.every(item => item.data.every(item => item.isT));
      },
      set(val) {
        this.cartList.forEach(item =>
          item.data.forEach(item => (item.isT = val))
        );
      }
    },
    // 计算总价
    Total: {
      get() {
        return (
          this.cartList.reduce((prev1, next1) => {
            return (
              prev1 +
              next1.data.reduce((prev, next) => {
                return prev + (next.isT ? next.num * next.price : 0);
              }, 0)
            );
          }, 0) * 100
        );
      },
      set(val) {
        this.cartList.forEach(item =>
          item.data.forEach(item => (item.isT = val))
        );
      }
    }
  },
  components: {
    cart,
    picker
  },
  methods: {
    go1() {
      this.$router.go(-1);
    },
    editFn() {
      this.Edi = !this.Edi;
    },
    delAll() {
      this.$dialog
        .confirm({
          message: "确定删除此商品?"
        })
        .then(() => {
          // on confirm
          this.cartList = [];
        })
        .catch(() => {
          // on cancel
        });
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
    height: 10vw;
    line-height: 10vw;
    border-bottom: 1px solid #eee;
  }
  .edit {
    text-align: left;
    i {
      z-index: 30;
    }
    .city {
      position: absolute;
      top: 15vw;
      left: -14vw;
      overflow: hidden;
    }
  }
  .empty {
    width: 100vw;
    height: 60vw;
    background: #eee;
    margin-left: -5vw;
    img {
      margin-top: 10vw;
      width: 25vw;
    }
  }
  // .back{

  // }
}
</style>