function iterativeLog(array){
  return array.forEach((element, index) => {
    log(element, index)
  })
}

function log(element, index){
  console.log(`${index}: ${element}.`)
}
