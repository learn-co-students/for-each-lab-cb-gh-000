function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });

}

function iterate(callback){
  var myArr = [0,1,2,3,4]
  myArr.forEach(callback)
  return myArr
}

function doToArray(array, callback){
  array.forEach(callback)
}
