function iterativeLog(array){
  array.forEach((e, i) => {
    console.log(`${i}: ${e}`)
  })
}

function iterate(callback){
  var array = [1, 2, 3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
  return array
}