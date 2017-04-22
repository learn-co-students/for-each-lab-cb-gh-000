function iterativeLog(array) {
    array.forEach(function(val, index) {
      console.log(`${index}: ${val}`);
    });
}
function iterate(callback){
  var arr = [1,2,3,4];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
}