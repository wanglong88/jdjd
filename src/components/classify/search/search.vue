

<template>
  <div>
    <div class="header">
      <van-icon class="s0" name="arrow-left" @click="change" />
      <van-search
        class="s1"
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
        @search="onSearch"
        clearable
      >
        <!-- <div slot="action" @click="onSearch">搜索</div> -->
      </van-search>
      <van-icon class="s2" name="ellipsis" />
    </div>

    <van-dropdown-menu active-color="#ee0a24" class="navBox" >
      <van-dropdown-item name="1" v-model="value1" :options="option1" get-container />
      <van-dropdown-item class="xiao" title="销量" disabled />
         <van-dropdown-item v-model="value2" :options="option2">
           <van-button type="info" size="mini">确认</van-button>
            <van-button type="info" size="mini">取消</van-button>
        </van-dropdown-item>
           <van-dropdown-item name="2" title="筛选" disabled />
     
    </van-dropdown-menu>
 
    <my-search2></my-search2>
    <my-search3></my-search3>
  </div>
</template>
<script>
import search2 from "@/components/classify/search/search2.vue";
import search3 from "@/components/classify/search/search3.vue";
// @ is an alias to /src
export default {
  name: "search",
  data() {
    return {
       
     
      value: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "最新上架", value: 1 },
        { text: "价格高低", value: 2 },
        { text: "价格最高", value: 3 },
        { text: "评价最高", value: 4 }
      ],
      option2: [
        { text: "有货优先", value: "a" },
        { text: "货到付款", value: "b" },
        { text: "京东国际", value: "c" },
        { text: "PLUS专享促销", value: "e" },
        { text: "配送全球", value: "f" }
      ]
    };
  },
  components: {
    "my-search2": search2,
    "my-search3": search3
  },
  methods: {
    onSearch() {},
    change() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100vw;
  height: 15vw;
  overflow: hidden;
  border-bottom: 1px solid;
  .s0 {
    float: left;
    line-height: 17vw;
    position: relative;
    font-size: 25px;
    left: 3vw;
    overflow: hidden;
  }
  .s2 {
    float: right;
    position: relative;
    top: -10vw;
    right: 4vw;
    font-size: 28px;
    overflow: hidden;
  }
  .s1 {
    width: 82vw;
    height: 100%;
    position: relative;
    top: 1vw;
    left: 1vw;
    overflow: hidden;
  }
}
// .navBox{
  
// }
//  .van-dropdown-menu__item--disabled{
//      .van-dropdown-menu__title{
//          .van-ellipsis{
//              color: black;
//          }
//          .van-dropdown-menu__title::after{
//              color: #fff;
//          }
//      }
//  }
</style>