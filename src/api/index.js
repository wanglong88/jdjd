
import http from './http'

export function getpic(option){
    return http.get('/jingdong/pic',{
        params:option
    }).then(data=>{
        // console.log(data)
    }).catch((d)=>{
       
    })
  }
  export function getDpList(){
    return http.get('/department/list')
  }
  //登录状态接口
  export function isLogin(){
    return http.get('/isLogin')
  }

  // 登录接口
export function Login(option){
    return http.post('/login',option)
}
  
// import axios from 'axios'

// let http = axios.create({
//     // baseURL:'', //打包之前这个位置需要写成自己的后台地址
//     params: {
//         t: Math.random()
//     }

// })
// 添加请求拦截器
// http.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     if(config.data){
//         config.data.token = localStorage.getItem('token');
//     }else{
//         // config.params.token = localStorage.getItem('token');
//     }
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

// // 添加响应拦截器
// http.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response.data;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

// export default http
