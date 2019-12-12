<template>
  <div class="aa">
      
    <ul class="bb">
      <li v-for="(item,index) in ary" :key="index">
        <div class="imgbox">
          <img :src="item.img" alt v-lazy="item.img" />
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
            "特步男童鞋儿童运动鞋 男女鞋中大童网面透气软底跑步鞋儿童鞋 红黑-革面9557 37码",
          price: "299",
          desc: "300条评价",
          id: "",
          img:
            "//img10.360buyimg.com/n2/s370x370_jfs/t1/86400/29/5733/194973/5def822dE39a22d0c/4a5973bcde2b40a3.jpg!q70.jpg"
        },
        {
          name:
            "童鞋女童加绒高帮运动鞋2019秋冬季新款中大童软底防滑休闲儿童鞋子 黑色加绒 33码内长20.7cm",
          price: "299",
          desc: "300条评价",
          id: "",
          img:
            "//img13.360buyimg.com/mobilecms/s270x270_jfs/t1/49035/39/14838/144524/5dbba52fE4ca1a0cc/0a76b1ae157bf893.jpg!q70.dpg.webp"
        },
        {
          name:
            " 特步童鞋2019秋冬男女儿童运动休闲鞋小童鞋子 黑红9327 #29",
          price: "44",
          desc: "300条评价",
          id: "",
          img:
            "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/96799/28/6264/167531/5df1e309Ef5f9b4c8/a0dff81a2703ff9c.jpg!q70.dpg.webp"
        },
        {
          name:
            " 童鞋女童真皮鞋子加绒儿童运动鞋2019年秋冬季新款中大童软底防滑小女孩老爹鞋 红色加绒 33码/鞋内长20.8CM  ",
          price: "444",
          desc: "300条评价",
          id: "",
          img:
            "//img10.360buyimg.com/mobilecms/s270x270_jfs/t1/63474/34/14033/211728/5db550e8E3a6ec1ab/428d2bb7c807e034.jpg!q70.dpg.webp"
        },
        {
          name:
            "  安踏(ANTA)官方旗舰店儿童童鞋女中大童轻便透气跑步鞋运动鞋A32915556黑/荧光活力粉/安踏白-1/36",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img10.360buyimg.com/mobilecms/s270x270_jfs/t1/63474/34/14033/211728/5db550e8E3a6ec1ab/428d2bb7c807e034.jpg!q70.dpg.webp"
        },
        {
          name:
            "  童鞋儿童棉鞋冬季加绒男童鞋女童小白鞋高帮鞋宝宝运动鞋中大码小孩鞋子男中大童板鞋学生休闲鞋小熊底跑步鞋 DS-星屹&A-2米色-皮面 31码/19cm  ",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img10.360buyimg.com/mobilecms/s270x270_jfs/t1/47617/16/14171/164295/5dafae5fE24104dfb/adf2aac04196e308.jpg!q70.dpg.webp"
        },
        {
          name:
            "  童鞋女童鞋2019年秋冬季新款中大儿童运动鞋小女孩保暖二棉鞋防滑休闲鞋子 黑色加绒 33鞋内长20.7cm",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img13.360buyimg.com/mobilecms/s270x270_jfs/t1/99557/33/3392/159405/5de073bdEbf8edfd8/efe85b2581072bb7.jpg!q70.dpg.webp"
        },
        {
          name:
            "  卡芙秀童鞋女童加绒加厚保暖运动鞋2019新款时尚小白鞋百搭软底儿童休闲加棉跑步鞋 白色加棉 33码内长20.2cm   ",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img10.360buyimg.com/mobilecms/s270x270_jfs/t1/64015/25/13436/210811/5da9b004Eb53b887e/c60f1730d2e16457.jpg!q70.dpg.webp"
        },
        {
          name:
            "    童鞋女童真皮鞋子加绒儿童运动鞋2019年秋冬季新款中大童软底防滑小女孩老爹鞋 红色加绒 34码/鞋内长21.4CM ",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img10.360buyimg.com/mobilecms/s270x270_jfs/t1/63474/34/14033/211728/5db550e8E3a6ec1ab/428d2bb7c807e034.jpg!q70.dpg.webp"
        },
        {
          name:
            " 童鞋女童鞋2019秋冬季新款儿童运动鞋中大童软底防滑休闲鞋小女孩防滑防水二棉鞋子 白色大棉（适合北方） 33码/内长20.7CM",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img13.360buyimg.com/mobilecms/s270x270_jfs/t1/96093/30/3442/178625/5de07334E479a6918/11c85aba59a4823e.jpg!q70.dpg.webp"
        },
        {
          name:
            "卡芙秀童鞋2019秋季新款儿童加绒保暖运动鞋针织弹力女童加棉袜子鞋高帮宝宝鞋子男童潮鞋 米色 30码内长19cm  ",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img13.360buyimg.com/mobilecms/s270x270_jfs/t1/100769/25/115/198369/5da73bfdE01a4b169/1b7f38e0d3911568.jpg!q70.dpg.webp"
        },
        {
          name:
            " 雨帛童鞋儿童运动鞋加绒2019冬季新款男女童跑步鞋中大童学生防滑皮面休闲鞋 粉色单里 31码(内长约19.5cm)  ",
          price: "123",
          desc: "300条评价",
          id: "",
          img:
            "//img12.360buyimg.com/mobilecms/s270x270_jfs/t1/60746/27/12424/251179/5d9c9788Ec1a76205/ad078f2e07dd6f3e.jpg!q70.dpg.webp"
        },
        {
          name:
            "  卡芙秀童鞋女童加棉运动鞋2019春秋新款儿童网红老爹鞋加绒运动鞋童鞋潮 29633粉红色 30码内长19cm  ",
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