var a = 99;
fu();
console.log(a);
function fu() {
  console.log(a);
  var a = 10;
  console.log(a);
}
