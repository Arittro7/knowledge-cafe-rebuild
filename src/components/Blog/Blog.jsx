import PropTypes from 'prop-types';

const Blog = ({blog}) => {

  const {cover_img, title} = blog;

  return (
    <div>
      <img src={cover_img} alt="Cover Image" />
      <h2>Title: {title}</h2>

    </div>
  );
};

Blog.propTypes ={
  blog:PropTypes.object.isRequired
}

export default Blog;