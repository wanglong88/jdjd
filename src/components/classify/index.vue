<template>
  <div class="ify">
    <div class="header">
      <van-icon class="left" name="arrow-left" @click="change2" />
      <van-search class="sou1" shape="round" placeholder="电动自行车" v-model="value" @click="change" v-if="flag" />
      <van-search class="sou1" shape="round" placeholder="电动自行车" v-model="value" autofocus  v-else-if="!flag" @search='chart' />

      <my-search v-else></my-search>

      <van-icon class="add" name="ellipsis" @click="change4" v-show="bbb" />
      <span class="btn" @click.13="chart" v-show="bbb2">搜索</span>
    </div>
    <div class="xia" @click="change5">
      <div class="history" v-if="show1">
        <div class="shan">
          <span class="lt">最近搜索</span>
          <span class="rt" @click="dig">删除</span>
          
        </div>
        <div class="shan2">
          <span>蓝月亮洗衣液</span>
          <span>家装建材12.12暖暖节</span>
        </div>
        <div class="shan3">
          <span class="ltt">热门搜索</span>
          <span class="rtt" @click="change3">{{aaa?"显示":"隐藏"}}</span>
        </div>

        <div class="shan4" v-show="xiao">
          <div>
            <span>超级白吉布提热</span>
            <span>超级白吉布提热</span>
            <span>超级白吉布提热</span>
          </div>
          <div>
            <span>自动喂食器</span>
            <span>蓝牙映像</span>
            <span>蓝牙映像</span>
          </div>
          <div>
            <span>应急启动电源</span>
            <span>应急启</span>
            <span>应急启</span>
            <span>应急启的</span>
          </div>
          <div>
            <span>暗影机</span>
            <span>暗影机</span>
          </div>
        </div>
        <div class="shan5" v-show="xiao2">已隐藏搜索发现</div>
      </div>
      <van-tree-select
        v-if="show"
        class="zuo"
        height="200vw"
        :items="items"
        :main-active-index.sync="activeIndex"
      >
        <template slot="content">
          <div class="yi" v-if="activeIndex === 0">
            <div class="fen">
              <h3 class="lt">热门分类</h3>
              <h3 class="rt">
                排行榜
                <van-icon class="tu1" name="arrow" />
              </h3>
            </div>

            <van-grid :gutter="10" :column-num="3">
              <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
            </van-grid>
            <div>
              <h3 class="lt1">家电热搜</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt1">家电热搜</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt1">家电热搜</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>

          <div class="er" v-if="activeIndex === 1">
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="san" v-if="activeIndex === 2">
            <h3 class="lt3">热门乒乓</h3>
            <van-grid :gutter="10" :column-num="3">
              <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
            </van-grid>
          </div>
          <div class="si" v-if="activeIndex === 3">
            <div>
              <h3 class="lt4">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="wu" v-if="activeIndex === 4">
            <div>
              <h3 class="lt5">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="liu" v-if="activeIndex === 5">
            <div>
              <h3 class="lt6">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="qi" v-if="activeIndex === 6">
            <div>
              <h3 class="lt7">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="ba" v-if="activeIndex === 7">
            <div>
              <h3 class="lt8">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="jiu" v-if="activeIndex === 8">
            <div>
              <h3 class="lt9">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="shi" v-if="activeIndex === 9">
            <div>
              <h3 class="lt10">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="shiyi" v-if="activeIndex === 10">
            <div>
              <h3 class="lt11">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s2" v-if="activeIndex === 11">
            <div>
              <h3 class="lt12">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s3" v-if="activeIndex === 12">
            <div>
              <h3 class="lt13">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s4" v-if="activeIndex === 13">
            <div>
              <h3 class="lt14">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s5" v-if="activeIndex === 14">
            <div>
              <h3 class="lt15">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s6" v-if="activeIndex === 15">
            <div>
              <h3 class="lt16">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s7" v-if="activeIndex === 16">
            <div>
              <h3 class="lt17">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s8" v-if="activeIndex === 17">
            <div>
              <h3 class="lt18">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
          <div class="s9" v-if="activeIndex === 18">
            <div>
              <h3 class="lt19">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </div>
          </div>
        </template>
      </van-tree-select>

      <ul class="ye" v-show="shi">
        <li>
          <van-icon class="ll" name="wap-home-o" />
          <span>首页</span>
        </li>
        <li>
          <van-icon class="ll" name="wap-home-o" />
          <span>分类搜索</span>
        </li>
        <li>
          <van-icon class="ll" name="shopping-cart-o" />
          <span>购物车</span>
        </li>
        <li>
          <van-icon class="ll" name="contact" />
          <span>我的京东</span>
        </li>
        <li>
          <van-icon class="ll" name="contact" />
          <span>浏览记录</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import { Dialog } from "vant";
export default {
  name: "index",
  data() {
    return {
      aaa: false,
      bbb: true,
      bbb2: false,
      shi: false,
      show: true,
      show1: false,
      xiao: true,
      xiao2: false,
      flag:true,
      value: "",
      activeIndex: 0,
      items: [
        { text: "手机数码" },
        { text: "家用电器" },
        { text: "电脑办公" },
        { text: "计生情趣" },
        { text: "美妆护肤" },
        { text: "个户清洁" },
        { text: "汽车生活" },
        { text: "京东超市" },
        { text: "男装" },
        { text: "男鞋" },
        { text: "女装" },
        { text: "女鞋" },
        { text: "母婴童装" },
        { text: "图书音像" },
        { text: "运动户外" },
        { text: "内衣配饰" },
        { text: "食品生鲜" },
        { text: "酒水饮料" },
        { text: "家居家装" },
        { text: "家具厨具" },
        { text: "箱包手袋" }
      ]
    };
  },
  mounted() {},
  components:{
  },
  methods: {
    dig() {
      Dialog.confirm({
        message: "确认要清空吗"
      })
        .then(() => {})
        .catch(() => {});
    },
    change() {
      this.show = false;
      this.show1 = true;
      this.bbb = false;
      this.bbb2 = true;
      this.flag = !this.flag
    },
    chart(){
      if(!this.value) return
      this.$router.push('/classify/search')
    },
    change2() {
      this.show1 = false;
      this.show = true;
      this.bbb = true;
      this.bbb2 = false;
    },
    change3() {
      this.xiao = !this.xiao;
      this.xiao2 = !this.xiao2;
      this.aaa = !this.aaa;
    },
    change4() {
      this.shi = !this.shi;
    },
    change5() {
      this.shi = false;
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.ify {
  box-sizing: border-box;
  > .header {
    width: 100vw;
    font-size: 30px;
    height: 15vw;
    border-bottom: 1px solid #ccc;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background: #fff;
    overflow: hidden;
    .btn {
      width: 3vw;
      height: 2.5vw;
      background: red;
      color: #fff;
      font-size: 16px;
      padding: 1vw;
      position: relative;
      left: 40vw;
      top: -13vw;
      border-radius: 5px;
    }

    .left {
      float: left;
      margin-top: 3vw;
      margin-left: 3vw;
      overflow: hidden;
    }
    .sou1 {
      width: 75vw;
      text-align: center;
      font-size: 25px;
      input {
        font-size: 15px;
      }
    }
    .add {
      float: right;
      margin-top: -11vw;
      margin-right: 3vw;
      overflow: hidden;
      z-index: 10;
    }
  }
  .zuo {
    position: relative;
    top: 15vw;
    left: 0;
    .van-tree-select__content {
      flex: 3;
    }
    .yi {
      .fen {
        width: 100%;
        height: 15vw;
        display: flex;
        position: relative;
        top: 4vw;
        .lt {
          width: 30vw;
          height: 100%;
        }
        .rt {
          width: 35vw;
          height: 100%;
          position: relative;
          text-align: right;
          font-size: 14px;
          font-weight: normal;
          line-height: 6vw;

          .tu1 {
            position: relative;
            top: 0.5vw;
          }
        }
      }
      .lt1 {
        text-align: left;
        text-indent: 5vw;
        margin: 3vw 0 2vw 2vw;
      }
    }
    .yi,
    .er,
    .san,
    .si,
    .wu,
    .liu,
    .qi,
    .ba,
    .jiu,
    .shi,
    .shiyi,
    .s2,
    .s3,
    .s4,
    .s5,
    .s6,
    .s7,
    .s8,
    .s9 {
      width: 75vw;
      height: 150vw;
      overflow: scroll;
      .lt1,
      .lt2,
      .lt3,
      .lt4,
      .lt5,
      .lt6,
      .lt7,
      .lt8,
      .lt9,
      .lt10,
      .lt11,
      .lt12,
      .lt13,
      .lt14,
      .lt15,
      .lt16,
      .lt17,
      .lt18,
      .lt19 {
        text-align: left;
        text-indent: 5vw;
        margin: 3vw 0 2vw 2vw;
      }
    }
  }
  .history {
    width: 100vw;
    height: 80vw;
    box-sizing: border-box;
    margin-top: 15vw;

    .shan,
    .shan3 {
      width: 100%;
      height: 15vw;
      .lt,
      .ltt {
        float: left;
        position: relative;
        top: 3vw;
        left: 3vw;
      }
      .rt,
      .rtt {
        float: right;
        position: relative;
        top: 3vw;
        right: 3vw;
      }
    }
    .shan2,
    .shan4 {
      width: 100%;
      height: 15vw;
      font-size: 14px;
      color: #ccc;
      text-align: left;
      text-indent: 2vw;

      span {
        border: 1px solid #cccccc;
        padding: 1vw 1vw 1vw 1vw;
        border-radius: 5px 5px 5px 5px;
        background-color: rgba(106, 204, 243, 0);
      }
      span:nth-child(1) {
        margin-left:2vw;
      }
      span:nth-child(2) {
        margin-left: 2vw;
      }
      span:nth-child(3) {
        margin-left: 2vw;
      }
      span:nth-child(4) {
        margin-left: 3vw;
      }
    }
    .shan4 {
      div {
        margin-top: 5vw;
      }
      div:nth-child(1) {
        color: red;
      }
    }
    .shan5 {
      font-size: 14px;
      position: relative;
      top: 5vw;
      color: #ccc;
    }
    
  }
  .ye {
    width: 35vw;
    height: 55vw;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    right: 3vw;
    top: 17vw;
    z-index: 10;
    border-radius: 4px;
    color: #fff;
    font-weight: 400;
    list-style-type: none;
    li {
      width: 100%;
      height: 11vw;
      text-align: left;
      line-height: 11vw;
      text-indent: 1vw;
      font-size: 15px;
      span {
        margin-left: 3vw;
      }
      .ll {
        font-size: 18px;
      }
    }
  }
}
</style>