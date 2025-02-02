import PropTypes from 'prop-types';
import { FiBookmark } from 'react-icons/fi';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog);
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <h2 className='text-2xl font-bold mb-20'>
                <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
                <div className='flex justify-between mt-4 mb-4 '>
                    <div className='flex'>
                        <img
                            className='rounded-full w-14 h-14 '
                            src={author_img}
                            alt=''
                        />
                        <div className='ml-6'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <span>{reading_time} min read</span>
                        <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FiBookmark /></button>
                    </div>
                </div>
                <h2 className='text-4xl'>{title}</h2>
                <p>
                    {hashtags.map((hash, index) => (
                        <span key={index}>
                            <a href="">#{hash}</a>
                        </span>
                    ))}
                </p>
                <button onClick={()=> handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold underline' >Mark As Read</button>
            </h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
