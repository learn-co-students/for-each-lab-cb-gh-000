var iterativeLog = function(array) {
  var currentValue = 0;
  var index = 0;
  array.forEach(function callback(currentValue, index, array) {
    console.log(`${index}: ${array[index]}`);
})
}

var iterate = function(callback) {
  var arr = [];
  var i = 0;
  while (i < 12) {
    arr.push(Math.random() * 100);
    i += 1;
  }
  arr.forEach(callback);
  return arr;
}

var doToArray = function(array, callback) {
  array.forEach(callback)
}
