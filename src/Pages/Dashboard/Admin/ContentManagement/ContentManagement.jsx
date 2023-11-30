import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useEffect } from "react";
import { useState } from "react";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import useUserRole from "../../../../hooks/useUserRole";

const ContentManagement = () => {
  const role = useUserRole();
  console.log(role);

  const [allBlogs, setAllBlogs] = useState([]);
  const axios = useAxiosPublic();
  useEffect(() => {
    axios.get("/all-blogs").then((res) => {
      console.log(res.data);
      setAllBlogs(res.data);
    });
  }, [axios]);

  const handlePublished = (id) => {
    const data = {
      status: "published",
    };
    axios.patch(`/update-blog-status/${id}`, data).then((res) => {
      console.log(res.data);
      if (res?.data?.modifiedCount) {
        Swal.fire({
          title: "Published!",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };

  const handleUnPublished = (id) => {
    const data = {
      status: "draft",
    };
    axios.patch(`/update-blog-status/${id}`, data).then((res) => {
      console.log(res.data);
      if (res?.data?.modifiedCount) {
        Swal.fire({
          title: "Un Published!",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };
  const handleDelete = (id) => {
   
    axios.delete(`/delete-blog/${id}`).then((res) => {
      console.log(res.data);
      if (res?.data?.deletedCount) {
        Swal.fire({
          title: "Deleted!",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <div className="flex justify-end mb-20 ">
        <Link
          className="btn btn-success text-white text-lg"
          to={"/dashboard/content-management/add-blog"}
        >
          Add Blog
        </Link>
      </div>

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
                {role === "admin" ? (
                  <div className="card-actions ">
                    {blog?.status === "draft" ? (
                      <button
                        onClick={() => {
                          handlePublished(blog._id);
                        }}
                        className="btn btn-primary"
                      >
                        Publish
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleUnPublished(blog._id);
                        }}
                        className="btn btn-primary"
                      >
                        Un Published
                      </button>
                    )}
                    <div>
                      <button
                        onClick={() => {
                          handleDelete(blog._id);
                        }}
                        className="btn btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentManagement;
