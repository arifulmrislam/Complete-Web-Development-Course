
function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => displayPost(json));
}
/* 
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPost(post){
    const postsContainer = document.getElementById('posts-container');
    for(const posts of post){
        const divPost = document.createElement('div');

        //style theke class add korar new system to js file.
        divPost.classList.add('post');
        
        // div.innerText = posts.id;
        // postsContainer.appendChild(div);
        divPost.innerHTML = `
            <h4>User-${posts.id}</h4>
            <h5>Post: title ${posts.title}</h5>
            <p>Post Description ${posts.body}</p>
        `;
        postsContainer.appendChild(divPost);
    }
}

loadPost();