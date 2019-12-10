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
                <li v-for="(i) in seckillList" :key="i.id">
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
            <li class="poker-img" v-for="(i,n) in pokerList" :key="n">
              <img :src="i.img" alt />
              <div class="imgs">
                <img :src="i.imgs" alt />
              </div>
              <span class="mianJ">{{i.mj}}</span>
              <span class="lei">{{i.L}}</span>
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
              <van-swipe
                style="height: 50px;"
                :autoplay="1800"
                :loop="true"
                :vertical="true"
                :show-indicators="false"
              >
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
        <div class="recommend">
          <div class="rcm-img">
            <img src="../../assets/Recommend.png" alt />
          </div>
          <div class="rcm-list cl">
            <ul>
              <li>
                <div class="rcm-listImg">
                  <img src="../../assets/kuzi.jpg" alt />
                </div>
                <div class="rcm-listTxt">
                  <span class="rcm-listIcon">
                    <img src="../../assets/12icon.webp" alt />
                    花花公子（PLAYBOY）高阶复古水洗浅蓝色九分牛仔裤修身小脚裤韩版潮流9分裤子男士 浅蓝色 30
                  </span>
                  <span class="rcm-fontSiz lt">￥268</span>
                  <div class="rcm-listXs rt">看相似</div>
                </div>
              </li>
              <li>
                <div class="rcm-listImg">
                  <img src="../../assets/kuzi.jpg" alt />
                </div>
                <div class="rcm-listTxt">
                  <span class="rcm-listIcon">
                    <img src="../../assets/12icon.webp" alt />
                    花花公子（PLAYBOY）高阶复古水洗浅蓝色九分牛仔裤修身小脚裤韩版潮流9分裤子男士 浅蓝色 30
                  </span>
                  <span class="rcm-fontSiz lt">￥268</span>
                  <div class="rcm-listXs rt">看相似</div>
                </div>
              </li>
              <li>
                <div class="rcm-listImg">
                  <img src="../../assets/kuzi.jpg" alt />
                </div>
                <div class="rcm-listTxt">
                  <span class="rcm-listIcon">
                    <img src="../../assets/12icon.webp" alt />
                    花花公子（PLAYBOY）高阶复古水洗浅蓝色九分牛仔裤修身小脚裤韩版潮流9分裤子男士 浅蓝色 30
                  </span>
                  <span class="rcm-fontSiz lt">￥268</span>
                  <div class="rcm-listXs rt">看相似</div>
                </div>
              </li>
              <li>
                <div class="rcm-listImg">
                  <img src="../../assets/kuzi.jpg" alt />
                </div>
                <div class="rcm-listTxt">
                  <span class="rcm-listIcon">
                    <img src="../../assets/12icon.webp" alt />
                    花花公子（PLAYBOY）高阶复古水洗浅蓝色九分牛仔裤修身小脚裤韩版潮流9分裤子男士 浅蓝色 30
                  </span>
                  <span class="rcm-fontSiz lt">￥268</span>
                  <div class="rcm-listXs rt">看相似</div>
                </div>
              </li>
              <li>
                <div class="rcm-listImg">
                  <img src="../../assets/kuzi.jpg" alt />
                </div>
                <div class="rcm-listTxt">
                  <span class="rcm-listIcon">
                    <img src="../../assets/12icon.webp" alt />
                    花花公子（PLAYBOY）高阶复古水洗浅蓝色九分牛仔裤修身小脚裤韩版潮流9分裤子男士 浅蓝色 30
                  </span>
                  <span class="rcm-fontSiz lt">￥268</span>
                  <div class="rcm-listXs rt">看相似</div>
                </div>
              </li>
            </ul>
          </div>
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
          lod: "￥288",
          id: 1
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/93463/8/4958/103779/5de9ee38E2a6e3eb0/dbc44ce969a2ad34.jpg.dpg",
          new: "￥358",
          lod: "￥698",
          id: 2
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/99415/39/4775/148593/5de9ba75E0a8547e4/2ca16313c679bd96.png.webp",
          new: "￥16.8",
          lod: "￥54.6",
          id: 3
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/92466/34/4117/195933/5de5c8baEda7e6eee/ecf2def5cd5a8e37.jpg.dpg",
          new: "￥149",
          lod: "￥399",
          id: 4
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/92475/4/4412/96488/5de718daE1c68ea83/4c29ee87187220f7.jpg.dpg",
          new: "￥449",
          lod: "￥629",
          id: 5
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/95074/26/4633/199466/5de79058Edff76c64/55719fd5b122f133.jpg.dpg",
          new: "￥99",
          lod: "￥119.9",
          id: 6
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/90260/15/4894/162945/5de9e531Ed7dbe998/8139955ca52bc833.jpg.dpg",
          new: "￥1669",
          lod: "￥1699",
          id: 7
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/54264/5/12976/138189/5de9dcc9E47922a78/d1c5cc35a073239a.jpg.dpg",
          new: "￥787",
          lod: "￥1029",
          id: 8
        },
        {
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/102400/38/4618/37937/5de86f3cE22d43a30/aa60887d7c92a0f7.jpg.dpg",
          new: "￥67",
          lod: "￥179",
          id: 9
        }
      ],
      pokerList:[
        {
          img:require("../../assets/ms.png"),
          imgs:require("../../assets/1212/1212.jpg"),
          mj:"领199减100券",
          L:"宠物生活"
        },
        {
          img:require("../../assets/ms.png"),
          imgs:require("../../assets/1212/1212.jpg"),
          mj:"领199减100券",
          L:"宠物生活"
        },
        {
          img:require("../../assets/ms.png"),
          imgs:require("../../assets/1212/1212.jpg"),
          mj:"领199减100券",
          L:"宠物生活"
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
          margin-left: 2vw;
          img {
            width: 100%;
            height: 18vw;
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
            font-size: 14px;
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
    height: 27vw;
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
      .mianJ {
        width: 30vw;
        height: 6vw;
        position: absolute;
        left: 0;
        bottom: 9vw;
        font-size: 10px;
        text-align: left;
        padding-left: 11px;
        color: #fff;
      }
      .lei {
        position: absolute;
        left: 0;
        bottom: 4vw;
        padding-left: 3vw;
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
    .bulletin_right {
      float: right;
    }
  }
}
.recommend {
  width: 100%;
  background: #f0f2f5;
  padding: 0 3vw 0 3vw;
  box-sizing: border-box;
  margin-top: 3vw;
  .rcm-img {
    width: 100%;
    height: 9vw;
    background: #fff;

    img {
      height: 100%;
    }
  }
  .rcm-list {
    width: 100%;
    li {
      width: 46.5vw;
      height: 70vw;
      float: left;
      background-color: #fff;
      margin-right: 1vw;
      margin-bottom: 1vw;
      overflow: hidden;
      .rcm-listImg {
        width: 100%;
        height: 47vw;
        img {
          width: 100%;
        }
      }
      .rcm-listTxt {
        padding: 1vw;
        .rcm-listIcon {
          // float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        .rcm-listXs {
          border: 1px solid #686868;
          padding: 4px;
          font-size: 10px;
        }
        .rcm-fontSiz {
          color: #cb3403;
        }
      }
    }
    li:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>