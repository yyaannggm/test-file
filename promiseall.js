let urls = ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3293635140,3955114282&fm=26&gp=0.jpg",
  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1019333328,1858047370&fm=26&gp=0.jpg"
]

function loadImg(url) {
  let img = new Image()
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}

function loadAll(arr) {
  let result = []
  arr.forEach(item => {
    let p = loadImg(item).then((img) => {
      console.log(img)
    })
    console.log(p)
    result.push(p)
  });
  Promise.all(result).then(() => {
    console.log("done")
  }).catch((err) => {
    console.log(err)
  });
}
loadAll(urls)