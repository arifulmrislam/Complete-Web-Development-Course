// step1: forward to another html file.
document.getElementById("btn-forward").addEventListener('click',function(){
    window.location.href = 'answer.html';
});

// step2: Triangle
document.getElementById("btn-calculate").addEventListener("click", function () {
    
    const triangleBValue = getInputFieldValueById("input-field-1");
    // const triangleBValueString = triangleBValue.value;
    // const triangleBNewValue = parseFloat(triangleBValueString);
    // triangleBValue.value = '';


    const triangleHValue = getInputFieldValueById("input-field-2");
    // const triangleHValueString = triangleHValue.value;
    // const triangleHNewValue = parseFloat(triangleHValueString);
    

    // const triangleAreaValue = 0.5 * triangleBNewValue * triangleHNewValue;
    const triangleAreaValue = 0.5 * triangleBValue * triangleHValue;
    if(isNaN(triangleAreaValue)){
        alert("please set valid value");
    }else{
        const setValue = document.getElementById("set-field-1");
        setValue.value = triangleAreaValue;
    }
    triangleHValue.value = '';
});

// Rectangle
document.getElementById('btn-calculate2').addEventListener('click',function(){
    const rectangleWValue = getInputFieldValueById("rinput-field-1");
    const rectangleIValue = getInputFieldValueById("rinput-field-2");
    const rectangleAreaValue = rectangleWValue * rectangleIValue;
    if(isNaN(rectangleAreaValue)){
        alert("please set valid value");
    }else{
        const setValue2 = document.getElementById("set-field-2");
        setValue2.value = rectangleAreaValue;
    }
    // triangleHValue.value = '';
})