import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      }
    ]
  },
])