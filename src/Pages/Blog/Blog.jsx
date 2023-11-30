import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import parse from "html-react-parser";

const Blog = () => {
  const axios = useAxiosPublic();
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    axios.get(`/all-published-blog/published`).then((res) => {
      console.log(res.data);
      setAllBlogs(res.data);
    });
  }, [axios]);
  return (
    <div className="w-4/5 mx-auto">
      <div>
        {allBlogs.map((blog) => (
          <div key={blog._id}>
            <div className="card mb-10  bg-base-100 shadow-xl p-5">
              <figure>
                <img src={blog?.thumbnail} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{blog?.title}</h2>
                <p>{parse(blog?.content)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
