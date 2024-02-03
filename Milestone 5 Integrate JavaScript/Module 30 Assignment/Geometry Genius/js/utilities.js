function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inPutFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inPutFieldValue;
}


