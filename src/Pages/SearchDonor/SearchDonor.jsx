import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useDistrictData from "../../hooks/useDistrictData";
import useUpazilaData from "../../hooks/useUpazilaData";

const SearchDonor = () => {
    const [donors,setDonors]=useState()
  const [upazilaData] = useUpazilaData();
  const [districtData] = useDistrictData();
  const axios=useAxiosPublic()

  const handleDonor = (e)=>{
    e.preventDefault();
    // const bloodGroup = e.target.bloodGroup.value;
    // const district = e.target.district.value;
    // const upazila = e.target.upazila.value;
    const bloodGroup = encodeURIComponent(e.target.bloodGroup.value);
    const district = encodeURIComponent(e.target.district.value);
    const upazila = encodeURIComponent(e.target.upazila.value);
    // console.log(bloodGroup,district,upazila);

    axios.get(`search-donor?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`)
    .then(res=>{
        console.log(res.data);
        setDonors(res.data)
    })


  }



  return (
    <main className="w-4/5 mx-auto min-h-[calc(100vh-50vh)]">
     

      <div>
        <div className=" ">
          <div className="shadow-xl p-10 md:w-3/5 lg:w-3/5 bg-[#032b45] text-white m-auto mt-28 rounded ">
            <p className="text-center my-10 text-xl font-bold">Search Donor</p>
            <form onSubmit={handleDonor} className="w-full space-y-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="bloodGroup">Select your blood group:</label>
                <select
                  className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
                  id="bloodGroup"
                  name="bloodGroup"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="district">Select your District</label>
                <select
                  className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
                  id="district"
                  name="district"
                >
                  {districtData.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="upazila">Select your Upazila</label>
                <select
                  name="upazila"
                  className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
                  id="upazila"
                >
                  {upazilaData.map((u) => (
                    <option key={u.id} value={u.name}>
                      {u.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button type="submit" className="btn btn-error text-white ">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>

     {
        donors? <div className="mt-20">
            <div className="mb-2 text-center"><p className="text-2xl font-bold "><span className="text-red-600">Donor</span> Information</p></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
            
                <th>Image</th>
                <th>Email</th>
                <th>Name</th>                
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {donors?.map((donor) => (
                <tr key={donor._id}>
               
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={donor?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{donor?.email}</span>
                  </td>
                  <td>{donor?.name}</td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>:''
     }


    </main>
  );
};

export default SearchDonor;
