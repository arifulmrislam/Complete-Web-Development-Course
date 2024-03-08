import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {
        id,
        title,
        cover,
        reading_time,
        author_Img,
        author,
        posted_date,
        hashtags,
    } = blog;
    return (
        <div className="mb-20">
            <img
                className="w-full rounded-lg"
                src={cover}
                alt={`Cover picture of the title ${title}`}
            />
            <div className="flex justify-between">
                <div className="flex mt-3">
                    <img className="w-14 rounded-xl" src={author_Img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        className="ml-2 text-2xl text-red-600"
                        onClick={() => handleAddToBookmark(blog)}
                    >
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx}>
                        <a href="">#{hash}</a>
                    </span>
                ))}
            </p>
            <button
                className="text-purple-800 font-bold underline"
                onClick={() => handleMarkAsRead(id, reading_time)}
            >
                Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;
