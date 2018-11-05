function iterativeLog(array){
  array.forEach((element, index)=>{
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var array = [1,23,4,4,5];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
