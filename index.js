
function iterate(callback) {
  var array0 = [1,2,3,4,5];
  array0.forEach(callback);
  return array0;
}

function doToArray(array,callback) {
  array.forEach(callback);
}

function iterativeLog(array) {
  array.forEach((item,index,array) => {
    console.log(`${index}: ${item}`);
  });
}
