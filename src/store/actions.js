import { Login } from "../api/index";

export  function userN({commit},option){
   
  return Login(option).then(data=>{
      console.log(data);
      
    if(data.code == 0){
        console.log(666);
        
        commit('userN',{
            data:data.data
        })
          }
          return data
  })
}