import { useState, useEffect } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts') 
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;

/**
 * 1. create a state to store the data
 * 2. create use effect with no dependencies 
 * 3. use fetch to load data
 */