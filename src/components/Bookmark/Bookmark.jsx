import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

  const {title,} = bookmark;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark:PropTypes.object
}

export default Bookmark;