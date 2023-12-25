import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import TaskManagement from "../Pages/Dashboard/TaskManagement/TaskManagement";

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
      {
        path: "/TaskManagementHome",
        element: <PrivateRoute><TaskManagement/></PrivateRoute>
      }
    ]
  }
])