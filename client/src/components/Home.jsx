import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [Blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/get-blog');
        const res = response.data.Blogs; 
        console.log('Fetched Data:', res);
        setBlog(res);
      } catch (error) {
        console.log('Error fetching data:', error);
        alert(error);
      }
    }
    fetchData();
  }, []);

  const handleNavigate = () => {
    navigate('/create-blog');
  };

  const formatText = (text) => {
    let formattedText = '';
    for (let i = 0; i < text.length; i += 120) {
      formattedText += text.slice(i, i + 120) + '<br>';
    }
    return formattedText;
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');
    if (confirmDelete) {
      try {
        const deleteBlog = await axios.delete(`http://localhost:3000/api/delete-blog/${id}`);
        const res = deleteBlog.data;
        console.log(res);
        setBlog(Blog.filter(blog => blog._id !== id));
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  return (
    <>
      <div className="flex bg-cyan-300 h-full w-full p-4 justify-between">
        <h1 className="font-serif font-bold text-emerald-950 text-4xl">
          BLOG APP
        </h1>
        <button onClick={handleNavigate} className="font-serif font-bold text-white text-xl border-black bg-slate-600 p-4 px-9 py-3">
          Add
        </button>
      </div>
       
      <div className="p-4">
        <ul className="space-y-4">
          {Array.isArray(Blog) && Blog.map((item) => (
            <li key={item._id} className="bg-slate-200 p-4 rounded shadow flex items-start relative">
              <div className="w-72 h-36 flex-shrink-0">
                <img src={`http://localhost:3000/` + item.image.split('\\').pop()} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow pl-10">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap" dangerouslySetInnerHTML={{ __html: formatText(item.about) }}></p>
              </div>
              <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-3 py-1 rounded-md absolute top-4 right-4">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
