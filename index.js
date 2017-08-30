function iterativeLog(arr) {
  arr.forEach( (el, i) => {
    console.log(`${i}: ${el}`);
  });
}

function iterate(callback) {
  var arr = ["not empty"];
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, cb){
  arr.forEach(cb);
}
