import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdventureDetails from "../pages/AdventureDetails";
import PrivateRoute from "./PrivateRoute";

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
                path: "/contact",
                element: <Contact></Contact>,
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
        ]
    },
]);

export default router;