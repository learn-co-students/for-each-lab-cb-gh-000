function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`);
  })
  return 0;
}
function iterate(callback){
  var array = ["test","foo"];
  array.forEach(callback);
  return array;
}
function doToArray(array,callback){
  array.forEach(callback);
}