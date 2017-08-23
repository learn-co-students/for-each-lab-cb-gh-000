function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  arr = ['jhondee','treefunk','rubick']
  arr.forEach(callback)
  return arr;
}

function doToArray(array,callback){
  array.forEach(callback)
}
