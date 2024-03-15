import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog)
    const { id, title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mb-16 space-y-4'>
            <img className='w-full mb-8 rounded' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <img className="w-16 rounded-full" src={author_img} alt="" />
                    <div className=''>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600'> <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}>
                        <a href="#">#{hash} </a>
                    </span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={() => handleMarkAsRead(reading_time, id)} >mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;