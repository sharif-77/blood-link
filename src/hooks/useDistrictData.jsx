import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useDistrictData = () => {
    const axios=useAxiosPublic()
    const [districtData,setDistrictData]=useState([])

    useEffect(()=>{
        axios('https://raw.githubusercontent.com/nuhil/bangladesh-geocode/master/districts/districts.json')
        .then(res=>{
            setDistrictData(res.data[2].data)
        })
    },[axios])
    return [districtData]
};

export default useDistrictData;