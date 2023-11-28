import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useTotalBloodDonationRequest = () => {
    const axios = useAxiosSecure();
    const [totalBloodDonationRequest, setTotalBloodDonationRequest] = useState(0);

    useEffect(() => {
        axios.get("/bloodDonationCount").then((res) => {
          console.log(res.data.result);
          setTotalBloodDonationRequest(res.data.result);
        });
      }, [axios]);
    return totalBloodDonationRequest
};

export default useTotalBloodDonationRequest;