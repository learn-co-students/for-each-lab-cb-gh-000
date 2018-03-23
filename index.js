function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let array = ['bread', 'milk', 'cheese'];

  callback(array);

  return array;
}

function doToArray(array, callback) {
  array.forEach(function() {
    callback();
  });
}
