import BlogCard from "./BlogCard";
import "./BlogGrid.css";

const BlogGrid = (props) => { 
  if (props.blogs != null) {
    const blogs = props.blogs.map((blog) => <BlogCard blog={blog} key={blog.id}/>);
    return <div className="blogs-grid">{blogs}</div>;
  } else {
    return <div class="spinner" />;
  }
};
export default BlogGrid;
