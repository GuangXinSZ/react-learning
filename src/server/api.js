function orderList () {
  return new Promise((reslove, reject) => {
    let arr = []
    let k = 0
    for (let i = 0; i < 12; i++) {
      arr.push({
        meals: `${i}`,
        enable: false
      })
      k += 1
    }
    if (k === 12) {
      reslove(arr)
    } else {
      reject('error')
    }
  })
}

export default {
  orderList
}