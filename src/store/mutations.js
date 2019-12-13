export function userN(state,option){
    console.log(option.data.name);
    localStorage.setItem('Name',JSON.stringify(option.data.name))
    state.userName = option.data.name
    console.log(state.userName);

}