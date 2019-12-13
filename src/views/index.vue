<template>
  <div>
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item  to="/home">
      <img src="../assets/logo/download.png" class="logos" alt="">
      </van-tabbar-item>
      <van-tabbar-item  to="/classify">
      <img src="../assets/logo/2.png" class="logos" alt="">
      </van-tabbar-item>
      <van-tabbar-item >
        <img src="../assets/logo/3.gif" class="logos" alt="">
      </van-tabbar-item>
      <van-tabbar-item  to="/shooping">
      <img src="../assets/logo/4.png" class="logos" alt="">
      </van-tabbar-item>
      <van-tabbar-item  to="/user">
      <img v-if="$store.state.flag" src="../assets/logo/5.png" class="logos" alt="">
      <img v-if="!$store.state.flag" src="../assets/logo/6.png" class="logos" alt="">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src
 import axios from 'axios'
// import {getpic} from "@/api/index.js";
export default {
  data() {
    return {
      data:'',
    };
  },
  created(){
  let Log = localStorage.getItem('login')
  axios.get('/logs').then(data=>{
    if (data.data.code==0) {
      this.$store.state.flag = true
    }
  })
  console.log(JSON.parse(Log));
  
  },
  methods:{
    //  fn(){
    //    getpic().then(data=>{
    //    console.log(data);
    //  }).catch(()=>{

    //  })
    //  }
  }
}
</script>
<style lang="less" scoped>
.logos{
  width: 16vw;
}
</style>