
import useTotalUsers from './../../../../hooks/useTotalUsers';
import useTotalBloodDonationRequest from './../../../../hooks/useTotalBloodDonationRequest';
import useAuth from './../../../../hooks/useAuth';
import Welcome from './../../../../Components/Welcome/Welcome';
import { FaUsers } from 'react-icons/fa';
import { RiRefund2Fill } from 'react-icons/ri';
import { MdBloodtype } from 'react-icons/md';

const VolunteerHome = () => {
    const allUsers=useTotalUsers()
    const totalBloodDonationReq=useTotalBloodDonationRequest()
    const { user } = useAuth();
    return(
        <div>
        <div>
          <Welcome heading={user?.displayName} />
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
          <div className="bg-violet-600 text-white p-5 rounded-lg flex gap-20">
            <div className="font-bold text-4xl">
              <FaUsers />
            </div>
            <div className="text-xl">
              <p>All User</p>
              <p className="text-3xl">{allUsers}</p>
            </div>
          </div>
          {/* Total funding */}
          <div className="bg-red-500 text-white p-5 rounded-lg flex gap-20">
            <div className="font-bold text-4xl">
            <RiRefund2Fill />
            </div>
            <div className="text-xl">
              <p>Total Funding</p>
              <p></p>
            </div>
          </div>
          {/* total blood donation requests */}
          <div className="bg-orange-600 text-white p-5 rounded-lg flex gap-20">
            <div className="font-bold text-4xl">
            <MdBloodtype />
            </div>
            <div className="text-xl">
              <p>Total Blood Donation Requests</p>
              <p>{totalBloodDonationReq}</p>
            </div>
          </div>
          
        </div>
      </div>
    )}
export default VolunteerHome;