import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOutUser}=useContext(AuthContext)
    return(
        <div className="py-6">

            <div className="w-4/5 mx-auto flex flex-col  gap-10 lg:flex-row lg:gap-0 items-center justify-between">

                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="w-16 rounded-full" src="https://i.ibb.co/fntVn8W/download-2.png" alt="" />
                    <span className="text-xl font-bold uppercase ">BloodLink</span>
                    
                </div>
                
               <div className="uppercase grid grid-cols-3  md:flex text-xs lg:text-base overflow-hidden" >
               <NavLink to='/' className={({isActive})=>`${isActive&&`  bg-[#f42a45] text-white `} py-2 px-3 text-center rounded-md font-bold `}>Home</NavLink>
               <NavLink to='/blog' className={({isActive})=>`${isActive&&`  bg-[#f42a45] text-white `} py-2 px-3 text-center rounded-md font-bold `}>Blog</NavLink>
               <NavLink to='/register' className={({isActive})=>`${isActive&&`  bg-[#f42a45] text-white `} py-2 px-3 text-center rounded-md font-bold `}>Register</NavLink>
            
               <NavLink to='/all-pending-donation-requests' className={({isActive})=>`${isActive&&`  bg-[#f42a45] text-white `} py-2 px-3 text-center rounded-md font-bold `}>Blood Donation requests</NavLink>
               <NavLink to='/funding' className={({isActive})=>`${isActive&&`  bg-[#f42a45] text-white `} py-2 px-3 text-center rounded-md font-bold `}> Funding </NavLink>

               {
                user && <NavLink to='/dashboard' className={({isActive})=>`${isActive&&`  bg-[#f42a45] text-white `} py-2 px-3 text-center rounded-md font-bold `}>Dashboard</NavLink>
              }
               
               </div>

               <div className="flex items-center gap-4 ">
               <div className="avatar">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?user?.photoURL:"https://i.ibb.co/s2hVRQm/user.png"} />
                </div>
                </div>

                {
                    user?<button  onClick={()=>logOutUser()} className="py-2 px-5 rounded-md font-bold btn" >Logout</button>:<NavLink to='/login' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Login</NavLink>
                }


               </div>
               

            </div>
    
        </div>
    )}
export default Navbar;