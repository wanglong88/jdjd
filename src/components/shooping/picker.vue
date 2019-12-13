<template>
  <div>
    <van-field
      readonly
      clickable
      label
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showPicker: false,
      columns: [
        "北京市",
        "天津市",
        "石家庄市",
        "唐山市",
        "秦皇岛市",
        "邯郸市",
        "邢台市",
        "保定市",
        "张家口市",
        "承德市",
        "沧州市",
        "廊坊市",
        "衡水市",
        "太原市",
        "大同市"
      ]
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less" scoped>
.van-field__label {
  width: 5vw;
}
</style>



