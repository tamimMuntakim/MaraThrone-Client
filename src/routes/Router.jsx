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
import MarathonDetails from "../pages/MarathonDetails";
import Loader from "../components/Loader";
import PrivateRoute from "../providers/PrivateRoute";
import axios from "axios";
import RegisterMarathon from "../pages/RegisterMarathon";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

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
                    loader: async () => {
                        try {
                            const response = await axios.get("https://b11-assn-11-mara-throne-server.vercel.app/marathons");
                            return response.data;
                        } catch (error) {
                            throw new Response("Marathon not found", { status: 404 });
                        }
                    },
                    element:
                        <PrivateRoute>
                            <Marathons></Marathons>
                        </PrivateRoute>,
                    hydrateFallbackElement: <Loader></Loader>,
                },
                {
                    path: "/marathon-details/:id",
                    loader: async ({ params }) => {
                        const { id } = params;
                        try {
                            const response = await axios.get(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/${id}`);
                            return response.data;
                        } catch (error) {
                            throw new Response("Marathon not found", { status: 404 });
                        }
                    },
                    element:
                        <PrivateRoute>
                            <MarathonDetails></MarathonDetails>
                        </PrivateRoute>,
                    hydrateFallbackElement: <Loader></Loader>,
                },
                {
                    path: "/registration/:id",
                    loader: async ({ params }) => {
                        const { id } = params;
                        try {
                            const response = await axios.get(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/${id}`);
                            return response.data;
                        } catch (error) {
                            throw new Response("Marathon not found", { status: 404 });
                        }
                    },
                    element:
                        <PrivateRoute>
                            <RegisterMarathon></RegisterMarathon>
                        </PrivateRoute>,
                    hydrateFallbackElement: <Loader></Loader>
                },
                {
                    path: "/about-us",
                    element: <AboutUs></AboutUs>,
                },
                {
                    path: "/contact-us",
                    element: <ContactUs></ContactUs>,
                },
            ]
        },
        {
            path: "/dashboard",
            element:
                <PrivateRoute>
                    <DashboardLayout></DashboardLayout>
                </PrivateRoute>,
            children: [
                {
                    index: true,
                    element: <div className="flex justify-center items-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-secondary my-8 md:my-20">Welcome to Dashboard!</h1>
                    </div>,
                },
                {
                    path: "/dashboard/add-marathon",
                    element:
                        <PrivateRoute>
                            <AddMarathon></AddMarathon>
                        </PrivateRoute>,
                },
                {
                    path: "/dashboard/my-marathons",
                    element:
                        <PrivateRoute>
                            <MyMarathons></MyMarathons>
                        </PrivateRoute>,
                },
                {
                    path: "/dashboard/my-applied-marathons",
                    element:
                        <PrivateRoute>
                            <MyAppliedMarathons></MyAppliedMarathons>
                        </PrivateRoute>,
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