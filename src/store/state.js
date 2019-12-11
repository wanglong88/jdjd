let userName = JSON.parse(localStorage.getItem('Name')||[]);

export default {
    flag:false,
    userName:userName ||[]
}