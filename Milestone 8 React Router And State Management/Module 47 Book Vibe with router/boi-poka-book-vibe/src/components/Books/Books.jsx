
import { useState,useEffect } from 'react';
import Book from '../Book/Book';
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='mt-8 px-4 text-center'>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Collection of Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1. state to store books
 * 2. useEffect
 * 3. fetch to load data and save it to state
 */