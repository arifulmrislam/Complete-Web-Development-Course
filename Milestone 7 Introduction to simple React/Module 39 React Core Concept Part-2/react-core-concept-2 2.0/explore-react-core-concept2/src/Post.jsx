import './post.css'

const Post = ({post}) => {
    console.log(post);
    return (
        <div className='post'>
            <h5>Title: {post.title} </h5>
            <p><small>userId: {post.userId}</small></p>
            <p><small>postId: {post.id}</small></p>
            <p></p>
        </div>
    );
};

export default Post;