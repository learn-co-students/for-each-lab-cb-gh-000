
function iterativeLog(array){
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var arr1 = [1, 2, 3];
  arr1.forEach(callback);
  return arr1;
}

function doToArray(ar, callback){
  ar.forEach(callback);
}
