var iterativeLog = (arr) => {
  arr.forEach(logArrayElements);
};
var logArrayElements = (element, index, array) => {
  console.log(`${index}:${element}`)
}