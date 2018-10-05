function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const colors=["red","blue","green"];

  colors.forEach(callback);
  return colors
}

function doToArray(array,callback) {
  array.forEach(callback);

}
