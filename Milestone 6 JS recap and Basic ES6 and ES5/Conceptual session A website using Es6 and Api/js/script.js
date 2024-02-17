document.getElementById("btn-search").addEventListener('click',function(){
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;


    const url = "https://restcountries.com/v3.1/name/united";
    fetch(url)
    .then((response) => response.json())
    .then((data) => dataFunction(data));

    const dataFunction = (data) =>{
        data.forEach(item => {
            console.log(item.name.common);
        })
    }
});



