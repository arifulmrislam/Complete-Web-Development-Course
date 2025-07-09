import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {title, body, id, userId} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        textAlign: 'left'
    }
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Post of Id: {id}</h2>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;