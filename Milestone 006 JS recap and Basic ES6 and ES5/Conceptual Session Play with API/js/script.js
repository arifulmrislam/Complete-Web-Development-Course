fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => setPost(data));


const setPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    const firstTenPoints = posts.slice(0, 10);
    for(let post of firstTenPoints){
        const postDiv = document.createElement('div');
        // postDiv.classList.add("border-2 border-indigo-600 mt-8");
        postDiv.innerHTML = `
            <div class="border-2 border-indigo-600 mt-8 p-5">
                <h3 class='text-2xl font-semibold'>${post.id}</h3>
                <p class="mb-4 text-2xl">${post.title}</p>
                <h2>${post.body}</h2>
            </div>
        `;
        postContainer.appendChild(postDiv);
    }
};