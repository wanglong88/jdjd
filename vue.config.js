module.exports = {
    // publicPtah:'./',
    lintOnSave:false,
    devServer:{
        // 本地访问localhost:8080的时候 由node把请求转接到代理地址
        proxy:'http://localhost:8888'
    }
}
//     publicPath:'./',
//     devServer:{
//         // proxy代理
//         proxy:'http://localhost:3000'
//     },
//     lintOnSave:false,// 不让eslint报错
// }
