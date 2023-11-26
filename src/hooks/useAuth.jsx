import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';


const useAuth = () => {
    const {user}=useContext(AuthContext)
    return {user}
};

export default useAuth;