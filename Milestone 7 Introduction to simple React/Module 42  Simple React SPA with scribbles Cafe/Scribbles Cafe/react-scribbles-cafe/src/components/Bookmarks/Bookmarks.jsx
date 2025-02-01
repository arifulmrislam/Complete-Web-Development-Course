import Bookmark from "../Bookmark/Bookmark";
import { PropTypes } from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime }) => {
    // console.log(bookmarks);
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4'>
            <h2 className="m-4 border-2 border-blue-500 rounded-lg text-xl font-semibold text-center py-4 text-gray-700">
    Spent time on read: {readingTime}
</h2>

            <h2 className='text-2xl text-center'>Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index) => 
                <Bookmark 
                key={index}
                bookmark={bookmark}>
                </Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.array.isRequired
}


export default Bookmarks;