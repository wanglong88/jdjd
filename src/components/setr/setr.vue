<template>
  <div class="bigBox">
    <header class="headerBox">
      <div class="lt iconOne">
        <van-icon name="arrow-left" size="30" @click="$router.go(-1)"/>
      </div>
      <p class="rt">账户设置</p>
    </header>
    <main class="mainBox">
      <div class="box1">
        <div class="imgBox lt">
          <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="nameBox">
          <p class="p1">xxxxx</p>
          <p class="p2">用户名:xxxxx</p>
        </div>
        <span class="awwow rt">
          <van-icon name="arrow" size="30" />
        </span>
      </div>
      <div class="box2 cl">
        <p class="lt">地址管理</p>
        <span class="rt">
          <van-icon name="arrow" size="25" />
        </span>
      </div>
    </main>

    <div class="box3">
      <span>
        <router-link to class="tipOne">
          <p class="col1">账户与安全</p>
          <p>
            领取百万账户险
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
      <span>
        <router-link to class="tipTwo">
          <p class="col1">账户设置</p>
          <p>
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
      <span>
        <router-link to class="tipThree">
          <p class="col1">增票资质</p>
          <p>
            添加增票资质
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
      <span>
        <router-link to class="tipFour">
          <p class="col1">我的档案</p>
          <p>
            添加汽车/宝宝等档案
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
      <span>
        <router-link to class="tipFive">
          <p class="col1">通用</p>
          <p>
            清除本地缓存
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
    </div>

    <div class="box4">
      <span>
        <router-link to class="tipOne">
          <p class="col1">账户与安全</p>
          <p>
            领取百万账户险
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
      <span>
        <router-link to class="tipTwo">
          <p class="col1">账户设置</p>
          <p>
            <van-icon name="arrow" size="20" />
          </p>
        </router-link>
      </span>
    </div>
    <span>
      <van-button round type="info" >退出登录</van-button>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bigBox {
  background: whitesmoke;
}
.headerBox {
  background: white;
  height: 13vh;
  background:url('../../assets/jd2.jpg') no-repeat;
  .iconOne {
    box-sizing: border-box;
    margin: 45px 0 0 10px;
  }
  > p {
    line-height: 13vh;
    box-sizing: border-box;
    color: black;
    font-size: 24px;
    margin: 20px 150px 0 0;
  }
}
.mainBox {
  background: white;
  border: 0.5px solid #ccc;
  border-radius: 10px;
  .box1 {
    display: flex;
    justify-content: space-between;
    margin: 15px 15px 0 15px;
    .nameBox {
      margin: 10px 10px 10px 10px;
      font-size: 19px;
      color: black;
    }
    .awwow {
      margin: 25px 10px 0 130px;
    }
  }
  .box2 {
    border-top: 0.5px solid #ccc;
    margin: 20px 10px;
    padding-top: 20px;
    p {
      font-size: 20px;
      color: black;
    }
  }
}
.box3 {
  background: white;
  border-radius: 15px;
  border-top: 0.5px solid #ffffff;
  // border-bottom: 0.5px solid #ccc;
  margin: 30px auto;
  .tipOne,
  .tipTwo,
  .tipThree,
  .tipFour,
  .tipFive {
    display: flex;
    justify-content: space-between;
    color: #ccc;
    margin: 15px 10px;
    height: 5vh;
    line-height: 5vh;
    font-size: 15px;
    border-bottom: 0.5px solid #ccc;
    .col1 {
      color: black;
    }
  }
}
.box4 {
  background: white;
  border-radius: 15px;
  border-top: 0.5px solid #ffffff;
  // border-bottom: 0.5px solid #ccc;
  margin: 30px auto;
  .tipOne,
  .tipTwo,
  .tipThree,
  .tipFour,
  .tipFive {
    display: flex;
    justify-content: space-between;
    color: #ccc;
    margin: 15px 10px;
    height: 5vh;
    line-height: 5vh;
    font-size: 15px;
    border-bottom: 0.5px solid #ccc;
    .col1 {
      color: black;
    }
  }
}

</style>