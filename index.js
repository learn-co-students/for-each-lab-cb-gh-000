function iterativeLog(array) {
    array.forEach(array => {
      console.log(`${index}: ${element}`);
    })
}

function iterate(callback) {
  var array = ['things'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
