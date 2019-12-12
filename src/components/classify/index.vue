<template>
  <div class="ify">
    <div class="header">
      <van-icon class="left" name="arrow-left" @click="change2" />
      <van-search class="sou1" shape="round" placeholder="电动自行车" v-model="value" @click="change" v-if="flag" />
      <van-search class="sou1" shape="round" placeholder="电动自行车" v-model="value" autofocus @click="change" v-else-if="!flag" @search='chart' />

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
              <van-grid-item v-for="(item,index) in ary" :key="index" :icon="item.img" :text="item.name" />
            </van-grid>
            <div>
              <h3 class="lt1">家电热搜</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
           
            <div>
              <h3 class="lt1">家电热搜</h3>
              <van-grid :gutter="10" :column-num="3">
              <van-grid-item v-for="(item,index) in ary" :key="index" :icon="item.img" :text="item.name" />
            </van-grid>
            </div>
          </div>

          <div class="er" v-if="activeIndex === 1">
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="(item,index) in ary" :key="index" :icon="item.img" :text="item.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
                <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt2">热门品牌</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
          </div>
          <div class="san" v-if="activeIndex === 2">
            <h3 class="lt3">热门乒乓</h3>
            <van-grid :gutter="10" :column-num="3">
              <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              
            </van-grid>
            <h3 class="lt3">热门乒乓</h3>
            <van-grid :gutter="10" :column-num="3">
              <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />

            </van-grid>
            <h3 class="lt3">热门乒乓</h3>
            <van-grid :gutter="10" :column-num="3">
              <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />

            </van-grid>
          </div>
          <div class="si" v-if="activeIndex === 3">
            <div>
              <h3 class="lt4">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt4">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt4">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
              </van-grid>
            </div>
            <div>
              <h3 class="lt4">热门乒我</h3>
              <van-grid :gutter="10" :column-num="3">
               <van-grid-item v-for="(item1,index) in ary1" :key="index" :icon="item1.img" :text="item1.name" />
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
      ],
      ary:[
            {
         name:'手机',
        img:"//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"
    },
    {
         name:'耳机',
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png"
    },
    {
         name:'华为',
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"
    },
    {
        name:'电饭煲', 
        img:"//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png"
    },
    {
        name:'电磁炉',
        img:"//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png"
    },
    {
        name:'路由器',
        img:"//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png"
    }
      ],
      ary1:[
        {
        name:"避孕套",
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png"
    },
    {
        name:"口红",
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png"
    },
    {
        name:"吹风机",
        img:"//img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png"
    },
    {
        name:"三只松鼠",
        img:"//img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png"
    },
    {
        name:"洗衣液",
        img:"//img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png"
    },
    {
        name:"保温杯",
        img:"//img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png"
    },
    {
        name:"微波炉",
        img:"//img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png"
    },
    {
        name:"洗发水",
        img:"//img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png"
    },
    {
        name:"家电热搜",
        img:"//img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png"
    },
    {
        name:"冰箱",
        img:"//img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png"
    },
    {
        name:"洗衣机",
        img:"//img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png"
    },
    {
        name:"电视",
        img:"//img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png"
    },
    {
         name:'手机',
        img:"//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"
    },
    {
         name:'耳机',
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png"
    },
    {
         name:'华为',
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"
    },
    {
        name:'电饭煲', 
        img:"//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png"
    },
    {
        name:'电磁炉',
        img:"//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png"
    },
    {
        name:'路由器',
        img:"//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png"
    },
      {
        name:"游戏手机",
        img:"//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg"
    },
    {
        name:"老人机",
        img:"//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg"
    },
    {
        name:"手机",
        img:"//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg"
    },
    {
        name:"全面屏手机",
        img:"//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg"
    },
    {
        name:"拍照手机",
        img:"//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg"
    }
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