var bs = 0;
for (var i = 0; i <= 20; i++) {
  for (var j = 0; j <= 50; j++) {
    for (var k = 0; k <= 6; k++) {
      if (i * 5 + j * 2 + k * 5 == 100) {
        bs++
      }
    }
  }
} alert(bs);



for (var i = 0; i <= 50; i++) {
  for (var j = 0; j <= 100; j++) {
    for (var k = 0; k <= 100; k++) {
      if (i * 2 + j * 1 + k / 2 == 100 && i + j + k == 100) {
        document.write("horse" + i + "")
      }
    }
  }
}



var array = [1, 2, 3, 2, 3, 0, 2, 7, 3, 2];
var newArray = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] == 0) continue;
  newArray.push(array[i]);
} alert(newArray);