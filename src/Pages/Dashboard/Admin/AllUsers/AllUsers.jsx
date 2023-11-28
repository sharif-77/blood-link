import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [userPerPage, setuserPerPage] = useState(2);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  console.log(currentPageNumber);

  const totalPage = Math.ceil(totalUser / userPerPage);

  const totalPageArray = [...Array(totalPage).keys()];

  const [allUsers, setAllUsers] = useState([]);

  const axios = useAxiosSecure();

  useEffect(() => {
    axios
      .get(`/all-users?page=${currentPageNumber}&limit=${userPerPage}`)
      .then((res) => {
        setAllUsers(res.data);
      });
  }, [currentPageNumber, userPerPage, axios]);

  useEffect(() => {
    axios.get("/usersCount").then((res) => {
      console.log(res.data.result);
      setTotalUser(res.data.result);
    });
  }, [axios]);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
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
                    <select name="" id="">
                      {user?.status === "active" ? (
                        <option value="">
                          <button className="btn btn-error text-white font-bold">
                            Block
                          </button>
                        </option>
                      ) : (
                        <option value="">
                          <button className="btn btn-error text-white font-bold">
                            UnBlock
                          </button>
                        </option>
                      )}

                      <option value="">
                        <button className="btn btn-error text-white font-bold">
                          Make volunteer
                        </button>
                      </option>
                      <option value="">
                        <button className="btn btn-error text-white font-bold">
                          Make Admin
                        </button>
                      </option>
                    </select>
                  </td>
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
