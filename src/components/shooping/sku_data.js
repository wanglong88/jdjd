export default {
  sku: {
    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    tree: [
      {
        k: '颜色',
        k_id: '1',
        v: [
          {
            id: '30349',
            name: '白色',
            imgUrl:
              'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/95138/6/560/228352/5dafb8d7Eeaf2788b/a15e1d780e0c8f34.jpg!q80.dpg.webp'
          },
          {
            id: '1215',
            name: '黑色'
          }
        ],
        k_s: 's1',
        count: 2
      },
      {
        k: '尺寸',
        k_id: '2',
        v: [
          {
            id: '1193',
            name: 'XXXL'
          },
          {
            id: '1194',
            name: 'L'
          }
        ],
        k_s: 's2',
        count: 2
      }
    ],
    // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
    list: [
      {
        id: 2259,
        price: 12000, //价格
        discount: 122,
        color: '白色',
        size: 'XXXL',
        s1: '1215',
        s2: '1193',
        stock_num: 20, //库存 
        goods_id: 946755,
        imgUrl:
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/95138/6/560/228352/5dafb8d7Eeaf2788b/a15e1d780e0c8f34.jpg!q80.dpg.webp'

      },
      {
        id: 2260,
        price: 11000,
        discount: 112,
        size: 'L',
        color: '白色',
        s1: '1215',
        s2: '1194',
        stock_num: 50, //库存 
        goods_id: 946755,
        imgUrl:
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/95138/6/560/228352/5dafb8d7Eeaf2788b/a15e1d780e0c8f34.jpg!q80.dpg.webp'

      },
      {
        id: 2257,
        price: 13000,
        discount: 132,
        s1: '30349',
        color: '黑色',
        size: 'XXXL',
        s2: '1193',
        stock_num: 40, //库存 
        goods_id: 946755,
        imgUrl: 'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/75128/25/14063/113446/5db7f543E81ca12b4/2f7d17c6976b5843.jpg!q70.dpg.webp'
      },
      {
        id: 2258,
        price: 10000,
        discount: 100,
        s1: '30349',
        color: '黑色',
        size: 'L',
        s2: '1194',
        stock_num: 50, //库存 
        goods_id: 946755,
        imgUrl: 'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/75128/25/14063/113446/5db7f543E81ca12b4/2f7d17c6976b5843.jpg!q70.dpg.webp'
      
      }
    ],
    price: '5.00',
    stock_num: 227, // 商品总库存
    none_sku: false,  // 是否无规格商品 
    hide_stock: false  // 是否隐藏剩余库存
  },
  goods_id: '946755',
  quota_used: 0,  //已经购买过的数量
  goods_info: {
    title: '测试商品A',
    picture:
      'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/75128/25/14063/113446/5db7f543E81ca12b4/2f7d17c6976b5843.jpg!q70.dpg.webp'
  },
  initialSku: {
    s1: "0001",
    s2: "1001",
    selectedNum: 3
  }
};