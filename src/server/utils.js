function checkFrom (from) {
  return new Promise((resolve, reject) => {
    from.validateFields((err, values) => {
      if (!err) {
        resolve(values)
      }
      reject(err)
    })
  })
}

export default {
  checkFrom
}
