import Post from "./Post";
import './Post.css'
import { useEffect, useState } from "react"

export default function Posts(){

    const [posts, setPost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data));
    },[])

    return( 
        <div className='box'>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}


/* 
1. Create a state to store the data
2. Create use effect with no dependencies
3.  Use fetch to load data
*/