import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './../AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if (loading) {
        return <p className="text-center font-bold">Data Loading...</p>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'/>
};

export default PrivetRoute;