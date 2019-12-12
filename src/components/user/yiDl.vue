<template>
  <div>
    <div class="two lt">
      <van-image round width="6rem" height="6rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <!-- <van-image round width="6rem" color='#ccc' height="6rem" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2611319105,3497875243&fm=26&gp=0.jpg" /> -->
      <span @click="btn">
         {{U}}     
        <a href="javascript:;">
          <van-icon name="arrow" />
        </a>
      </span>
      <div @click="btn2">退出登录</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: "XXX",
  data() {
    return {
        U:''
    };
  },
  created(){
    let use = this.$store.state.userName
     this.U = use
//   axios.get('/user/info',{
//       params:{userId}
//   }).then(data=>{

//   })
    
     
  },
  methods:{
   btn(){
       this.$router.push("/login");
   },
   btn2(){
     axios.post('/delSession').then(data=>{
       if (data.code==0) {
         console.log('退出成功');
         
         this.$router.push("/login");
       }
     }).catch(err=>{
       console.log('0000000');
       
     })
   }
  },
  components: {}
};
</script>
<style lang="less">
</style>