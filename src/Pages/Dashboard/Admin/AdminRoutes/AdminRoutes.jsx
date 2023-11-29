import { Link } from "react-router-dom";

const AdminRoutes = () => {
    return(
        <div>
            <div className="flex flex-col gap-1 items-center justify-center">
                <Link className=" focus:bg-green-600 py-2 px-4 rounded-md" to='/dashboard' >Admin Home</Link>
                <Link className=" focus:bg-green-600 py-2 px-4 rounded-md" to='/dashboard/all-users' >All Users</Link>
                <Link className=" focus:bg-green-600 py-2 px-4 rounded-md" to='/dashboard/all-blood-donation-requests' >All Blood Donation Request</Link>
                <Link className=" focus:bg-green-600 py-2 px-4 rounded-md" to='/dashboard/content-management' >Content Management</Link>
                <div className="grid h-[2px] card bg-base-300 rounded-box place-items-center  w-full"></div>
                <Link className=" focus:bg-green-600 py-2 px-4 rounded-md" to='/' >Home</Link>
             
            </div>
        </div>
    )}
export default AdminRoutes;