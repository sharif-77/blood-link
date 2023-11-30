import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import Error from "../Pages/Error/Error";
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
import ContentManagement from "../Pages/Dashboard/Admin/ContentManagement/ContentManagement";
import UpdateDonationReq from "../Pages/Dashboard/Donor/Pages/UpdateDonationReq/UpdateDonationReq";
import AddBlog from './../Pages/Dashboard/Admin/AddBlog/AddBlog';
import VolunteerProtectedRoute from "../Pages/Dashboard/Volunteer/VolunteerProtectedRoute/VolunteerProtectedRoute";
import Blog from "../Pages/Blog/Blog";
import Funding from "../Pages/Funding/Funding";
import SearchDonor from "../Pages/SearchDonor/SearchDonor";
import CheckoutForm from "../Pages/Funding/Payment/CheckoutForm";
import Profile from "../Pages/Dashboard/Pages/Profile/Profile";
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/all-pending-donation-requests",
        element: <AllPendingDonationRequests />,
      },
      {
        path: "/blood-donation-req-details/:id",
        loader: ({ params }) =>
        fetch(`https://blood-link-server.vercel.app/blood-donation-request/${params.id}`),
        
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
        path: "/search-donor",
        element: <SearchDonor />,
      },
      {
        path: "/funding",
        element:<PrivetRoute> <CheckoutForm /></PrivetRoute>,
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
        path:'/dashboard/update-donation-request/:id',
        loader: ({ params }) =>
        fetch(`https://blood-link-server.vercel.app/blood-donation-request/${params.id}`),
        element:<UpdateDonationReq/>

      },
      {
        path:'/dashboard/all-users',
        element:<AdminProtectedRoute><AllUsers/></AdminProtectedRoute>

      },
      {
        path:'/dashboard/all-blood-donation-requests',
        element:<AdminProtectedRoute><AllBloodDonationRequest/></AdminProtectedRoute>

      },
      {
        path:'/dashboard/all-blood-donation-requests-volunteer',
        element:<VolunteerProtectedRoute><AllBloodDonationRequest/></VolunteerProtectedRoute>

      },
      {
        path:'/dashboard/content-management',
        element:<ContentManagement/>

      },
      {
        path:'/dashboard/content-management/add-blog',
        element:<AddBlog/>

      },
      {
        path:'/dashboard/profile',
        element:<Profile/>

      },
    ]

  }
]);

export default router;
