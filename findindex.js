var value = [1, 5, 10, 15].findIndex(function (element, index, array) {
  return element > 9;
});
var value2 = [1, 5, 10, 15].findIndex(function (element, index, array) {
  return element > 20;
});

console.log(value);
console.log(value2);