function iterativeLog(array){
      array.forEach((el,i) => console.log(`${i}: ${el}`));
}

function iterate(callback){
      const array = ["John Wick", "Neo"];
	    array.forEach(callback);
	    return array;
}

function doToArray(array,callback){
      array.forEach(callback);
}
