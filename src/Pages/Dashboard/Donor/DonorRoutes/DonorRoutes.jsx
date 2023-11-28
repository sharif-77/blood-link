import { Link, NavLink } from "react-router-dom";
import { FaCartPlus, FaHome } from "react-icons/fa";

const DonorRoutes = () => {
    return(
        <div className="uppercase flex flex-col gap-3   " >
               <NavLink to='/dashboard' className={({isActive})=>`${isActive&&` bg-green-600 text-white `} py-2 px-3 text-center rounded-md font-bold shadow-md  `}>User Home</NavLink>
               <NavLink to='/dashboard/my-donation-requests-user' className={({isActive})=>`${isActive&&` bg-green-600 text-white `} py-2 px-3 text-center rounded-md font-bold shadow-md  `}>my donation requests</NavLink>
               <NavLink to='/dashboard/create-donation-request' className={({isActive})=>`${isActive&&` bg-green-600 text-white `} py-2 px-3 text-center rounded-md font-bold shadow-md  `}>Create donation request</NavLink>
               <div className="grid h-[2px] card bg-base-300 rounded-box place-items-center my-5"></div>
               <NavLink to='/' className={({isActive})=>`${isActive&&` bg-green-600 text-white `} py-2 px-3 text-center rounded-md font-bold shadow-md  `}>Home</NavLink>
               
               </div>
    )}
export default DonorRoutes;