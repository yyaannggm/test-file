function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  })
}
sleep(500).then(() => console.log("finished"));