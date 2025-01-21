import {useState} from 'react';

export default function ReactItems({article}) {
    const [title, body] = useState(null);
    return (
        <>
        <div>
            <h2>Title:{article.title}</h2>
            <p>Body:{article.body}</p>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
        </>
    )
}
