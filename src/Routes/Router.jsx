import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Registration/Register";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path:"/signup",
          element:<Register></Register>
        }
      ]
    },
  ]);