import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function AddBlog() {
  const navigate = useNavigate();

  const handleNav1 = () => {
    navigate('/');
  };

  const [value, setValue] = useState({
    title: "",
    about: "",
    image: null 
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setValue({ ...value, image: e.target.files[0] }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', value.title);
    formData.append('about', value.about);
    formData.append('image', value.image);

    try {
      const addUser = await axios.post(
        "http://localhost:3000/api/create-blog",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      const response = addUser.data;
      if (response.success) {
        toast.success(response.msg);
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const messages = error.response.data.errors.map((err) => err.msg).join("\n");
        alert(messages);
      } else {
        alert("Duplicate  or an error occurred.");
      }
      console.log(error);
    }
    console.log(value);
  };

  return (
    <>
      <div className="h-screen w-screen bg-slate-400 flex flex-col items-center justify-center">
        <form className="flex flex-col justify-center items-center py-6 space-y-10">
          <textarea
            name="title"
            placeholder="Title"
            className="h-12 w-96 mr-32 rounded-lg border border-gray-300 text-left align-top p-2 font-semibold"
            style={{ boxSizing: 'border-box' }}
            onChange={handleChange}
          />
          <textarea
            name="about"
            placeholder="About"
            className="h-96 w-full mr-2 rounded-lg border border-gray-300 text-left align-top font-mono p-2"
            style={{ boxSizing: 'border-box' }}
            onChange={handleChange}
          />
        </form>
        <div className="mt-4 space-x-4 mr-7">
          <input type="file" name="image" className="bg-gray-200 py-1" onChange={handleFileChange} />
          <button onClick={handleSubmit} type="submit" className="bg-green-400 text-black px-5 py-2 rounded-md">Submit</button>
          <button onClick={handleNav1} className="bg-red-500 text-black px-5 py-2 rounded-md">Cancel</button>
        </div>
      </div>
      <Toaster/>
    </>
  );
}

export default AddBlog;
