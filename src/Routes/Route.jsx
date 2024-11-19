import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Home/Services/Services";
import SignUp from "../pages/Shared/SignUp/SignUp";
import SignIn from "../pages/Shared/SignIn/SignIn";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Booking from "../pages/Home/Booking/Booking";
import MyBooking from "../pages/Shared/MyBooking/MyBooking";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
          path:"/services",
          element: <Services></Services>
        },
        {
          path:"/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        },
        {
          path:"/booking/:id",
          element: <PrivateRoute><Booking></Booking></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-server-2-copy.vercel.app/services/${params.id}`)
        },
        {
          path:'/myBooking',
          element: <MyBooking></MyBooking>
        }
  
      ]
    },
  ]);



export default router;