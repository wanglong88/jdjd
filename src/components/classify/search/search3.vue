<template>
  <div class="aa">
      
    <ul class="bb">
      <li v-for="(item,index) in ary" :key="index">
        <div class="imgbox">
          <img :src="item.img" alt />
        </div>
        <div class="tuxia">
          <div class="min">
            <i>
              <img src="//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/62842/26/16626/3386/5ddf389cEd91a6f80/13fcdbc8f4c0eb88.png" alt="">
            </i>

            <span>{{item.name}}</span>
          </div>
          <div class="pri">
            <i>￥</i> {{item.price}}.
            <i>00</i>
          </div>
          <div class="de">{{item.desc}}</div>
          <div class="shop">
            特麦母婴专营店
            <van-icon class="you" name="arrow" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "search3",
  data() {
    return {
      ary: [
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "199",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "299",
          desc: "300条评价",
          id: "",
          img:
            "////img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "299",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "44",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "444",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
        {
          name:
            "特步童鞋 儿童运动鞋男童跑鞋2019秋冬新款皮面防水中大童休闲鞋 黑红 35",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/46054/5/13401/160845/5da2fe09E076fb79a/b286c4f81c7166df.jpg!q70.dpg.webp"
        },
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.aa {
  width: 100vw;
  height: 126vw;
  overflow: scroll;
  box-sizing: border-box;
  
  > .bb {
    width: 95vw;
    height: 100vw;
    box-sizing: border-box;
    margin: auto;
    > li {
      width: 45vw;
      height: 80vw;
      border: 1px solid #ccc;
      box-sizing: border-box;
      display: inline-block;
      margin-left: 2.5vw;
      margin-top: 2vw;
      > .imgbox {
        width: 100%;
        height: 60%;
        border-bottom: 1px solid #ccc;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      > .tuxia {
        width: 90%;
        height: 40%;
        > .min {
          // background: red;
          margin-left: 2vw;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          position: relative;
          left: 1vw;
          color: #333;
          font-size: 14px;
          i {
            width: 13vw;
            height: 5.5vw;
            display: inline-block;
            // background: gold;
            img {
              width: 14vw;
              height: 100%;
              margin: auto;
              position: relative;
              top: 1vw;
              left: -2vw;
            }
          }
        }
        > .pri {
          color: #e93b3d;
          position: relative;
          left: -9vw;
          top: 2vw;
          font-size: 18px;
          > i {
            font-size: 14px;
          }
        }
        > .de {
          position: relative;
          top: 2vw;
          left: -9vw;

          color: #999999;
          font-size: 14px;
        }
        > .shop {
          position: relative;
          top: 2.5vw;
          color: #999999;
          left: -5vw;
          font-size: 12px;
          .you {
            position: relative;
            top: 1vw;
          }
        }
      }
    }
  }
}
</style>