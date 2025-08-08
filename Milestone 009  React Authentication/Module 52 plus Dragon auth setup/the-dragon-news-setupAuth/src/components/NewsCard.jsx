import { FaEye, FaStar } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const {news} = props || {};
    const {
        author,
        title,
        thumbnail_url,
        details,
        total_view,
        rating,
        others_info,
    } = news;

    return (
        <div className='card bg-white shadow-md rounded-md border border-gray-100'>
            {/* Header */}
            <div className='flex items-center justify-between px-4 pt-4'>
                <div className='flex items-center gap-3'>
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                        <h2 className='text-sm font-semibold'>{author?.name}</h2>
                        <p className='text-xs text-gray-500'>{author?.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-lg text-gray-500'>
                    <BsBookmark className='cursor-pointer' />
                    <FiShare2 className='cursor-pointer' />
                </div>
            </div>

            {/* Body */}
            <div className='px-4 pt-4'>
                <h2 className='text-lg font-bold leading-snug'>{title}</h2>
                <figure className='my-3'>
                    <img
                        src={thumbnail_url}
                        alt='Thumbnail'
                        className='w-full h-48 object-cover rounded-md'
                    />
                </figure>
                <p className='text-sm text-gray-600'>
                    {details.length > 200 ? (
                        <>
                            {details.slice(0, 200)}...
                            <Link to={`/news/${news.id}`} className='text-orange-500 cursor-pointer font-medium ml-1'>
                                Read More
                            </Link>
                        </>
                    ) : (
                        details
                    )}
                </p>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between px-4 py-3 border-t mt-4 text-sm'>
                <div className='flex items-center gap-1 text-orange-500'>
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                            key={i}
                            className={
                                i < Math.round(rating.number)
                                    ? 'text-yellow-500'
                                    : 'text-gray-300'
                            }
                        />
                    ))}
                    <span className='ml-1 text-gray-700 font-semibold'>
                        {rating.number}
                    </span>
                </div>
                <div className='flex items-center gap-1 text-gray-600'>
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
