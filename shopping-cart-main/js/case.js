
function updateCaseNumber(Increase){
    const caseNumberFiled = document.getElementById("case-number-field");
    const caseString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseString);
  let newCaseNumber;

    if(Increase === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;
    return newCaseNumber;
}




function updateCaseTotalPrice(newcaseNumber){
    const caseTotalPrice = newcaseNumber * 59;
    const caseTotalElement = document.getElementById('Case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
const newcaseNumber = updateCaseNumber(true);
updateCaseTotalPrice(newcaseNumber);
calculateSubTotal();

})

document.getElementById("btn-case-minus").addEventListener('click',function(){
    const newcaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newcaseNumber);
    calculateSubTotal();
   
})