

function getTextElementValuebyID(ElementId){
    const PhoneTotalElement = document.getElementById(ElementId);
    const currentPhoneTotalString = PhoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
    }
    

    function setTextelementvaluebyId(ElementId ,value){
        const subtotalElement = document.getElementById(ElementId);
        subtotalElement.innerText = value;
    }
    
    function calculateSubTotal(){
        // calculate Total //
    const currentPhoneTotal = getTextElementValuebyID("phone-total");
    const currentCaseTotal = getTextElementValuebyID("Case-total");

    const curentsubTotal = currentPhoneTotal + currentCaseTotal;
setTextelementvaluebyId('sub-total',curentsubTotal);

    // calculate tax //
    const taxAmountString = (curentsubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextelementvaluebyId('text-amount',taxAmount);
    const finalAmount = curentsubTotal + taxAmount;
    setTextelementvaluebyId('final-total',finalAmount);
    }
    