import './Book.css';

export default function Book({book}){
    const {name, price} = book;
    return( 
        <div className="book" style={{border: '1px solid gray', padding: '10px', margin: '5px', borderRadius: '5px'}}>
            <h3>Book Name: {name}</h3>
            <h4>Book Price: ${price}</h4>
        </div>
    );
}