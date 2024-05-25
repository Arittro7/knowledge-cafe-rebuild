import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarked, readingTime}) => {

  return (
    <div className="md: w-1/3 ml-6 ">
      <div className='text-2xl font-bold text-white text-center px-11 py-5 mb-6 rounded-xl bg-orange-500'>
        <h2>Spend time on read : {readingTime} Min</h2>
      </div>
      <div className='bg-orange-200 px-7 pb-5 rounded-xl'>
      <h1 className='text-2xl font-bold py-7'>Bookmarked Blog {bookmarked.length}</h1>
      {
        bookmarked.map((bookmark, idx) =><Bookmark
        key={idx}
        bookmark={bookmark}
        ></Bookmark>)
      }
      </div>
    </div>
  );
};

Bookmarks.propTypes ={
  bookmarked:PropTypes.array,
  readingTime:PropTypes.number
}

export default Bookmarks;