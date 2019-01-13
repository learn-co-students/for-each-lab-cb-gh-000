function iterativeLog(array)
{
  array.forEach(function(item,index){
    console.log(`${index}: ${item}`);
  });
  
}

function iterate(callback)
{
  var arr=[1,2,3,4,5,6];
   arr.forEach(callback);
   return arr;
  
}
function doToArray(array,callback)
{
  array.forEach(callback);
  
  
}