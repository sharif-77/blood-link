import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUserStatus = () => {

    const [status, setStatus] = useState({});
    const { user } = useContext(AuthContext);
    const axios = useAxiosPublic();
    const email = user?.email;
  
    useEffect(() => {
      if (email) {
        axios
          .get(`/user-status/${email}`)
          .then((res) => {
            setStatus(res.data.status);
          })
          .catch((error) => {
            console.error( error);
          });
      }
    }, [email, axios]);
  
    return status;
};

export default useUserStatus;