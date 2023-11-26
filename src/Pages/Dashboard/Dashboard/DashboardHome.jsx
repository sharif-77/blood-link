import useUserRole from "../../../hooks/useUserRole";
import AdminHome from './../Admin/AdminHome/AdminHome';
import DonorHome from './../Donor/DonorHome/DonorHome';
import VolunteerHome from './../Volunteer/VolunteerHome/VolunteerHome';


const DashboardHome = () => {
    const role=useUserRole()

    return (
        <div>
            
            {
              role==='admin'?<AdminHome/>:role==='donor'?<DonorHome/>:<VolunteerHome/>
            }
            
        </div>
    );
};

export default DashboardHome;