import { Outlet } from "react-router-dom";
import useUserRole from './../hooks/useUserRole';
import DonorRoutes from './../Pages/Dashboard/Donor/DonorRoutes/DonorRoutes';
import AdminRoutes from './../Pages/Dashboard/Admin/AdminRoutes/AdminRoutes';
import VolunteerRoutes from './../Pages/Dashboard/Volunteer/VolunteerRoutes/VolunteerRoutes';

const Dashboard = () => {
    const role=useUserRole()

    return (
        <div className="w-4/5 mx-auto pt-5">
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-3 rounded-md font-bold   bg-[#ff4a4a] text-white p-2">
            {
              role==='admin'?<AdminRoutes/>:role==='donor'?<DonorRoutes/>:<VolunteerRoutes/>
            }
          </div>
  
          <div className="bg-green-100 lg:col-span-9 p-3">
            <Outlet />
          </div>
        </main>
      </div>
    );
};

export default Dashboard;