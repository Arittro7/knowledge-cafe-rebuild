import PropTypes from "prop-types";
import "./blog.css";
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
  const { cover_img, title, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="">
      <img className="w-full" src={cover_img} alt="Cover Image" />
  
      <div className="flex items-center justify-between">
        <div className="flex mt-9 mb-5"> 
          <img className='w-14 rounded-full' src={author_img} alt="author Image" />
          <div className="ml-3">
            <h2 className="text-2xl font-semibold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="mr-2">{reading_time} min read</span>
          <button className="text-xl text-green-600" 
          onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="mt-4"> 
        {
          hashtags.map((hash, idx) => <span className="mr-2" key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
      <button className="mt-5 mb-16">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func
};

export default Blog;
