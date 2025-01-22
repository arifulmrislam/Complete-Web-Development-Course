import ReactItems from "./ReactItems"
import { useState, useEffect } from 'react';

export default function ReactComponents() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setArticles(data)
                // console.log(data);
            })

    }, []);

    return (
        <>
            <div>
                <div>
                    <h2 className='text-2xl'>React Components & Props</h2>
                    <p className='text-lg mb-12'>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
                </div>
                <div className='bg-[#fff9ef]  mb-12'>
                    <h2 className='text-xl px-6 py-3'>Articles & Tutorials</h2>
                </div>
                {
                    articles.map(article => <ReactItems
                        article={article}
                        key={article.id}
                    ></ReactItems>
                    )
                }
            </div>
        </>
    )
}