function iterativeLog(arr)
{
  arr.forEach((el, ind) =>{
    console.log(`${ind}: ${el}`)
  } )
}

function iterate(callback)
{
  var arr = [1,2,3,4,5];
  arr.forEach(callback)

  return arr;
}

function myCallback(el)
{
  console.log(`This element contains ${el}`)
}
var arr = ['a', 'b', 'c']

iterativeLog(arr)
iterate(myCallback)
