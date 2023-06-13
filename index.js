let countTx = document.getElementById("no")
let saveNo = document.getElementById("saves")
let noCount = 0
saveNo.innerHTML = 'The passengers are: 0'
function increment() {
  noCount = noCount + 1
  countTx.innerHTML = noCount
}
function save() {
  saveNo.innerHTML =  'The passengers are: ' + noCount
}
function reset() {
    noCount = 0
    saveNo.innerHTML = 'The passengers are: ' + noCount
    countTx.innerHTML = noCount
}