import  { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useTotalUsers = () => {
    
    const axios = useAxiosSecure();
    const [totalUser, setTotalUser] = useState(0);

    useEffect(() => {
        axios.get("/usersCount").then((res) => {
          console.log(res.data.result);
          setTotalUser(res.data.result);
        });
      }, [axios]);
    return totalUser
};

export default useTotalUsers;