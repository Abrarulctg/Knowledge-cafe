import PropTypes from 'prop-types';
import SingleBookmark from '../SingleBookmark/SingleBookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    console.log(readingTime)
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 pt-5 p-2">
            <div>
                <h3 className='text-2xl text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <SingleBookmark key={bookmark.id} bookmark={bookmark}></SingleBookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;