<template>
  <div>
    <div class="Box">
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
        <div class="menu">
          <van-swipe indicator-color="white" class="menus">
            <van-swipe-item>
              <van-grid :border="false" :square="true" :column-num="5">
                <van-grid-item
                  v-for="(item,index) in imagess"
                  :key="index"
                  :icon="item.img"
                  :text="item.txt"
                  background-color="red"
                ></van-grid-item>
              </van-grid>
            </van-swipe-item>
            <van-swipe-item>
              <van-grid :column-num="5" :square="true" :border="false">
                <van-grid-item
                  v-for="(item,index) in imagess"
                  :key="index"
                  :icon="item.img"
                  :text="item.txt"
                ></van-grid-item>
              </van-grid>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="floor-the-container">
          <div class="floorimg">
            <img src="../../assets/show/1.jpg" />
            <img src="../../assets/show/2.gif" />
            <img src="../../assets/show/3.jpg" />
          </div>
        </div>
        <div class="seckill">
          <div class="seckill-box">
            <div class="seckill-top">
              <div class="seckill-top-img lt">
                <img src="../../assets/京东秒杀.png" alt />
              </div>
              <span class="time lt">14点场</span>
              <div class="count_down lt">
                <van-count-down :time="time">
                  <template v-slot="timeData">
                    <span class="item">{{ timeData.hours }}</span>:
                    <span class="item">{{ timeData.minutes }}</span>:
                    <span class="item">{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </div>
              <div>
                <span class="ms rt">更多秒杀 ></span>
              </div>
            </div>
            <div class="seckill-bottom">
              <ul class="seckill-list">
                <li v-for="(i,n) in seckillList" :key="n">
                  <img :src="i.img" alt />
                  <span class="seckill-new-price">{{i.new}}</span>
                  <span class="seckill-original-price">{{i.lod}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="zhuBox">
          <div class="zhu">
            <div class="zhu-img">
              <img src="../../assets/1212/1212.webp" alt />
            </div>
          </div>
          <ul class="poker">
            <li class="poker-img">
              <img src="../../assets/ms.png" alt />
              <div class="imgs">
                <img src="../../assets/1212/1212.jpg" alt />
              </div>
            </li>
            <li class="poker-img">
              <img src="../../assets/ms.png" alt />
              <div class="imgs">
                <img src="../../assets/1212/1212.jpg" alt />
              </div>
            </li>
            <li class="poker-img">
              <img src="../../assets/ms.png" alt />
              <div class="imgs">
                <img src="../../assets/1212/1212.jpg" alt />
              </div>
            </li>
            <li class="poker-img">
              <img src="../../assets/ms.png" alt />
              <div class="imgs">
                <img src="../../assets/1212/1212.jpg" alt />
              </div>
            </li>
          </ul>
          <div class="tit">
            <div class="tit-img">
              <img src="../../assets/dongJ.png" alt />
            </div>
            <div class="tit_list">
              <ul class="tit_listAll">
                <li>
                  <span class="textA">精选男装</span>
                  <br />
                  <span class="textB">穿衣有型</span>
                  <div>
                    <img src="../../assets/kuzi.jpg" />
                    <img src="../../assets/kuzi.jpg" />
                  </div>
                </li>
                <li>
                  <span class="textA">新机骄傲</span>
                  <br />
                  <span class="textB">2019手机发布会</span>
                  <div>
                    <img src="../../assets/kuzi.jpg" />
                    <img src="../../assets/kuzi.jpg" />
                  </div>
                </li>
                <li>
                  <p class="textA">免息星球</p>
                  <p class="textB">白条免息购</p>
                  <img src="../../assets/kuzi.jpg" />
                </li>
                <li>
                  <p class="textA">免息星球</p>
                  <p class="textB">白条免息购</p>
                  <img src="../../assets/kuzi.jpg" />
                </li>
                <li>
                  <p class="textA">免息星球</p>
                  <p class="textB">白条免息购</p>
                  <img src="../../assets/kuzi.jpg" />
                </li>
                <li>
                  <p class="textA">免息星球</p>
                  <p class="textB">白条免息购</p>
                  <img src="../../assets/kuzi.jpg" />
                </li>
              </ul>
            </div>
          </div>
          <div class="flsPit">
            <div class="flsPit-img">
              <img src="../../assets/mrG.png" alt />
            </div>
            <div class="flsPit_list">
              <ul class="flsPit_listAll">
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
              </ul>
            </div>
          </div>
        </div>
        <div class="bulletinBox">
          <div class="bulletin">
            <div class="imgs">
              <img src="../../assets/bulletin.jpg" alt />
            </div>
            <div class="bulletin_banner">
              <van-swipe style="height: 50px;" :autoplay="1800" :loop="true" :vertical="true" :show-indicators="false">
                <van-swipe-item>
                  <span>热门</span>
                  <span>第六师傅师傅的hi福利会带来张素华富含失踪</span>
                </van-swipe-item>
                <van-swipe-item>
                  <span>热门</span>
                  <span>第六师傅师傅的hi福利会带来张素华富含失踪</span>
                </van-swipe-item>
                <van-swipe-item>
                  <span>热门</span>
                  <span>第六师傅师傅的hi福利会带来张素华富含失踪</span>
                </van-swipe-item>
                <van-swipe-item>
                  <span>热门</span>
                  <span>第六师傅师傅的hi福利会带来张素华富含失踪</span>
                </van-swipe-item>
              </van-swipe>
            </div>
            <div class="bulletin_right">
             <span>更多</span>
            </div>
          </div>
        </div>
        <div class="bulletin_banner">
          <van-swipe style="height: 50px;" :vertical="true">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </div>
        <div class="bulletin_banner">
          <van-swipe style="height: 50px;" vertical>
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      images: [
        require("../../assets/banner/download.jpg"),
        require("../../assets/banner/download (1).jpg"),
        require("../../assets/banner/download (2).jpg"),
        require("../../assets/banner/download (3).jpg"),
        require("../../assets/banner/download (4).jpg"),
        require("../../assets/banner/download(5).jpg")
      ],
      imagess: [
        { img: require("../../assets/menu/1.webp"), txt: "京东超市" },
        { img: require("../../assets/menu/2.webp"), txt: "数码电器" },
        { img: require("../../assets/menu/3.webp"), txt: "京东服饰" },
        { img: require("../../assets/menu/4.webp"), txt: "京东生鲜" },
        { img: require("../../assets/menu/5.webp"), txt: "京东到家" },
        { img: require("../../assets/menu/6.webp"), txt: "缴费充值" },
        { img: require("../../assets/menu/7.webp"), txt: "9.9元拼" },
        { img: require("../../assets/menu/8.webp"), txt: "领券" },
        { img: require("../../assets/menu/9.webp"), txt: "借钱" },
        { img: require("../../assets/menu/10.webp"), txt: "PLUS会员" }
      ],
      seckillList: [
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/43394/14/4347/330706/5cd25169E1de40e86/b4f41a0f58d6de73.jpg.dpg",
          new: "￥273",
          lod: "￥288"
        }
      ],
      time: 30 * 60 * 60 * 1000
    };
  },
  methods: {
    onSearch() {}
  },
  components: {}
};
</script>
<style lang="less" scoped>
.Box {
  background: #f0f2f5;
}
header {
  width: 100%;
  height: 14vw;
  background: #cb3403;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.menu {
  width: 100%;
  height: 40vw;
  background: rgba(0, 0, 0, 0.1);
  .menus {
    width: 100%;
    height: 100%;
  }
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

  background: #cb3403;
  border-radius: 0 0 60px 60px;
  > .van-swipe {
    width: 92vw;
    height: 35vw;
    margin: auto;
    border-radius: 3vw;
    margin-top: 14vw;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
.floor-the-container {
  width: 100%;
  .floorimg {
    width: 100%;
    height: 25vw;
    > img {
      width: 33.33vw;
      height: 100%;
    }
  }
}
.seckill {
  width: 100%;
  height: 52vw;
  background: #cb3403;
  padding: 3vw;
  box-sizing: border-box;
  .seckill-box {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 13px;
    .seckill-top {
      width: 100%;
      height: 10vw;
      border-radius: 13px 13px 0 0;
      background-color: khaki;
      .seckill-top-img {
        width: 20vw;
        height: 100%;
        padding: 2vw;
        img {
          width: 100%;
        }
      }

      .time {
        font-size: 15px;
        color: #232326;
        font-weight: 700;
        line-height: 10vw;
      }
      .count_down {
        transform: translateY(45%);
        margin-left: 2vw;
        .item {
          display: inline-block;
          width: 22px;
          margin-right: 5px;
          color: #000;
          font-size: 12px;
          text-align: center;
          background-color: #fff;
        }
      }
      .ms {
        color: #f23030;
        line-height: 10vw;
        margin-right: 2vw;
      }
    }
    .seckill-bottom {
      width: 100%;
      height: 36vw;
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
.zhuBox {
  background-color: #cb3403;

  .zhu-img {
    width: 100%;
    height: 30vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .poker {
    padding: 0vw 1vw 0vw 2vw;
    height: 35vw;
    .poker-img {
      width: 23vw;
      height: 34vw;
      margin-left: 1vw;
      float: left;
      position: relative;
      img {
        width: 100%;
      }
      .imgs {
        width: 16vw;
        height: 20vw;
        position: absolute;
        top: 2vw;
        left: 4vw;
      }
    }
    .poker-img:nth-child(1) {
      margin-left: 0;
    }
  }

  .tit {
    width: 100%;
    .tit-img {
      width: 100%;
      height: 10vw;
      img {
        width: 100%;
      }
    }
    .tit_list {
      width: 100%;
      height: 86vw;
      background-color: #cb3403;
      padding: 3vw;
      box-sizing: border-box;

      .tit_listAll {
        width: 100%;
        height: 80vw;
        background-color: #fff;
        border-radius: 4vw;
        box-sizing: border-box;
        li {
          width: 24%;
          height: 40vw;
          float: left;
          border: 1px solid red;
          img {
            width: 100%;
          }
        }
        li:nth-child(1) {
          width: 49%;
          height: 40vw;
          .textA {
            background: linear-gradient(90deg, #45caff, #1471fb);
            display: inline-block;
          }
          div {
            height: 20vw;
            padding: 0 2vw 0 2vw;
            margin-top: 5vw;
            img {
              display: inline-block;
              width: 45%;
              height: 20vw;
            }
          }
        }
        li:nth-child(2) {
          width: 49%;
          height: 40vw;
          border-right: none;
          .textA {
            background: linear-gradient(90deg, #45caff, #1471fb);
            display: inline-block;
          }
          div {
            margin-top: 5vw;
            height: 20vw;
            padding: 0 2vw 0 2vw;
            img {
              display: inline-block;
              width: 45%;
              height: 20vw;
            }
          }
        }
        li:nth-child(6) {
          border-right: none;
        }
      }
    }
  }
  .flsPit {
    width: 100%;
    .flsPit-img {
      width: 100%;
      height: 10vw;
      img {
        width: 100%;
      }
    }
    .flsPit_list {
      width: 100%;
      height: 85vw;
      background-color: #cb3403;
      padding: 3vw;
      box-sizing: border-box;

      .flsPit_listAll {
        width: 100%;
        height: 80vw;
        background-color: #fff;
        border-radius: 4vw;
        box-sizing: border-box;
        li {
          width: 24%;
          height: 40vw;
          float: left;
          border: 1px solid red;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.bulletinBox {
  width: 100%;
  box-sizing: border-box;
  padding: 0 3vw 0 3vw;
  background: #f0f2f5;
  .bulletin {
    width: 100%;
    height: 6vw;
    background-color: #fff;

    .imgs {
      height: 100%;
      float: left;
      margin-left: 3vw;
      img {
        height: 100%;
      }
    }
    .bulletin_banner {
      width: 59vw;
      height: 6vw;
      float: left;
      box-sizing: border-box;
      padding-left: 2vw;
      overflow: hidden;
      span:nth-child(1) {
        color: #e93b3d;
        float: left;
      }
      span:nth-child(2) {
        padding-left: 2vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
      }
    }
    .bulletin_right{
      float: right;
      
    }
  }
}
</style>