
var array = [];
var newArray = [];

for (var i = 0; i < 100; i++) {
  array[i] = parseInt(Math.random() * 50 + 10);
}
console.log("random number" + array);

for (var i = 0; i < array.length;) {
  var count = 0;
  for (var j = i; j < array.length; j++) {
    if (array[i] == array[j]) {
      count++;
    } else {
      break;
    }
  }
  newArray.push([array[i], count]);
  i += count;
}

for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i][0] + "repeat:" + newArray[i][1]);
}
