import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Search from "../Pages/Search/Search";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/Dashboard/DashboardHome";

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
    ]

  }
]);

export default router;
