import BlogCard from "./BlogCard";
import "./BlogGrid.css";

const BlogGrid = (props) => {
  const blogs = props.blogs.map((blog) => <BlogCard blog={blog} key={blog.id}/>);
  if (props.blogs.length !== 0) {
    return <div className="blogs-grid">{blogs}</div>;
  } else {
    return <div class="spinner" />;
  }
};
export default BlogGrid;
