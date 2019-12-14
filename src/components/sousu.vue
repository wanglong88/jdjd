<template>
  <div>
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
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      show1: true,
      xiao: true,
      aaa: false,
      xiao2: false
    };
  },
  methods: {
    change3() {
      this.xiao = !this.xiao;
      this.xiao2 = !this.xiao2;
      this.aaa = !this.aaa;
    },
    change5() {
      this.shi = false;
    },
    dig() {
      Dialog.confirm({
        message: "确认要清空吗"
      })
        .then(() => {})
        .catch(() => {});
    }
  },
  components: {}
};
</script>
<style lang="less">
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
      margin-left: 2vw;
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
</style>


