import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import AddBlog  from "../src/components/AddBlog.jsx";
import Home from "../src/components/Home.jsx";

function Navigate() {
  return (
      <Router>
           <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/create-blog" element={<AddBlog></AddBlog>}/>
           </Routes>
      </Router>
  )
}

export default Navigate