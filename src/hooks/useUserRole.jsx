import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";

const useUserRole = () => {
  const [role, setRole] = useState({});
  const { user } = useContext(AuthContext);
  const axios = useAxiosPublic();
  const email = user?.email;

  useEffect(() => {
    if (email) {
      axios
        .get(`/user-role/${email}`)
        .then((res) => {
          setRole(res.data.role);
        })
        .catch((error) => {
          console.error( error);
        });
    }
  }, [email, axios]);

  return role;
};

export default useUserRole;
