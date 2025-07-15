function loadData2(){
    //collect data from another website through API
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    //convert the data to JSON object
    .then(response => response.json())
    //display data
    .then(data => console.log(data));
}

function loadData3(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayUsers(data));
}
//we can also use function for display data using function
function displayUsers(data){
    console.log(data);
}