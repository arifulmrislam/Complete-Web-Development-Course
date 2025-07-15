
import { Link } from 'react-router';
const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category, rating } = book;
    // console.log(book)
    return (
        <Link to={`/books/${bookId}`}>
            <div className='card bg-base-100 w-96 shadow-xl p-6'>
                <figure className='bg-blue-200 py-8 rounded-2xl'>
                    <img src={image} className='h-[166px]' alt={bookName} />
                </figure>
                <div className='card-body'>
                    <div className='flex justify-center gap-4'>
                        {tags.map((tag, index) => (
                            <button key={index} className='btn btn-xs bg-green-200 text-green-600'>
                                {tag}
                            </button>
                        ))}
                    </div>
                    <h2 className='card-title'>{bookName}</h2>
                    <h3 className='text-left'>By : {author}</h3>
                    <hr class='border-t-2 border-dashed border-white-200 h-1 mt-2'></hr>
                    <div className='card-actions justify-between mt-4'>
                        <div className=''>{category}</div>
                        <div className='flex gap-3'>
                            <p>{rating}</p>
                            <p>⭐</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;