document.getElementById("btn-withdraw").addEventListener('click',function(){
    const newWithdraw = getInputFieldValueById("withdraw-field");
    const previousWithdraw = getTextElementValueById("withdraw-total");
    const newWithdrawTotal = newWithdraw + previousWithdraw;
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    const previousBalance = getTextElementValueById('balance-total');
    const newBalance = previousBalance - newWithdrawTotal;
    setTextElementValueById('balance-total',newBalance);
})