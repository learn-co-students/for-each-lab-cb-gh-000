function interativeLog(ar) {
  ar.forEach(e => {
    console.log(`${ar.indexOf(e)}: ${e}`);
  });
}

function iterate(callback) {
  var a = ["yeeee", "yoooo"];
  a.forEach(e => {
    callback(e);
  });
  return a;
}

function doToArray(ar, callback) {
  ar.forEach (e => {
    callback(e)
  });
}
