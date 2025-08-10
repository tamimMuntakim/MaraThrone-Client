import { TbFaceIdError } from "react-icons/tb";
import { Link } from 'react-router';
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 md:px-0">
            <title>MaraThrone || 404 Not Found</title>

            <div className="bg-white rounded-lg w-full max-w-md mx-auto flex flex-col items-center p-10 shadow-md shadow-red-200 text-center">
                <div className="bg-red-200 rounded-full p-6 shadow-sm shadow-red-200">
                    <TbFaceIdError className="text-red-600 w-20 h-20 md:w-28 md:h-28" />
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-8 mb-2">
                    404
                </h1>

                <p className="text-2xl font-semibold text-gray-700 mb-4">
                    Page Not Found
                </p>

                <p className="text-gray-600 mb-8 max-w-xs md:max-w-sm">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>

                <Link to="/" className="btn btn-accent rounded-full px-8 py-3 flex items-center gap-3 text-white font-semibold">
                        <IoArrowBackCircleSharp className="w-6 h-6 md:w-7 md:h-7" />
                        Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
