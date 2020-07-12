function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var items = [" "];
  items.forEach(callback);
  return items;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
