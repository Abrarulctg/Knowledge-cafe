import PropTypes from 'prop-types';
import SingleBookmark from '../SingleBookmark/SingleBookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    // console.log(readingTime)
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 pt-5 p-2">
            <div className='bg-purple-100 p-4'>
                <h3 className='text-2xl text-center text-purple-800 font-semibold'>Reading Time: <span className='font-extrabold'>{readingTime}</span></h3>
            </div>
            <h2 className="text-2xl text-center mb-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <SingleBookmark key={idx} bookmark={bookmark}></SingleBookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;