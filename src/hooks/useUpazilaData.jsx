import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useUpazilaData = () => {
    const axios=useAxiosPublic()
    const [upazilaData,setUpazilaData]=useState([])

    useEffect(()=>{
        axios('https://raw.githubusercontent.com/nuhil/bangladesh-geocode/master/upazilas/upazilas.json')
        .then(res=>{
            setUpazilaData(res.data[2].data)
        })
    },[axios])

    return [upazilaData]
};

export default useUpazilaData;