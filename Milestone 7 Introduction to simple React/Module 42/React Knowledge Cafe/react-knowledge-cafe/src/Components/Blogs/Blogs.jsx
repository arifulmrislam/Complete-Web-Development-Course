import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    //we need state to keep data on variable
    //array te data thakai amader empty array banate hove
    const[blogs, setBlogs] = useState([]);

    //for data load, we need useEffect
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;