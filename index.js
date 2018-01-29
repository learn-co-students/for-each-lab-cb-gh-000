function iterativeLog(array) {
    array.forEach(function(item,index) {
        console.log(`${index}: ${item}`);
    })
}

function iterate(callback) {
    var a = [1,2,3];
    a.forEach(callback);
    return a;
}

function doToArray(array,callback) {
    array.forEach(callback);
}
