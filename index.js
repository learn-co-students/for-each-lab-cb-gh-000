function iterativeLog(array){
  return array.forEach((element, index) => {
    log(element, index)
  })
}

function log(element, index){
  console.log(`${index}: ${element}`)
}

function iterate(callback){
  var array = ["Hello", "Bob", 1 ,2 , 3];
  array.forEach(callback)
  return array
}
