function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(users){
    const postsContainer = document.getElementById('posts-container');
    users.forEach(user => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User-${user.id}</h4>
            <h5>Name: ${user.name}</h5>
            <p>Email: ${user.email}</p>
            <p>Website: ${user.website}</p>
        `;
        postsContainer.appendChild(postDiv);
        console.log(user);
    })
}

loadPost();

function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});
}

function PatchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
    title: 'foo',
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}