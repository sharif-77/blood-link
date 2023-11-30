import useUserRole from '../../../../hooks/useUserRole';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useContext } from 'react';



const VolunteerProtectedRoute = ({children}) => {
    const role=useUserRole()
    console.log(role);
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if (loading || role!=='volunteer') {
        return <p className="text-center font-bold">Data Loading...</p>
    }
    if ( role==='volunteer') {
        return children
    }
    return <Navigate state={location.pathname} to='/'/>
};

export default VolunteerProtectedRoute;