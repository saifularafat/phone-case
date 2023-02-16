
/*===============>  Case Function DonE  <================*/
function upDateCaseInputNumber(isIncrease){
    const inputCaseField = document.getElementById('case-field');
    const inputCaseFieldString = inputCaseField.value;
    const inputCaseNumber = parseInt(inputCaseFieldString);
    
    let newCuseNumber;
    if(isIncrease === true){
        newCuseNumber = inputCaseNumber + 1;
    }
    else{
        newCuseNumber = inputCaseNumber - 1;
        if(newCuseNumber <= -1){
            return;
        }
    }
    inputCaseField.value = newCuseNumber;

    return newCuseNumber;
}

function upDateTextTotalPrice(newCaseNumber){
    const newCaseMinusNumberMulti = newCaseNumber * 59 ;
    const previousCaseElementMinusNumber = document.getElementById('case-amount');
    previousCaseElementMinusNumber.innerText = newCaseMinusNumberMulti;
}
/*===============>  Case Function DonE  <================*/



/*===============>  Phone Function DonE  <================*/
function upDatePhoneInputNumber(isIncrease){

    const inputPhonPriceField = document.getElementById('phone-field');
    const inputPhonPriceFieldString = inputPhonPriceField.value;
    const inputPhonNumber = parseInt(inputPhonPriceFieldString);
    
    let newPhoneNumber; 
    if(isIncrease === true){
        newPhoneNumber = inputPhonNumber + 1;
    }
    else{
        newPhoneNumber = inputPhonNumber - 1;
        if(newPhoneNumber <= -1){
            return;
        }
    }
    inputPhonPriceField.value = newPhoneNumber;
    return newPhoneNumber;
}

function upDatePhoneTextTotalPrice(newPhoneNumbers){
    const updatePhonePrice = newPhoneNumbers * 1219;
    const updatePhoneTextFieldAmount = document.getElementById('phone-total-price');
    updatePhoneTextFieldAmount.innerText = updatePhonePrice ;
}


/*===============>  SubTotal Function DonE  <================*/

function getSubTotalElemenTextById(elementTotal){

    const elementSubTotalText = document.getElementById(elementTotal);
    const elementSubTotalString = elementSubTotalText.innerText;
    const elementSubTotal = parseInt(elementSubTotalString);
    return elementSubTotal ;
}

// calculatre 
function getCalculateById(){
    
    const currentTotalPhone = getSubTotalElemenTextById('phone-total-price')
    const currentTotalCase = getSubTotalElemenTextById('case-amount')

    const currentTotal = currentTotalPhone + currentTotalCase;
    setTextElementValueById('Sub-total', currentTotal)
    
    const textAmountSrting = (currentTotal * 0.1).toFixed(2);
    const textAmount = parseFloat(textAmountSrting);
    setTextElementValueById('tax-amount', textAmount);

    
    const finalAmout = currentTotal + textAmount;
    setTextElementValueById('total-amount', finalAmout);
}

// setElement
function setTextElementValueById(elementId, value){

    const setElementId = document.getElementById(elementId);
    setElementId.innerText = value;
}

