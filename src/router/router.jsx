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
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AllBloodDonationRequest from "../Pages/Dashboard/Admin/AllBloodDonationRequest/AllBloodDonationRequest";
import AdminProtectedRoute from "../Pages/Dashboard/Admin/AdminProtectedRoute/AdminProtectedRoute";
import AllPendingDonationRequests from "../Pages/AllPendingDonationRequests/AllPendingDonationRequests";
import BloodDonationRequestDetails from "../Pages/BloodDonationRequestDetails/BloodDonationRequestDetails";
import PrivetRoute from './../PrivetRoute/PrivetRoute';
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
        path: "/all-pending-donation-requests",
        element: <AllPendingDonationRequests />,
      },
      {
        path: "/blood-donation-req-details/:id",
        loader: ({ params }) =>
        fetch(`http://localhost:5000/blood-donation-request/${params.id}`),
        
        element: <PrivetRoute><BloodDonationRequestDetails /></PrivetRoute>,
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
        path:'/dashboard/my-donation-requests-user',
        element:<MyAllBloodDonationRequests/>

      },
      {
        path:'/dashboard/create-donation-request',
        element:<CreateBloodDonationRequest/>

      },
      {
        path:'/dashboard/all-users',
        element:<AdminProtectedRoute><AllUsers/></AdminProtectedRoute>

      },
      {
        path:'/dashboard/all-blood-donation-requests',
        element:<AdminProtectedRoute><AllBloodDonationRequest/></AdminProtectedRoute>

      },
    ]

  }
]);

export default router;
