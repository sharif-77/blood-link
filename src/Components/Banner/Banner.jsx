const Banner = () => {
  return (
    <main className="w-4/5 mx-auto ">
      <div className="flex flex-col md:flex-row justify-between bg-[#effaf2] p-10 rounded-tl-badge rounded-md gap-10">
        <div className="flex-1 flex flex-col  items-center justify-center gap-10">
            <div><p className="capitalize text-6xl font-bold">donate blood, <br /> save live!</p></div>
          <div className="flex gap-2 flex-col lg:flex-row justify-between items-center">
            <button className="btn btn-accent bg-white px-10">
              Join As A Donor
            </button>
            <button className="btn btn-accent bg-white px-10 ">
            Search Donors
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="rounded-full rounded-bl-none "
            src="https://i.ibb.co/D5b2HRN/luann-hunt-X20g2-GQs-Vd-A-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
