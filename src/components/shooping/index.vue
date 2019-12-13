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
      <van-button round type="info" size="small" color="red" @click="login">登录</van-button>
    </div>
    <!-- 没有物品时 -->
    <div class="empty" v-if="cartN">
      <div>
        <img
          src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
          alt
        />
      </div>登录后可同步购物车中商品
    </div>
    <!-- 购物车有 -->
    <div class="cart">
      <cart
        v-for="item in cartList"
        :key="item.id"
        :title="item.p"
        :data="item.data"
        :ary="cartList"
        v-show="!cartN"
        @delAry="delAry"
      ></cart>
      <!-- 倒计时 -->
      <div class="timer cl">
        <div class="top lt">
          <span>京东秒杀</span>
          <small>14点场</small>
          <van-count-down :time="time" class="time" style="display: inline-block" />
          <div data-v-67f3a69c class="timer-bottom">
            <ul data-v-67f3a69c class="seckill-list">
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
              <li data-v-67f3a69c>
                <img
                  data-v-67f3a69c
                  src="//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg"
                  alt
                />
                <span data-v-67f3a69c class="seckill-new-price">￥273</span>
                <span data-v-67f3a69c class="seckill-original-price">￥288</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 可能你喜欢 -->
      <section class="want">
        <van-divider :style="{ color: 'red', borderColor: '#1989fa', padding: '0 16px' }">可能你还想要</van-divider>
        <span v-for="(item,index) in loveAry" :key="index">
          <van-row type="flex" justify="space-between">
            <van-col>
              <img :src="item.src" alt />
              <div class="info">
                <div class="rec_name">{{item.dic}}</div>
                <div class="price_info">
                  <div class="price lt">
                    ¥
                    <em>{{item.pirce}}</em>
                  </div>
                  <van-icon name="shopping-cart-o" class="rt" />
                </div>
              </div>
            </van-col>
            <van-col>
              <img :src="item.src" alt />
              <div class="info">
                <div class="rec_name">{{item.dic}}</div>
                <div class="price_info">
                  <div class="price lt">
                    ¥
                    <em>{{item.pirce}}</em>
                  </div>
                  <van-icon name="shopping-cart-o" class="rt" />
                </div>
              </div>
            </van-col>
          </van-row>
        </span>

        <!-- <ul class="flsPit_listAll">
            <li>
              <span class="textA">免息星球</span>
              <br />
              <span class="textB">白条免息购</span>
              <div>
                <img src="../../assets/ipd.jpg" />
              </div>
            </li>
            <li>
              <span class="textA">免息星球</span>
              <br />
              <span class="textB">白条免息购</span>
              <div>
                <img src="../../assets/ipd.jpg" />
              </div>
            </li>
            <li>
              <p class="textA">免息星球</p>
              <p class="textB">白条免息购</p>
              <img src="../../assets/ipd.jpg" />
            </li>
            <li>
              <p class="textA">免息星球</p>
              <p class="textB">白条免息购</p>
              <img src="../../assets/ipd.jpg" />
            </li>
            <li>
              <p class="textA">免息星球</p>
              <p class="textB">白条免息购</p>
              <img src="../../assets/ipd.jpg" />
            </li>
            <li>
              <p class="textA">免息星球</p>
              <p class="textB">白条免息购</p>
              <img src="../../assets/ipd.jpg" />
            </li>
            <li>
              <p class="textA">免息星球</p>
              <p class="textB">白条免息购</p>
              <img src="../../assets/ipd.jpg" />
            </li>
            <li>
              <p class="textA">免息星球</p>
              <p class="textB">白条免息购</p>
              <img src="../../assets/ipd.jpg" />
            </li>
        </ul>-->
      </section>
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="Total" button-text="去结算" v-show="Edi">
      <van-checkbox v-model="checked" checked-color="red">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar button-text="删除" v-show="Edi1" @submit="delAll">
      <van-checkbox v-model="checked" checked-color="red" style="position: absolute;left:0vw">全选</van-checkbox>
    </van-submit-bar>
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
      loveAry: [
        {
          src:
            "https://img14.360buyimg.com/n7/jfs/t9019/131/2232755043/139025/4992dafe/59c7567dNd5accf2e.jpg!q70.dpg.webp",
          pirce: "198",
          dic:
            "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫 深蓝色 M"
        },
        {
          src:
            "https://img14.360buyimg.com/n7/jfs/t9019/131/2232755043/139025/4992dafe/59c7567dNd5accf2e.jpg!q70.dpg.webp",
          pirce: "198",
          dic:
            "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫 深蓝色 M"
        },
        {
          src:
            "https://img14.360buyimg.com/n7/jfs/t9019/131/2232755043/139025/4992dafe/59c7567dNd5accf2e.jpg!q70.dpg.webp",
          pirce: "198",
          dic:
            "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫 深蓝色 M"
        },
        {
          src:
            "https://img14.360buyimg.com/n7/jfs/t9019/131/2232755043/139025/4992dafe/59c7567dNd5accf2e.jpg!q70.dpg.webp",
          pirce: "198",
          dic:
            "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫 深蓝色 M"
        },
        {
          src:
            "https://img14.360buyimg.com/n7/jfs/t9019/131/2232755043/139025/4992dafe/59c7567dNd5accf2e.jpg!q70.dpg.webp",
          pirce: "198",
          dic:
            "吉普鸟夹克男外套秋季新款休闲时尚青年百搭大码男装薄款茄克衫 深蓝色 M"
        }
      ],
      Edi: true,
      Edi1: false,
      cartN: false,
      time: 30 * 60 * 60 * 1000
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
      console.log("666");
      this.Edi = !this.Edi;
      this.Edi1 = !this.Edi;
    },
    delAll() {
      this.$dialog
        .confirm({
          message: "确定删除此商品?"
        })
        .then(() => {
          // on confirm
          this.cartList = [];
          this.cartN = !this.cartN;
          this.Edi = false;
          this.Edi1 = false;
        })
        .catch(() => {
          // on cancel
        });
    },
    delAry() {
      console.log();
    },
    login() {
      this.$router.push("/login");
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
  .cart {
    img {
      width: 40vw;
    }
    .info {
      padding: 2vw;
      box-sizing: border-box;
      .rec_name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: inline-block;
        font-size: 4vw;
        color: #e93b3d;
        margin-right: 2vw;
        line-height: 5vw;
      }
    }
  }
  .timer {
    .time {
      margin-left: 2vw;
      display: inline-block;
      color: red;
    }
    .timer-bottom {
      width: 100%;
      height: 38vw;
      overflow: scroll;
      box-sizing: border-box;
      .seckill-list {
        width: 200%;
        height: 100%;

        > li {
          width: 18vw;
          height: 100%;
          float: left;
          img {
            width: 100%;
            height: 13vw;
          }

          .seckill-new-price {
            display: block;
            color: #e93b3d;
            font-size: 16px;
            font-weight: 800;
            font-family: JDZhengHT-EN-Bold;
            text-align: center;
          }
          .seckill-original-price {
            display: block;
            text-decoration: line-through;
            color: #999;
          }
        }
      }
    }
  }
}
</style>