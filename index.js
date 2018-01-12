function iterativeLog(array) {
  array.forEach((item, index)=>{
    console.log(`${index}: ${item}`);
  })
}
function iterate(callback) {
  var arry = ['siema', 'to', 'ja']
  arry.forEach(callback);
  return arry;
}
function doToArray(array, callback) {
  array.forEach(callback)
}
