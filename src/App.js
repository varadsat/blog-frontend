import { Route, Routes } from "react-router-dom";
import AddBlog from "./AddBlog";
import "./App.css";
import Blog from "./Blog";

import Home from "./Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/blog/:blogId" element={<Blog />} />
    </Routes>
  );
};

export default App;
