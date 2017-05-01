function iterativeLog(array) {
  array.forEach(
    (element, index) => { 
      console.log(`${index}: ${element}`);
     }
   );
}

function iterate(callback) {
  var students = [`James`, 'Joe']
  students.forEach(callback);
  return students;
}

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}