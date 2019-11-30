function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

var numbers = [4, 38];
add(...numbers)


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);