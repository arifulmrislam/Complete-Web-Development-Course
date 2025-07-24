import { useEffect, useState } from 'react';
const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch(' https://openapi.programming-hero.com/api/news/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, [])
    return (
        <div>
            <h2 className='font-semibold mb-4'>All Category</h2>
            <div className='flex flex-col gap-4'>
            {
                categories.map((category) => (
                    <button className='btn bg-gray-100 text-black border-0 hover:bg-gray-300' key={category.category_id}>
                        {category.category_name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;