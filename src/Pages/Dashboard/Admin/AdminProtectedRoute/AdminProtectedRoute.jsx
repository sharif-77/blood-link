import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../../../../hooks/useUserRole";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const AdminProtectedRoute = ({children}) => {
    const role=useUserRole()
    console.log(role);
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if (loading || role!=='admin') {
        return <p className="text-center font-bold">Data Loading...</p>
    }
    if ( role==='admin') {
        return children
    }
    return <Navigate state={location.pathname} to='/'/>
};

export default AdminProtectedRoute;