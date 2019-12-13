<template>
  <div>
    <!-- 基础用法 -->
    <div class="sku-container">
      <van-sku
        v-model="showBase"
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="skuData.goods_id"
        :hide-stock="skuData.sku.hide_stock"
        :quota="skuData.quota"
        :quota-used="skuData.quota_used"
        :initial-sku="initialSku"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :custom-sku-validator="customSkuValidator"
        :show-add-cart-btn="true"
        
        @add-cart="onAddCartClicked"
      />
      <div @click="showBase = true" class="gggg">{{stt}}</div>
      <!-- <van-button @click="showBase = true" class="ggggg">gggggg</van-button> -->
      <!-- <van-button type="primary" size="mini" >xxxx</van-button> -->
    </div>
  </div>
</template>

<script>
import skuData from "./sku_data";
export default {
  props: ["id"],
  data() {
    return {
      skuData: skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      stt: "天蓝色,M",
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 3
      },
      customSkuValidator: () => "请选择物品!"
    };
  },
  created() {
    
  },
  computed: {
    str() {
      return {};
    }
  },
  //data.selectedNum  购买的数量
  //data.selectedSkuComb.price  购买的单价
  //data.selectedSkuComb.color  购买的颜色
  //data.selectedSkuComb.size  购买的尺寸
  methods: {
    fn() {
      /* console.log(data); */
      
    },
    //点击购买
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(data);
    },
    // 加入购物车
    onAddCartClicked(data) {
      
      this.$toast('已加入购物车');
      /* console.log(this.showBase,'1'); */
      this.showBase = false;
      /* console.log(this.showBase,'2'); */
      
      /* 
      this.stt = data.selectedSkuComb.color + "," + data.selectedSkuComb.size;
      this.$emit("qqq", {
        num: data.selectedNum,
        price: data.selectedSkuComb.price,
        id: this.id
      });*/
    } 
  },

};
</script>

<style lang="less">
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
  .gggg{
    height: 25vw;
    width: 100vw;
    font-size: 3vw;
  }
}
</style>