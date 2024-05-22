import PropTypes from "prop-types";
import "./blog.css";

const Blog = ({ blog }) => {
  const { cover_img, title, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="blog_container">
      <img className="w-[800px]" src={cover_img} alt="Cover Image" />
  
      <div className="flex items-center justify-between">
        <div className="flex "> 
          <img className='w-14 rounded-full ' src={author_img} alt="author Image" />
          <div className="ml-3">
            <h2 className="text-2xl font-semibold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-5xl font-semibold">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span className="mr-2" key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
