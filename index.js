function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var popularShows = ["30 rock", "Sherlock", "The OC"];
  var copy = [];
  popularShows.forEach(callback);
  return popularShows;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
