
//Array.filter
let arr = [1, 2, 3, 4, 5]
const a = value => value >= 3
let newArr = arr.filter(a)


//Array.every
let arr = [1, 2, 3, 4, 5]
const isLessThan4 = value => value < 4
const isLessThan6 = value => value < 6
arr.every(isLessThan4)
arr.every(isLessThan6)


//Array.some
let arr = [1, 2, 3, 4, 5]
const isLessThan4 = value => value < 4
const isLessThan6 = value => value > 6
arr.some(isLessThan4)
arr.some(isLessThan6)


//Array.reduce
let arr = [1, 2, 3, 4, 5]
const add = (a, b) => a + b
let sum = arr.reduce(add)


//Array.shift
let arr = [1, 2, 3, 4, 5]
arr.shift()
console.log(arr)
console.log(arr.length)

//Array.unshift
let arr = [1, 2, 3, 4, 5]
arr.unshift(6, 7)
console.log(arr)
console.log(arr.length)

//Array.concat
let arr1 = [1, 2, 3]
arr2 = [4, 5]
let arr = arr1.concat(arr2)
console.log(arr)

//Array.splice
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(2, 0, 'haha')
let arr2 = arr.splice(2, 3)
let arr1 = arr.splice(2, 1, 'haha')
console.log(arr1)
console.log(arr2)
console.log(arr3)