let userName = JSON.parse(localStorage.getItem('Name')||[]);
let flag = JSON.parse(localStorage.getItem('flag'));
let img = JSON.parse(localStorage.getItem('img'));
// let userName = []

export default {
    flag:flag,
    userName:userName,
    img:img,
    count: 0   
}