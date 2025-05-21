import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AboutUs from "../pages/about/AboutUs";
import Blogs from "../pages/blogs/Blogs";
import Donors from "../pages/donors/Donors";
import BloodRequestForm from "../pages/requestForm/BloodRequestForm";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error Pages 404</div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
            {
        path: "/blood-request",
        element: <BloodRequestForm/>
      },
      {
        path: "/donors",
        element: <Donors/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  }
]);