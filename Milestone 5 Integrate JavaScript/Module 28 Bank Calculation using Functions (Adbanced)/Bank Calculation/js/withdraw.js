/* 
1. add event handler with the withdraw button
2. get the withdraw amount
2.5 Convert string deposit amount to a number type

3. clear the withdraw field
4. get the previous withdraw total
5. calculate withdraw total and set the value to the withdraw total
6. get previous balance
7. calculate the new balance and set it to the balance;
*/
//step1:
document.getElementById("btn-withdraw").addEventListener('click',function(){
    //step2:
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAMount = parseFloat(newWithdrawAmountString);

    //step3:
    withdrawField.value = '';

    //step4:
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step5:
    const newWithdrawTotal = newWithdrawAMount + previousWithdrawTotal;
    withdrawTotalElement.innerText = newWithdrawTotal;

    //step6:
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step7:
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceElement.innerText = newBalanceTotal;
    console.log(newBalanceTotal);
});