function loadTodo(){
    fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=> response.json())
.then(data => displayTodo(data))
}

function displayTodo(data){
    const todoContainer = document.getElementById("todo-container");
    for(const datas of data){
        // console.log(datas.title);
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>title: ${datas.title}</h3>
            <p>User:${datas.userId}</p>
            <p>Is completed: ${datas.completed === true ? 'completed' : 'not complete'}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadTodo();