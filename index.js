function iterativeLog(arr) {
  arr.forEach((elem, index) => {
    console.log(`${index}: ${elem}`)
  });
}

function iterate(func) {
  elems = [0, 2, 4, 6, 8, 10]
  elems.forEach(func)
  return elems
}

function doToArray(array, callback) {
  array.forEach(callback);
}