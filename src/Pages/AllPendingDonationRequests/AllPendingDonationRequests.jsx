import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllPendingDonationRequests = () => {
  const axios = useAxiosSecure();
  const [allPendingReq, setAllPendingReq] = useState([]);

  useEffect(() => {
    axios.get("/all-blood-donation-requests").then((res) => {
      setAllPendingReq(
        res?.data?.filter((req) => req?.donationStatus === "pending")
      );
      console.log(res.data);
    });
  }, [axios]);
  return (
    <div className="w-4/5 mx-auto">
      <div className="min-h-[calc(100vh-50vh)]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Requester Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allPendingReq.map((req) => (
                <tr key={req._id}>
                  <td>{req?.requesterName}</td>
                  <td>
                    <p>District : {req?.recipientDistrict}</p>
                    <p>Upazila : {req?.recipientUpazila}</p>
                  </td>
                  <td> {req?.donationDate}</td>
                  <td>{req?.donationTime}</td>
                  <td><Link to={`/blood-donation-req-details/${req?._id}`} className="btn btn-error text-white">View Details</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPendingDonationRequests;
