import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const BloodDonationRequestDetails = () => {
  const { user } = useAuth();
  const req = useLoaderData();
  console.log(req);
  const axios = useAxiosSecure();

  const container = document.createElement("div");
  container.innerHTML = `<div className="w-4/5  mx-auto">
  <div className="card  bg-base-100 shadow-xl">
    <div className="p-2 space-y-2 mt-5">
      <h2 className="card-title">Donor Name : ${user?.displayName}</h2>
      <h2 className="card-title">Donor Email : ${user?.email}</h2>
     
    </div>
  </div>
</div>`;

  const handleDonate = () => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      html: container,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          currentStatus: "inprogress",
          donorName: user?.displayName,
          donorEmail:user?.email
        };
        axios.patch(`/update-req-status/${req._id}`, data).then((res) => {
          console.log(res.data);
          if (res?.data?.modifiedCount) {
            Swal.fire({
                title: "Confirm!",
                icon: "success"
              });
          }
        });
       
      }
    });
  };
  return (
    <div className="w-4/5 mx-auto min-h-[calc(100vh-50vh)]">
      <div className="card p-5 bg-base-100 shadow-xl text-xl">
        <p>Requester Name : {req?.requesterName}</p>
        <p>Requester Email : {req?.requesterEmail}</p>
        <p>Recipient Name : {req?.recipientName}</p>
        <p>Recipient BloodGroup : {req?.recipientBloodGroup}</p>
        <p>Recipient District : {req?.recipientDistrict}</p>
        <p>Recipient Upazila : {req?.recipientUpazila}</p>
        <p>Hospital Name : {req?.hospitalName}</p>
        <p>Full Address : {req?.fullAddress}</p>
        <p>Donation Date : {req?.donationDate}</p>
        <p>Donation Time : {req?.donationTime}</p>
        <p>Message : {req?.requestMessage}</p>
        <button
          onClick={handleDonate}
          className="btn btn-error text-white mt-5"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default BloodDonationRequestDetails;
