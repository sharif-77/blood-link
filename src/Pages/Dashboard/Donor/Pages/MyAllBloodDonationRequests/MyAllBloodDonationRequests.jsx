import useAxiosSecure from "./../../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
const MyAllBloodDonationRequests = () => {
  const { user } = useAuth();
  const [totalRequests, setTotalRequests] = useState(0);
  const [userPerPage, setuserPerPage] = useState(2);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const totalPage = Math.ceil(totalRequests / userPerPage);

  const totalPageArray = [...Array(totalPage).keys()];

  const [myReqs, setMyReqs] = useState([]);

  const axios = useAxiosSecure();

  useEffect(() => {
    axios
      .get(
        `/all-blood-donation-request?email=${user?.email}&page=${currentPageNumber}&limit=${userPerPage}`
      )
      .then((res) => {
        setMyReqs(res.data);
        // setTotalRequests(res.data.length)
      });
  }, [currentPageNumber, userPerPage, axios, user?.email]);

  useEffect(() => {
    axios.get(`/my-bloodDonationCount/${user?.email}`).then((res) => {
      console.log(res.data.result);
      setTotalRequests(res.data.length);
    });
  }, [axios, user?.email]);

  return (
    <div>
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
                          <p className="capitalize">
                            Email : {req?.donorEmail}
                          </p>
                        </div>
                      )}
                    </td>

                    <td>
                      {req.donationStatus === "inprogress" && (
                        <div className="flex gap-2">
                          <button className="btn btn-error text-white">
                            Cancel
                          </button>
                          <button className="btn btn-success text-white">
                            Done
                          </button>
                        </div>
                      )}
                    </td>
                    {/* <td>
                      <Link className="btn btn-info text-white">Edit</Link>
                    </td>
                    <td>
                      <button className="btn btn-warning text-white">
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link className="btn btn-primary">View Details</Link>
                    </td> */}

                    {/* <td><Link to={`/blood-donation-req-details/${req?._id}`} className="btn btn-error text-white">View Details</Link></td> */}
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
export default MyAllBloodDonationRequests;
