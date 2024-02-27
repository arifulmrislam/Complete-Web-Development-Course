import './book.css'
export default function Book({book}){
    const{id,name,price} = book;
    return ( 
        <div className='book'>
            <h2>Id: {id}</h2>
            <h3>Book Name: {name}</h3>
            <p>Book Price: {price}</p>
        </div>
    )
}