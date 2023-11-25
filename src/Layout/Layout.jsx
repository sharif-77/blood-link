import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from './../Components/Navbar/Navbar';
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
     <Navbar/>
      <Outlet />
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
