
const inputQuantity= document.getElementByClass("enter_quant");

const quantityEntered = document.getElementByClass("quant_entered");
/*
function enterQuantity (){
    quantityEntered.value = inputQuantity.value
}
addBtn.addEventListener('click', enterQuantity)
*/
const pWithError = document.getElementByClass("errorQuant")
const addBtn = document.getElementByClass("addButton");
function showError() {
  if (quantityEntered.value < 0){
    pWithError.style.visibility = 'visible'
  } else {
    pWithError.style.visibility = 'hidden'
  }
}
addBtn.addEventListener('click', showError)


