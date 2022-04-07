import { useEffect, useState } from "react";
import "./Home.css";
import BlogGrid from "./BlogGrid";
import { Link } from "react-router-dom";
import { API_URL } from "./appData";
function Home() {
  const [blogs,setBlogs] = useState([]);
  useEffect(()=>{
    const fillBlogs = async() =>{
      try {
        const res =  await fetch(API_URL+"/posts");
        const posts = await res.json();
        setBlogs(posts);
      } catch (error) {
        console.log("Could not fill blogs");
      }
    }
    fillBlogs();
  },[])

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="navbar">
          <Link to="/addblog"><button className="btn">NEW</button></Link>
        </div>
        <div className="blogs-container">
          <h1>The Blog</h1>
          <BlogGrid blogs={blogs}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
