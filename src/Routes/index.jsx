import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
     
    ]
  },
])