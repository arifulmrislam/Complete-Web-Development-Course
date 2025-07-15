import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();

    const { title, body, id } = post;
    const navigate = useNavigate();

    const styeUser = {
        textAlign: 'left',
    }

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div style={styeUser}>
            <h1>Details about post:{id}</h1>
            <h3>Title: {title}</h3>
            <h3>Body: {body}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;