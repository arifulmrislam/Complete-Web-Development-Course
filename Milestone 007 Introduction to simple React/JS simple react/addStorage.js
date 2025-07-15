const myLocalStorage = () =>{
    const idInput = document.getElementById('local-id');
    const id = idInput.value;
    const valueInput = document.getElementById('local-value');
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id, value);
    }

    idInput.value = '';
    valueInput.value = '';
    
}

