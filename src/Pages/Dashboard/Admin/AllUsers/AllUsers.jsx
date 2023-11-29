import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [userPerPage, setuserPerPage] = useState(2);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const totalPage = Math.ceil(totalUser / userPerPage);

  const totalPageArray = [...Array(totalPage).keys()];

  const [allUsers, setAllUsers] = useState([]);

  const axios = useAxiosSecure();

  useEffect(() => {
    axios.get(`/all-users?page=${currentPageNumber}&limit=${userPerPage}`)
      .then((res) => {
        setAllUsers(res.data);
      });
  }, [currentPageNumber, userPerPage, axios]);

  useEffect(() => {
    axios.get("/usersCount").then((res) => {
      setTotalUser(res.data.result);
    });
  }, [axios]);

  const handleBlock = (id)=>{
    console.log('block',id);
    const data = {
      status: "blocked",
      
    };
    axios.patch(`/update-user-status/${id}`, data).then((res) => {
      if (res?.data?.modifiedCount) {
        Swal.fire({
            title: "Blocked",
            icon: "success"
          });
          window.location.reload();
  
      }
    });

  }
  const handleUnBlock = (id)=>{
    const data = {
      status: "active",
      
    };
    axios.patch(`/update-user-status/${id}`, data).then((res) => {
      if (res?.data?.modifiedCount) {
        Swal.fire({
            title: "unBlocked",
            icon: "success"
          });
          window.location.reload();
  
      }
    });

  }
  const handleVolunteer = (id)=>{
    const data = {
      role: "volunteer",
      
    };
    axios.patch(`/update-user-role/${id}`, data).then((res) => {
      if (res?.data?.modifiedCount) {
        Swal.fire({
            title: "Updated To Volunteer",
            icon: "success"
          });
          window.location.reload();
  
      }
    });

  }
  const handleAdmin = (id)=>{
    const data = {
      role: "admin",
      
    };
    axios.patch(`/update-user-role/${id}`, data).then((res) => {
      if (res?.data?.modifiedCount) {
        Swal.fire({
            title: "Updated To Admin",
            icon: "success"
          });
          window.location.reload();
  
      }
    });

  }

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
            
                <th>Image</th>
                <th>Email</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user._id}>
               
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{user?.email}</span>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.status}</td>
                  <td>
              
                      {user?.status === "active" ? (
                        
                          <button onClick={()=>handleBlock(user._id)} className="btn btn-error text-white font-bold">
                            Block
                          </button>
                      
                      ) : (
                        
                          <button onClick={()=>handleUnBlock(user._id)} className="btn btn-error text-white font-bold">
                            UnBlock
                          </button>
                       
                      )}
                      </td>

                      
                      <td>  <button onClick={()=>handleVolunteer(user._id)} className="btn btn-error text-white font-bold">
                          Make volunteer
                        </button></td>
                   
                      <td>
                        <button onClick={()=>handleAdmin(user._id)} className="btn btn-error text-white font-bold">
                          Make Admin
                        </button></td>
                   
                    
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="py-10  flex justify-center gap-4 ">
        {totalPageArray.map((pageNumber, i) => (
          <button
            key={i}
            onClick={() => setCurrentPageNumber(pageNumber)}
            className={`${
              currentPageNumber == pageNumber ? "bg-red-600 text-white" : ""
            } px-5 py-1 btn `}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default AllUsers;
