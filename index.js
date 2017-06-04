function iterativeLog(array) {
  array.forEach((elem, ind) =>  {
    console.log(`${ind}: ${elem}`)
  })
}

function iterate(callback) {
  var array = ["1"]
  array.forEach((elem) => {
    return callback(elem)
  })
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
