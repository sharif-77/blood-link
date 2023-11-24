import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Login = () => {
  const { logInWithEmailPassword,signInWithGoogle } = useContext(AuthContext);

  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmailPassword(email, password)
      .then(() => {
        toast.success(`Login Success`);
        navigate(location?.state?location.state:'/')
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  const handleGoogleLogin =()=>{
    signInWithGoogle()
    .then(() => {
        toast.success(`Login SuccessFull`);
        navigate(location?.state?location.state:'/')
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });

  }

  return (
    <div className="mb-40 mx-5">
      <div className="shadow-xl p-10 md:w-3/5 lg:w-2/5 bg-[#032b45]  text-white m-auto mt-28 rounded ">
        <p className="text-center my-10 text-xl font-bold">Login </p>
        <form onSubmit={handleLogin} className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email"> Email Address</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col gap-2 relative ">
            <label htmlFor="password"> Password</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type={seePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
            <span
              onClick={() => setSeePassword(!seePassword)}
              className="absolute top-10 right-2 text-black text-2xl"
            >
              {seePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <div className="flex flex-col ">
            <button
              className="bg-[#14c898f3] py-2 px-4 mt-5 rounded-md  font-bold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

      <div>
      <p className="my-5 ">
          Have No Account? please{" "}
          <Link className="ml-1 text-green-400" to="/register">
            Register
          </Link>
        </p>
      </div>


      {/* google */}

      
       <div>
       <div className="relative text-center">
          <div className="before:absolute before:w-32 md:before:w-40 lg:before:w-60 before:h-[2px] before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2"></div>
          <span className=" px-4 py-2">Or</span>
          <div className="after:absolute after:w-32 md:after:w-40 lg:after:w-60 after:h-[2px] after:bg-white after:right-0 after:top-1/2 after:-translate-y-1/2"></div>
        </div>

        <div className="mt-5">
          <button onClick={handleGoogleLogin} className="btn btn-outline text-white">
            {" "}
            <FcGoogle className="text-3xl " /> <span>Continue with Google</span>
          </button>
        </div>
       </div>


      </div>
    </div>
  );
};

export default Login;
