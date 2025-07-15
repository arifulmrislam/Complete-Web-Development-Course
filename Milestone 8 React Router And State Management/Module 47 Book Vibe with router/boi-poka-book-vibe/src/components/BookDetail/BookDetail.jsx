
import { useParams, useLoaderData } from 'react-router-dom';
import { addToStoredReadList, addToStoredReadWishList } from '../Root/addToDb';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    console.log(book);

    const { bookId: currentBookId, image, bookName, publisher, review, tags, totalPages, author, rating, yearOfPublishing, category } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2. where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the readList
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */
        addToStoredReadList(id);
    }

    const handleMarkAsWishRead = (id) => {
        addToStoredReadWishList(id);
    }
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure className="w-1/2 bg-amber-50 flex items-center justify-center">
                <img src={image} alt={bookName} className="w-[300px] h-auto" />
            </figure>

            <div className="card-body w-1/2 overflow-hidden">
                <h2 className="card-title">{bookName}</h2>
                <h3>By: {author}</h3>
                <hr />
                <h3>{category}</h3>
                <hr />
                <p>
                    <span className="font-bold">Review:</span> {review}
                </p>

                <div className="flex gap-2 items-center flex-wrap">
                    <span className="text-white">Tag</span>
                    {tags.map((tag, index) => (
                        <h3 key={index} className="text-green-400">
                            #{tag}
                        </h3>
                    ))}
                </div>

                <hr />

                <div className="flex gap-8">
                    <div>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>

                <div>
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
                    <button onClick={() => handleMarkAsWishRead(bookId)} className="btn btn-accent">Add to Wish List</button>
                </div>
            </div>
        </div>

    );
};

export default BookDetail;

