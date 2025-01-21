import Book from "./Book";

export default function BookStore({ books }) {
    return (
        <div>
            <h3>Total Books: {books.length}</h3>
            <div>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
}