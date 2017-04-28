function iterativeLog(array) {
  array.forEach(
                  (element, index) => {
                    console.log(`${index}: ${element}`);
                  }
                );
}

function iterate(callBack) {
  var array = ["Hello", "World"];
  array.forEach(callBack);
  return array;
}

function doToArray(array, callBack) {
  array.forEach(callBack);
}
