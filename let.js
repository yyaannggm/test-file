var a = 99;
fu();
console.log(a);
function fu() {
  console.log(a);
  var a = 10;
  console.log(a);
}

(function () {
  console.log(varTest);
  console.log(letTest);

  var varTest = 'test var';
  let letTest = 'test let';
}());