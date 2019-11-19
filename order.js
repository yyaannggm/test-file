var numbers = [1,2,5,3,4,6];
var count = 0;

for (var i = 0; i < numbers.length - 1; i++) {
  count++;

  for (var j = 0; j < numbers.length - 1 - i; j++) {
    count++;

    if (numbers[j] > numbers[j + 1]) {
      var ord = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = ord;
    }
  }
}
console.log(numbers);
console.log(count);