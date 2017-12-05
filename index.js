function test(value, index){
  return console.log(`${index}: ${value}`);
}
function iterativeLog(array) {
  array.forEach(test);
}
function iterate(callback) {
  var array = ["Victor"]
  array.forEach(callback)
  return array
}
function doToArray(array, callback){
  array.forEach(callback)
}
