
function iterativeLog(array) {
  array.forEach ((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var heroes = ["mi", "ni", "ci"]
  heroes.forEach(callback)
  return heroes
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
