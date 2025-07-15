function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);
    //display pin
    const disPlayPin = document.getElementById("display-pin");
    disPlayPin.value = pin;
})

document.getElementById("calculator").addEventListener('click',function(event){
    const typedNumberField = document.getElementById("typed-number");
    const typedNumberString = typedNumberField.value;
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digit = typedNumberString.split("");
            digit.pop();
            const remainingDigit = digit.join('');
            typedNumberField.value = remainingDigit;
        }
    }else{
        const newNumber = typedNumberString + number
        typedNumberField.value = newNumber;
    }
});

document.getElementById("verify-pin").addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typeNumber = typedNumberField.value;
    const pinSuccessFullMessage = document.getElementById("pin-success");
    const pinUnsuccessFullMessage = document.getElementById("pin-unsuccess");
    if(currentPin === typeNumber){
        
        pinSuccessFullMessage.style.display = 'block';
        pinUnsuccessFullMessage.style.display = "none";
    }
    else{
        
        pinUnsuccessFullMessage.style.display = 'block';
        pinSuccessFullMessage.style.display = "none";
    }
});