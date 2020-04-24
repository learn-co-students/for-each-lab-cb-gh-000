function iterativeLog(array){
  array.forEach((element, index, array) => console.log(`${index}: ${element}`))
  }

function iterate(callback){
  arr = ["hp77"]
  arr.forEach(callback)

  return arr
}


function doToArray(array, callback){
  array.forEach(callback)
}
