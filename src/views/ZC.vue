<template>
  <div class="loginBox cl">
    <header>
      <div class="arrowBox">
        <van-icon name="arrow-left" size="25px" class="arrow" @click="$router.back()" />
        <div class="txt">京东登录注册</div>
      </div>
    </header>
    <main>
      <div class="inpBox">
        <input type="text" class="inp1" placeholder="用户名/邮箱/手机号" v-model="name" />
        <!-- <van-icon name="cross" size="10px" /> -->
        <input type="password" class="inp2" placeholder="输入密码" v-model="pas" />
      </div>
      <div class="loginIcon" @click="fn">注册</div>
      <div class="yzBox cl">
        <span class="lt">短信登录验证</span>
        <span class="rt">手机快速注册</span>
      </div>
    </main>
    <footer>
      <!-- <van-divider></van-divider> -->
      <van-divider
        size="17px"
        :style="{ color: '#1989fa', borderColor: 'blue', padding: '0 16px' }"
      >其他登录方式</van-divider>
      <div class="qwxBox">
        <span>
          <van-icon name="chat-o" size="30px" />
        </span>
        <span>
          <van-icon name="smile-comment-o" size="30px" />
        </span>
      </div>
      <p>
        登录即代表您已经同意
        <a href="javascript:;">京东隐私政策</a>
      </p>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import { Dialog } from "vant";
export default {
  name: "XXX",
  data() {
    return {
      name: "",
      pas: ""
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    btn() {},
    fn() {
      if (!this.name || !this.pas) {
        Dialog.alert({
          message: "用户名密码不能为空"
        }).then(() => {
          // on close
        });
        return;
      }

      axios
        .post("/sign", { username: this.name, password: this.pas })
        .then(data => {
          console.log(data);
          if (data.data.code == 0) {
            console.log("注册成功");
            Dialog.alert({
              message: "注册成功,返回登录!"
            }).then(() => {
             this.$router.push("/login");
            });
            
          } else {
            console.log("该用户已注册");
          }
        })
        .catch(err => {
          console.log(err, "注册失败");
        });

      // this.$store
      //   .dispatch("userN", { username: this.name, password: this.pas })
      //   .then(data => {
      //     console.log(data);
      //     if (data.code == 0) {
      //       //  this.$router.push('')
      //       // console.log(data.data)
      //       console.log(this.$store.state.userName);
      //       // this.$store.state.
      //       console.log("登录成功");
      //       this.$router.push("/");
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err, "失败");
      //   });
    }
  }
};
</script>
<style lang="less" scoped>
.arrowBox {
  width: 100%;
  height: 30px;
  margin-top: 3vw;
  > .arrow {
    float: left;
  }
  > .txt {
    text-align: center;
    color: black;
    font-size: 25px;
  }
}
.inpBox {
  width: 10vw;
  height: 8vw;
  > .inp1 {
    text-align: center;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 90vw;
    height: 6vh;
    margin: 20px auto;
  }
  > .inp2 {
    text-align: center;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 90vw;
    height: 6vh;
    margin: 10px auto;
  }
}
.loginIcon {
  margin: 150px auto;
  background: rgb(247, 114, 114);
  width: 80vw;
  height: 10vh;
  text-align: center;
  line-height: 10vh;
  border-radius: 36px;
  font-size: 30px;
}
.yzBox {
  width: 90vw;
  height: 10vh;
  position: absolute;
  margin: -135px 20px;
  font-size: 17px;
}
.qwxBox {
  width: 30vw;
  height: 10vh;
  margin: 2vh auto;
  span:nth-child(1) {
    margin: 10px 20px;
  }
}
</style>