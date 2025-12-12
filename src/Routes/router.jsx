import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Profile from "../Pages/Profile/Profile";
import AddCrops from "../Pages/AddCrops/AddCrops";
import MyPosts from "../Pages/MyPosts/MyPosts";
import MyInterests from "../Pages/MyInterests/MyInterests";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllCrops from "../Pages/AllCrops/AllCrops";
import SignUp from "../Pages/SingUp/SignUp";
import CropDetails from "../Pages/CropDetails/CropDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        path: "/",
        loader: () =>
          fetch("https://krishi-link10-server.vercel.app/latest-crops"),
      },
      {
        path: "/AllCrops",
        Component: AllCrops,
        loader: () => fetch("https://krishi-link10-server.vercel.app/crops"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/AddCrops",
        element: (
          <PrivateRoute>
            <AddCrops></AddCrops>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPosts",
        element: (
          <PrivateRoute>
            <MyPosts></MyPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/myInterests",
        element: (
          <PrivateRoute>
            <MyInterests></MyInterests>
          </PrivateRoute>
        ),
      },
      {
        path: "/cropDetails/:id",
        element: (
          <PrivateRoute>
            <CropDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
