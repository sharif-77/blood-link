import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from './../Components/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
     <Navbar/>
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
