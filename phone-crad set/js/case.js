// Button 1 now Case Plus Code
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = upDateCaseInputNumber(true);
    upDateTextTotalPrice(newCaseNumber);

    getCalculateById()
})

// Button 2 now Case minus Code
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = upDateCaseInputNumber(false);
    upDateTextTotalPrice(newCaseNumber);

    getCalculateById()
})