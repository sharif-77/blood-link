import { useContext, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Register = () => {
  const { registerUserWithEmailPassword, update,signInWithGoogle,user,setUser } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState(false);
  const [image,setImage]=useState(null)

  const navigate = useNavigate();
  const axiosPublic=useAxiosPublic()
const image_hosting_key=import.meta.env.VITE_image_upload;
const imageHostingApi=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.url.files;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageFile={image:photoUrl[0]}

    const res= await axiosPublic.post(imageHostingApi,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
    if (res?.data?.data?.display_url) {
      console.log(res?.data?.data?.display_url);
      if (!/(?=.*[A-Z])(?=.*[@$!%*#?&]).{6,}/.test(password)) {
        toast.error(
          "Password must have at least 6 characters, one uppercase letter, and one special character"
        );
        return;
      }
  
      registerUserWithEmailPassword(email, password)
        .then((res) => {
          update(res.user, {
            displayName: name,
            photoURL: res?.data?.data?.display_url
          })
            .then(() => {
              setUser({...user,displayName: name,
                photoURL: res?.data?.data?.display_url})
            })
            .catch();
          toast.success(`Registration SuccessFull`);
          navigate('/')
        })
        .catch((err) => {
          toast.error(`${err.message}`);
        });
      console.log(res?.data?.data?.display_url);

    }

    console.log(res.data);

    // console.log(name,imageFile, email, password);



    
  };

  const handleGoogleRegister = ()=>{
    signInWithGoogle()
    .then(() => {
      toast.success(`Register SuccessFull`);
      navigate('/')
    })
    .catch((err) => {
      toast.error(`${err.message}`);
    });
  }

  return (
    <div className="mb-40 mx-5">
      <div className="shadow-xl p-10 md:w-3/5 lg:w-2/5 bg-[#032b45] text-white m-auto mt-28 rounded ">
        <p className="text-center my-10 text-xl font-bold">Register</p>
        <form onSubmit={handleRegister} className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name"> Your Name</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="url"> Photo Url</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="file"
              name="url"
              id="url"
              placeholder="Enter Your Photo Url"
            />
            {/* <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="url"
              id="url"
              placeholder="Enter Your Photo Url"
            /> */}
          </div>
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
          <div className="flex flex-col my-3 ">
            <button
              className="bg-[#14c898f3] py-2 px-4 rounded-md  font-bold mt-5"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="my-5 ">
            Already Have Account? please
            <Link className="ml-1 text-green-400" to="/login">
              Login
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
          <button onClick={handleGoogleRegister} className="btn btn-outline text-white">
            {" "}
            <FcGoogle className="text-3xl " /> <span>Continue with Google</span>
          </button>
        </div>
       </div>


      </div>
    </div>
  );
};

export default Register;
