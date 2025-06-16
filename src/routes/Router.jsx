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
import DashboardLayout from "../layouts/DashboardLayout";
import AddMarathon from "../pages/AddMarathon";
import MyMarathons from "../pages/MyMarathons";
import MyAppliedMarathons from "../pages/MyAppliedMarathons";

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
                    path: "/marathons",
                    element: <Marathons></Marathons>,
                },
            ]
        },
        {
            path: "/dashboard",
            element: <DashboardLayout></DashboardLayout>,
            children: [
                {
                    index: true,
                    element: <div className="flex justify-center items-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-secondary my-8 md:my-20">Welcome to Dashboard!</h1>
                    </div>,
                },
                {
                    path: "/dashboard/add-marathon",
                    element: <AddMarathon></AddMarathon>,
                },
                {
                    path: "/dashboard/my-marathons",
                    element: <MyMarathons></MyMarathons>,
                },
                {
                    path: "/dashboard/my-applied-marathons",
                    element: <MyAppliedMarathons></MyAppliedMarathons>,
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