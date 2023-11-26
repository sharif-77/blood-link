import { useEffect, useState } from "react";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const OurFeaturedWorks = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const axios = useAxiosPublic();
  useEffect(() => {
    axios("/featured").then((res) => {
      setFeaturedData(res.data);
    });
  }, [axios]);
  return (
    <main className="w-4/5 mx-auto my-20">
      {/* <Title heading={`Our Featured Works.`} subHeading=''/> */}
      <div className="mb-10 flex items-center justify-center uppercase">
        <h1 className="text-4xl  font-bold">
          Innovative <span className="text-red-600">Features</span> for <br />{" "}
          Lifesaving Impact.
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {featuredData.map((item) => (
          <div key={item._id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="min-h-[250px] hover:scale-125 transition-all duration-700 " src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default OurFeaturedWorks;
