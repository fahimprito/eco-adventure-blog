import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdventureDetails from "../pages/AdventureDetails";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ResetPassword from "../components/ResetPassword/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/myprofile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
            },
            {
                path: "/updateprofile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path: "/adventure/:id",
                element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
                loader: () => fetch('/adventures.json')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/resetpassword",
                element: <ResetPassword></ResetPassword>,
            },
        ]
    },
]);

export default router;