function iterativeLog(arr) {
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  let arr = [1, 2, 3]
  arr.forEach(callback)

  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
