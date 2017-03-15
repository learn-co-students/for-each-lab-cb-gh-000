function iterativeLog(array) {
  array.forEach((element, index, array) => (console.log(`${index}: ${element}`)))
  return array
}

function iterate(callback) {
  var arr = ["cats", "dogs"]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}