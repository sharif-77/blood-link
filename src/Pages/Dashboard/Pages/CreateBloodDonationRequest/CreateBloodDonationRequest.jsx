import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useUpazilaData from "../../../../hooks/useUpazilaData";
import useDistrictData from "../../../../hooks/useDistrictData";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useUserStatus from "../../../../hooks/useUserStatus";

const CreateBloodDonationRequest = () => {
  const axios=useAxiosPublic()
  const status=useUserStatus()
  console.log(status);
  const [upazilaData] = useUpazilaData();
  const [districtData] = useDistrictData();

  const { user } = useAuth();

  const handleDonateRequest = async (e) => {
    e.preventDefault();
    const recipientName = e.target.recipientName.value;
    const recipientBloodGroup = e.target.bloodGroup.value;
    const recipientDistrict = e.target.district.value;
    const recipientUpazila = e.target.upazila.value;
    const hospitalName = e.target.hospitalName.value;
    const fullAddress = e.target.fullAddress.value;
    const donationDate = e.target.donationDate.value;
    const donationTime = e.target.donationTime.value;
    const requestMessage = e.target.requestMessage.value;
    

    const donationRequest={
      requesterName:user?.displayName,
      requesterEmail:user?.email,
      recipientName,
      recipientBloodGroup,
      recipientDistrict,
      recipientUpazila,
      hospitalName,
      fullAddress,
      donationDate,
      donationTime,
      requestMessage,
      donationStatus:'pending'

    }

    axios.post('/blood-donation-request',donationRequest)
    .then(res=>{
      console.log(res.data);
      if (res?.data.insertedId) {
        toast.success('Request Created')
      }
    })

  };

  return (
    <div className="mb-40 ">
      <div className="shadow-xl p-2 md:p-10 md:w-4/5  bg-[#032b45] text-white m-auto  rounded ">
        <p className="text-center my-10 text-xl font-bold">
          Create Donation Request
        </p>
        <form onSubmit={handleDonateRequest} className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="recipientName"> Recipient Name</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="recipientName"
              id="recipientName"
              placeholder="Name"
            />
          </div>
        
          <div className="flex flex-col gap-2">
            <label htmlFor="bloodGroup">Select blood group:</label>
            <select
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              id="bloodGroup"
              name="bloodGroup"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="district">Recipient District</label>
            <select
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              id="district"
              name="district"
            >
              {districtData.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="upazila">Recipient Upazila</label>
            <select
              name="upazila"
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              id="upazila"
            >
              {upazilaData.map((u) => (
                <option key={u.id} value={u.name}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="hospitalName"> Hospital Name</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="hospitalName"
              id="hospitalName"
              placeholder="Hospital Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullAddress">Full Address</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="fullAddress"
              id="fullAddress"
              placeholder="Full Address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="donationDate">Donation Date</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="date"
              name="donationDate"
              id="donationDate"
              placeholder="Donation Date"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="donationTime">Donation Time</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="donationTime"
              id="donationTime"
              placeholder="Donation Time"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="requestMessage">Request Message</label>
            <textarea
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md resize-none"
              type="text"
              name="requestMessage"
              id="requestMessage"
              placeholder="Request Message"
              
            />
          </div>

          <div className="flex flex-col my-3 ">
            <button
              className="bg-[#14c898f3] py-2 px-4 rounded-md  font-bold mt-5 disabled:bg-slate-500"
              type="submit"
            >
              Request
            </button>
          </div>
        </form>
      

      </div>
    </div>
  );
};

export default CreateBloodDonationRequest;
