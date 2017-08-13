function iterativeLog(arr){
  arr.forEach( (el, i) => {
    console.log(`${i}: ${el}`);
  });
}

function iterate(callback){
  var arr = [1, 2, 3, 4, 5];
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
