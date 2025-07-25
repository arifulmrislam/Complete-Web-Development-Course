
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2 className='font-semibold mb-2'>Dragon News Home</h2>
            {data.length} news found in this category.
        </div>
    );
};

export default CategoryNews;