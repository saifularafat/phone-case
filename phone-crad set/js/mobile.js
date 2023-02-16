
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    // console.log('Plus Now')
    const newPhoneNumber = upDatePhoneInputNumber(true);
    upDatePhoneTextTotalPrice(newPhoneNumber);

    getCalculateById()
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    // console.log('Minus Now')
    const newPhoneNumber = upDatePhoneInputNumber(false)
    upDatePhoneTextTotalPrice(newPhoneNumber);

    getCalculateById()
    // const inputPhonPriceField = document.getElementById('phone-field');
    // const inputPhonPriceFieldString = inputPhonPriceField.value;
    // const inputPhonNumber = parseInt(inputPhonPriceFieldString);

    // const newInputPhoneNumber = inputPhonNumber - 1;
    // inputPhonPriceField.value = newInputPhoneNumber;
})