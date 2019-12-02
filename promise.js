function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  })
}
sleep(500).then(() => console.log("finished"));



let promise = new Promise(function (resolve, reject) {
  console.log("1");
  resolve();
});
setTimeout(() => console.log("2"), 0);
promise.then(() => console.log("3"));
console.log("4");