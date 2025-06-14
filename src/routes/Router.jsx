import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Marathons from "../pages/Marathons";

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
    ]
)

export default router;