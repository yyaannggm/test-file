var array = ["a","b","c","d","e","f","g","s"];
let str="abcdedsdfgh";


let show=str.substr(-4,4);
let noShow=str.substr(0,str.length-4);
let result=noShow.replace(/./g,'*');

console.log(result);
console.log(show);
