function iterativeLog(array) {
  array.forEach(function(el, index, arr) {
    console.log(`${index}: ${el}`)
  })
}

function iterate(callback) {
  var array = [1, 2, 4]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}