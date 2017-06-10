function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var array = ["Gabriel", "Michael", "Ariel", "Sariel"]
  array.forEach(callback);
  return array
}

//- Define a function, `doToArray` that accepts an array and a callback. Call `.forEach()` on the array, passing the callback as the `forEach` callback.

function doToArray(array, callback) {
  array.forEach(callback)  
}
