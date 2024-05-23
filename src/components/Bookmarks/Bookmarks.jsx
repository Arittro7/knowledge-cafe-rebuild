import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarked}) => {

  return (
    <div className="md: w-1/3 ml-6 ">
      <h1 className='text-3xl'>Bookmarked: {bookmarked.length}</h1>
      {
        bookmarked.map(bookmark =><Bookmark
        key={bookmark.id}
        bookmark={bookmark}
        ></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes ={
  bookmarked:PropTypes.array
}

export default Bookmarks;