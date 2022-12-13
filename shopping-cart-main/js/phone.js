
function updatePhoneNumber(Increase){
    const caseNumberFiled = document.getElementById("btn-phone-field");
    const caseString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseString);
  let newPhoneNumber;

    if(Increase === true){
        newPhoneNumber = previousCaseNumber + 1;
    }
    else{
        newPhoneNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newPhoneNumber;
    return newPhoneNumber;
}




function updatePhoneTotalPrice(newPhoneNumber){
    const caseTotalPrice = newPhoneNumber * 1219;
    const PhoneTotalElement = document.getElementById('phone-total');
    PhoneTotalElement.innerText = caseTotalPrice;
}



function getTextElementValuebyID(ElementId){
const PhoneTotalElement = document.getElementById(ElementId);
const currentPhoneTotalString = PhoneTotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString);
return currentPhoneTotal;
}

function calculateSubTotal(){
    // calculate Total //
const currentPhoneTotal = getTextElementValuebyID("phone-total");
const currentCaseTotal = getTextElementValuebyID("Case-total");
const curentsubTotal = currentPhoneTotal + currentCaseTotal;
const subtotalElement = document.getElementById('sub-total');
subtotalElement.innerText = curentsubTotal;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
const newPhoneNumber = updatePhoneNumber(true);
updatePhoneTotalPrice(newPhoneNumber);
calculateSubTotal();


})

document.getElementById("btn-phone-minus").addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})