module.exports = {
    // publicPtah:'./',
    lintOnSave:false,
    devServer:{
        // 本地访问localhost:8080的时候 由node把请求转接到代理地址
        proxy:'http://localhost:8888'
    }
}