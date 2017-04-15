function iterativeLog(array) {
  array.forEach( (each, index) => {
    console.log(`${index}: ${each}`)
  })
}

function iterate(callback) {
  var array = [1,2,3,4,5,6];
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
