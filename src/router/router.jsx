import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Search from "../Pages/Search/Search";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/Dashboard/DashboardHome";
import MyAllBloodDonationRequests from "../Pages/Dashboard/Donor/Pages/MyAllBloodDonationRequests/MyAllBloodDonationRequests";
import CreateBloodDonationRequest from "../Pages/Dashboard/Pages/CreateBloodDonationRequest/CreateBloodDonationRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/search",
        element: <Search />,
      },
 
    ],
    
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'/dashboard',
        element:<DashboardHome/>

      },
      {
        path:'/dashboard/my-donation-requests',
        element:<MyAllBloodDonationRequests/>

      },
      {
        path:'/dashboard/create-donation-request',
        element:<CreateBloodDonationRequest/>

      },
    ]

  }
]);

export default router;
