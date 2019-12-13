<template>
  <div>
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item  to="/home">
      <img src="../assets/logo/download.png" class="logos" alt="">
      </van-tabbar-item>
      <van-tabbar-item  to="/classify?type=1">
      <img src="../assets/logo/2.png" class="logos" alt="">
      </van-tabbar-item>
      <van-tabbar-item>
        
        <a href="https://wq.jd.com/webportal/event/27358?ptag=138097.1.19&sceneval=2">
          <img src="../assets/logo/3.gif" class="logos" alt />
        </a>
      </van-tabbar-item>
      <van-tabbar-item to="/shooping">
        <img src="../assets/logo/4.png" class="logos" alt />
      </van-tabbar-item>
      <van-tabbar-item  to="/user">
      <img v-if="flag" src="../assets/logo/5.png" class="logos" alt="">
      <img v-if="!flag" src="../assets/logo/6.png" class="logos" alt="">
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
      flag:false
    };
  },
  created(){
  axios.get('/isLogin').then(data=>{
    if (data.data.code==0) {
        this.flag = true
    }
  })

  
  },
  methods:{  
  }
}
</script>
<style lang="less" scoped>
.logos {
  width: 16vw;
}
</style>