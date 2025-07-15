/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert the input a number by using perseFloat
3. Get previous withdraw total
4. calculate total withdraw amount
4.5. set total withdraw amount
5.get the previous balance total
6. calculate new balance total
6.5 set the new balance total
7. Clear the input field.
 */

//step 1
document.getElementById("btn-withdraw").addEventListener('click',function(){
    //step 2
    const withdrawField = document.getElementById("withdraw-field");
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);

    //step7:
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)){
        alert('Please enter the valid amount');
        return;
    }

    //step 3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    
    //step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);





    if(newWithdrawAmount > previousBalanceTotal){
        alert("Card decline. Have a look your account balance");
        return;
    }
    
    //step4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    //step 6: 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})