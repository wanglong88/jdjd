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
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
      <van-tag @click="showBase = true">{{stt}}</van-tag>
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
      stt: "白色,XXXL",
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 3
      },
      customSkuValidator: () => "请选择物品!"
    };
  },
  created() {
    // console.log(this);
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
      // console.log(this);
    },
    //点击购买
    onBuyClicked(data) {
      this.$toast('请登录');
    },
    // 加入购物车
    onAddCartClicked(data) {
      console.log(data.selectedSkuComb)
      this.showBase = false;
      this.stt = data.selectedSkuComb.color + "," + data.selectedSkuComb.size;
      this.$emit("qqq", {
        num: data.selectedNum,
        price: data.selectedSkuComb.price,
        url: data.selectedSkuComb.imgUrl,
        id: this.id
      });
    }
  },

  inject: ["qqq"]
};
</script>

<style lang="less" scoped>
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
}
</style>