export function userN(state,option){    
    localStorage.setItem('Name',JSON.stringify(option.data.name))
    state.userName = option.data.name   
}

export function isLogins(state,option=[]){
    if(option.data){
       
        localStorage.setItem('img',JSON.stringify(option.img))
        
        state.img = option.img
    }
    localStorage.setItem('flag',JSON.stringify(option.data))
    state.flag = option.data
   
    console.log(option.img);
    
}


export const add = (state, option) => {
    state.count += option.n
}