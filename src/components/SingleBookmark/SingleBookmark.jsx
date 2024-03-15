import PropTypes from 'prop-types';


const SingleBookmark = ({ bookmark }) => {
    console.log(bookmark)

    const { title } = bookmark;
    return (
        <div className='bg-white mb-3 rounded-xl p-2'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};


SingleBookmark.propTypes = {
    bookmark: PropTypes.object
}

export default SingleBookmark;