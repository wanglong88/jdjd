<template>
  <div class="ify">
    <div class="header">
      <van-icon class="left" name="arrow-left" />
      <van-search class="sou1" shape="round" placeholder="电动自行车" v-model="value" @click="change" />
      <van-icon class="add" name="ellipsis" />
    </div>
     <div class="sou">
         <div class="shan">
             <span>最近搜索</span>
             <span></span>
         </div>
     </div>
    <van-tree-select
    v-if='ff'
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
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "index",
  data() {
    return {
      ff:false,  
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
        { text: "箱包手袋" },
       
      ]
    };
  },

  methods: {
      change(){
        // this.ff=!this.ff 
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
    border-bottom: 1px solid #ccc;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background: #fff;

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
        flex: 3
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
    .yi,.er,
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
}
</style>