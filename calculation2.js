var array = [2, 34, 2, 5, 6, 9, 8, 4, 34, 67, 6];
var newArray = [];
var flag = true;
for (var i = 0; i < array.length; i++) {
  flag = true;
  for (var j = 0; j < newArray.length; j++) {
    if (newArray[j] == array[i]) {
      flag = false;
    }
  };
  if (flag) {
    newArray.push(array[i])
  }
} console.log(newArray);

