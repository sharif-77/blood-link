import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import Welcome from "../../../../Components/Welcome/Welcome";
import useUserRole from "../../../../hooks/useUserRole";

const AllBloodDonationRequest = () => {
  const [totalRequests, setTotalRequests] = useState(0);
  const [userPerPage, setuserPerPage] = useState(2);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const totalPage = Math.ceil(totalRequests / userPerPage);

  const totalPageArray = [...Array(totalPage).keys()];

  const userRole = useUserRole();
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const [myReqs, setMyReqs] = useState([]);
  console.log(myReqs);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `/all-blood-donation-requests?page=${currentPageNumber}&limit=${userPerPage}`
        )
        .then((res) => {
          setMyReqs(res.data);
        });
    }
 
  }, [axios, user?.email, currentPageNumber, userPerPage, totalRequests]);
  useEffect(() => {
    axios.get(`/bloodDonationCount`).then((res) => {
      console.log(res.data.result);
      setTotalRequests(res.data.result);
    });
  }, [axios, user?.email]);
  const handleCancel = (id) => {
    const data = {
      currentStatus: "canceled",
    };
    axios.patch(`/update-req-status/${id}`, data).then((res) => {
      if (res?.data?.modifiedCount) {
        Swal.fire({
          title: "Canceled",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };
  const handleDone = (id) => {
    const data = {
      currentStatus: "done",
    };
    axios.patch(`/update-req-status/${id}`, data).then((res) => {
      if (res?.data?.modifiedCount) {
        Swal.fire({
          title: "Done",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/blood-donation-request-delete/${id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount) {
            Swal.fire({
              title: "Deleted",
              icon: "success",
            });
            window.location.reload();
          }
        });
      }
    });
  };

  return (

    <div>
         <div className="mb-10">
        <Welcome heading={user?.displayName} />
      </div>
      {myReqs.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Recipient Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                {myReqs.map(
                  (req) =>
                    req.donorName && <th key={req._id}>Donor Name And Email</th>
                )}
                {/* <th>Donor Name And Email</th> */}
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myReqs.map((req) => (
                <tr key={req._id}>
                  <td>
                    <p className="capitalize">{req?.recipientName}</p>
                  </td>
                  <td>
                    <p>District : {req?.recipientDistrict}</p>
                    <p>Upazila : {req?.recipientUpazila}</p>
                  </td>
                  <td> {req?.donationDate}</td>
                  <td>{req?.donationTime}</td>

                  <td>
                    {req.donorName && (
                      <div>
                        <p className="capitalize">Name : {req?.donorName}</p>
                        <p className="capitalize">Email : {req?.donorEmail}</p>
                      </div>
                    )}
                  </td>

                  <td>
                    {req.donationStatus === "inprogress" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCancel(req._id)}
                          className="btn btn-error text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleDone(req._id)}
                          className="btn btn-success text-white"
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </td>

                  <td>
                    <Link
                      to={`/dashboard/update-donation-request/${req._id}`}

                      className={`btn btn-info text-white ${userRole === 'volunteer' ? 'hidden' : ''}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(req._id)}
                      className={`btn btn-warning text-white ${userRole === 'volunteer' ? 'hidden' : ''}`}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/blood-donation-req-details/${req?._id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
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
      ) : (
        ""
      )}
    </div>
  );
};
export default AllBloodDonationRequest;
