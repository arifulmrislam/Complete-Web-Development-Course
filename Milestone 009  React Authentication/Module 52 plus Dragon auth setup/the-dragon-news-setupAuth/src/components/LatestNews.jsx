import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee';
const LatestNews = () => {
    return (
        <div className='flex justify-center items-center gap-2 bg-gray-100 p-2'>
            <button className='btn btn-secondary text-lg'>Latest</button>
            <Marquee pauseOnHover className='space-x-15'>
                <Link to='/news' className='text-lg'>
                    Match Highlights: Germany vs. Spain - as it happened ! Match
                    Highlights: Germany vs. Spain as...
                </Link>
                <Link to='/news' className='text-lg'>
                    Match Highlights: Germany vs. Spain - as it happened ! Match
                    Highlights: Germany vs. Spain as...
                </Link>
                <Link to='/news' className='text-lg'>
                    Match Highlights: Germany vs. Spain - as it happened ! Match
                    Highlights: Germany vs. Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;