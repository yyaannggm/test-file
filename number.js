const test1 = new Boolean(true);
console.log(Number(test1));
const test2 = new Boolean(false);
console.log(Number(test2));
const test3 = new Date();
console.log(Number(test3));
const test4 = new String("999");
console.log(Number(test4));
const test5 = new String("999 888");
console.log(Number(test5));


const str = "123.456-#mmm"
console.log(Number(str)); // NaN
console.log(parseFloat(str));// 123.456
console.log(parseInt(str)); // 123

const str2 = 'kk123.456';
console.log(Number(str2));// NaN
console.log(parseInt(str2));// NaN
console.log(parseFloat(str2));// NaN

const str1 = ' 123.456  ';
console.log(Number(str1));// 123.456
console.log(parseInt(str1));// 123
console.log(parseFloat(str1));// 123.456

const str3 = '3.45 6';
console.log(Number(str3));// NaN
console.log(parseInt(str3));// 3
console.log(parseFloat(str3));


const n = 999;
console.log(Number.isFinite(n));
const m = Infinity;
console.log(Number.isFinite(m));


console.log(Number.isSafeInteger(3));// true
console.log(Number.isSafeInteger(9.6)); // false
console.log(Number.isSafeInteger(Infinity));