
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
  