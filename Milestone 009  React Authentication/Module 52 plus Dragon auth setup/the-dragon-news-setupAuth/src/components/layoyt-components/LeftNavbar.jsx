import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);
    // console.log(categories);

    useEffect(() => {
        fetch(' https://openapi.programming-hero.com/api/news/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, [])
    return (
        <div>
            <h2 className='font-semibold mb-4'>All Category</h2>
            <div className='flex flex-col gap-4'>
                {categories.map((category) => (
                    <NavLink
                        to={`/category/${category.category_id}`}
                        className='btn bg-gray-50 text-black border-0 hover:bg-gray-100'
                        key={category.category_id}
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;