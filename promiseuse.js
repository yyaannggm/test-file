function loadImg(url) {
  let img = new Image()
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = () => {
      console.log(url)
      resolve()
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}


loadImg(url1).then(() => {
  return loadImg(url2)
}).then(() => {
  return loadImg(url3)
})