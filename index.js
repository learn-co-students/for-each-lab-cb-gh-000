function iterativeLog(arr){
  arr.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  }
}

function iterate(callback){
  var arr = ["cat","dog", "mouse"]
  arr.forEach(callback)
  return arr
}

function doToArray(array,callback){
  array.forEach(callback)
}
