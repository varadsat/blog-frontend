import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Home.css';
import './BlogGrid.css';
import { API_URL } from "./appData";
const Blog  = () =>{
    const params = useParams();
    const [blog,setBlog] = useState(null);       
    useEffect(()=>{
        const url = API_URL+"/posts/"+params.blogId;
        const getBlog = async () =>{
            try {
                const res = await fetch(url);
                setBlog(await res.json());
            } catch (error) {
                console.log("could not get the blog");
            }
        }
        getBlog();
    },[params])
    if (blog !== null)
    {
        console.log(blog);
        return(
            <div className="outer-container">
          <div className="inner-container">
                <h1>{blog.title}</h1>
                <div dangerouslySetInnerHTML={{__html: blog.body}}/>
              </div>
          </div>
        )
    }else{
        return(
            <div className="spinner">
          </div>
        )
    }
    
}
export default Blog;