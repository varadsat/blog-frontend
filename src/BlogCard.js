import "./BlogCard.css";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  const date = dateFormat(Date.parse(blog.publishedAt), "mmmm dS, yyyy");
  const body =
    blog.body.length > 100
      ? blog.body.substring(0, 100) + "..."
      : blog.body.substring(0, 100);

  return (
    <div className="blog-card">
      <Link
        style={{ textDecoration: "inherit", color: "inherit" }}
        to={"/blog/" + blog.id}
        key={blog.id}
      >
        <img
          src="https://www.dwinawan.com/blog/thumb_article1.jpg"
          alt="blog"
        />
        <p className="blog-date">{date}</p>
        <h2 className="blog-title">{blog.title}</h2>
      </Link>
      <div className="blog-desc" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
export default BlogCard;
