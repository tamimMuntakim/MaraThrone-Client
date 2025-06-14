import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Marathons from "../pages/Marathons";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/dashboard",
                    element: <Dashboard></Dashboard>,
                },
                {
                    path: "/marathons",
                    element: <Marathons></Marathons>,
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                },
            ]
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>,
        },
    ]
)

export default router;