import { Login,isLogin } from "../api/index";

// 登录
export  function userN({commit},option){
   
  return Login(option).then(data=>{      
    if(data.code == 0){
        
        commit('userN',{
            data:data.data
        })
          }
          return data
  })
}

// 验证登录
 export function isLogins({commit}){
   
    return isLogin().then(data=>{
      console.log(data);
      
       if(data.code==0){
         commit('isLogins',{
           data:true,
           img:data.img
         })
       }else{
        commit('isLogins',{
          data:false
        })
       }
    })
 }



export function add(store, option) {
    setTimeout(() => {
        store.commit('add', option)
    }, 1000)
}