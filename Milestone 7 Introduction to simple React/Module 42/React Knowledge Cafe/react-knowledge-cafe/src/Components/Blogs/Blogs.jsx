import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    //we need state to keep data on variable
    //array te data thakai amader empty array banate hove
    const [blogs, setBlogs] = useState([]);

    //for data load, we need useEffect
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl mb-3">Blogs: {blogs.length}</h1>
            {blogs.map((blog) => (
                <Blog key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>
            ))}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};
export default Blogs;