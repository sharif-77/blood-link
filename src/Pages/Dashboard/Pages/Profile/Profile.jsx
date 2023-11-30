import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "./../../../../hooks/useAxiosPublic";
import { useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState({});

  const axios = useAxiosPublic();
  useEffect(() => {
    axios.get(`/user-profile/${user?.email}`).then((res) => {
      console.log(res);
      setCurrentUser(res?.data);
    });
  }, [axios, user?.email]);
  return (
    <div className="flex items-center justify-center p-10">
     
      <div className="card w-4/5 bg-base-100 shadow-xl mt-10">
        <div className="flex items-center justify-center mt-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={currentUser?.image} />
          </div>
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Name : {currentUser?.name}</h2>
          <p>Email : {currentUser?.email}</p>
          <p>Blood Group : {currentUser?.bloodGroup}</p>
          <p>District : {currentUser?.district}</p>
          <p>Upazila :{currentUser?.upazila}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
