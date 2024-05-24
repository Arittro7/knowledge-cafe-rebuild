import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

  const {title} = bookmark;

  return (
    <div className='bg-slate-200 p-5 rounded-xl mb-4'>
      <h2>{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark:PropTypes.object
}

export default Bookmark;