<template>
  <div class="shopping">
    <van-checkbox :name="title" v-model="isA">{{title}}</van-checkbox>
    <div v-for="i in data" :key="i.id">
      <van-checkbox :name="i.name" class="check" checked-color="#07c160" v-model="i.isT"></van-checkbox>
      <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.thumb">
        <div slot="tags">
          <span class="choose">
            <sku @qqq="fn" :id="i.id"></sku>
          </span>
        </div>
        <div slot="footer">
          <van-stepper v-model="i.num" />
          <van-button type="primary" size="mini" color="#999" plain @click="del(i.id)">删除</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import sku from "./sku";

export default {
  props: ["title", "data", "ary"],
  computed: {
    isA: {
      get() {
        return this.data.every(item => item.isT);
      },
      set(val) {
        this.data.forEach(item => (item.isT = val));
      }
    }
  },
  components: {
    sku
  },
  methods: {
    fn(obj) {
      this.data.forEach(item => {
        if (item.id === obj.id) {
          item.num = obj.num;
          item.price = obj.price / 100;
        }
      });
    },
    del(n) {
      this.$dialog
        .confirm({
          message: "确定删除此商品?"
        })
        .then(() => {
          // on confirm
          this.data == 0 ? (this.ary = []) : null;
          this.data.forEach((item, index) => {
            if (item.id == n) {
              this.data.splice(index, 1);
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  provide() {
    return {
      qqq: this.fn
    };
  }
};
</script>

<style lang="less" scoped>
.check {
  position: relative;
  left: 0vw;
  top: 20vw;
  z-index: 30;
  width: 5vw;
}
</style>