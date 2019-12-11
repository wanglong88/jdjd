<template>
  <div class="zon">
    <div class="a0">
      <div class="a1" v-for="(item,index) in name" :key="index" >
         {{item}}
      </div>
    </div>
    
   </div>
   
</template>
<script>
// @ is an alias to /src
export default {
  name: "search2",
  data() {
    return {
        name:['京东物流','新品','品牌','销量','上市时间','鞋底材质','功能','闭合方式','鞋面材质','销量',]
    };
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.zon {
  width: 100vw;
  height: 10vw;
  overflow: scroll;
  border: 1px solid #ccc;;
  box-sizing: border-box;
  .a0 {
    width: 250vw;
    height: 6vw;
    line-height: 6vw;
    position: relative;
    top: 1.5vw;
    overflow: hidden;
    .a1 {
      display: inline-block;
      width: 20vw;
      height: 6vw;
      line-height: 6vw;
      border: 1px solid #fff;;
      margin-left: 3vw;
      background-color: #f2f2f7;
      color: #666;
      overflow: hidden;

    }
  }
}
</style>