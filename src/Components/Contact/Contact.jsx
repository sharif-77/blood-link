import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-4/5 mx-auto py-5 my-20">
      <div className="mb-10 flex items-center justify-center uppercase">
        <h1 className="text-4xl  font-bold">
          <span className="text-red-600">Contact</span> with us
        </h1>
      </div>

      <main className="flex flex-col  lg:items-start lg:grid grid-cols-12    gap-10 lg:gap-5">
        <div className="col-span-4 space-y-5">
          <h1 className="mb-10 text-2xl font-bold">Office Address</h1>

          <div>
            <p className="flex gap-5">
              <span>
                <FaHome className="text-2xl" />
              </span>{" "}
              <span>
                <span className=" font-bold">Dhaka Office:</span> Level -7,
                Suite -2, A K Complex, 19 Green Road,Dhanmondi, Dhaka – 1205,
                Bangladesh
              </span>
            </p>
          </div>

          <div>
            <p className="flex  gap-5">
              <span>
                <FaHome className="text-2xl" />
              </span>{" "}
              <span>
                <span className=" font-bold">Chittagong Office:</span> Agrabad
                Shopping Complex(2nd Floor), 1742 Sk. Mujib Road, Agrabad,
                Chittagong – 4100
              </span>
            </p>
          </div>

          <div>
            <p className="flex gap-5">
              <span>
                <FaPhoneAlt className="text-xl" />
              </span>{" "}
              <span>
                <span className=" font-bold">Phone:</span> +88 01913 040400, +88
                01603 040400
              </span>
            </p>
          </div>

          <div>
            <p className="flex gap-5">
              <span>
                <MdEmail className="text-xl" />
              </span>{" "}
              <span>
                <span className=" font-bold">Email:</span>{" "}
                bloodlink633@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* form start */}

        <div className=" bg-green-600 p-10 lg:col-span-8 rounded-md">
          <h1 className="text-white mb-10 text-2xl font-bold">
            GET IN TOUCH WITH US
          </h1>
          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full block py-2 px-5 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full block py-2 px-5 rounded"
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full block py-2 px-5 rounded"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="w-full block py-2 px-5 rounded"
                />
              </div>
              <div className="mt-5">
                <textarea
                  className="w-full resize-none py-2 px-5 rounded"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <div className="flex items-center justify-center mt-5">
                <button
                  className="text-xl uppercase font-bold text-white bg-[#f42a45] py-3 px-5 rounded-md"
                  type="submit"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
