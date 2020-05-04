function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
    console.log("debug")
  })
}

function iterate(callback) {
  var array = ["person1", "person2"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
