import React from "react";
import { FaRunning, FaUsers, FaBullseye } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-800">
            <title>MaraThrone || About Us</title>
            <section className="bg-gradient-to-r from-primary via-cyan-700 to-secondary py-8 md:py-16 rounded-lg">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <h1 className="text-2xl md:text-5xl font-bold mb-4">About MaraThrone</h1>
                    <p className="text-sm md:text-lg max-w-2xl mx-auto">
                        Your all-in-one platform for seamless marathon planning, management,
                        and participation.
                    </p>
                </div>
            </section>

            <section className="mt-7 md:mt-14 mx-auto grid md:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:shadow-xl transition">
                    <FaRunning className="text-primary text-xl md:text-3xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        To simplify marathon organization for event planners while making it
                        easy for runners to register, track, and participate.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:shadow-xl transition">
                    <FaBullseye className="text-primary text-xl md:text-3xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        To be the leading global platform for marathons, connecting runners
                        and organizers from every corner of the world.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:shadow-xl transition">
                    <FaUsers className="text-primary text-xl md:text-3xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Community</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        We believe in building a strong community of runners and supporters
                        who inspire and motivate each other.
                    </p>
                </div>
            </section>

            <section className="bg-base-200 mt-7 md:mt-14 py-8 md:py-16 rounded-lg">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl md:text-4xl font-bold mb-4">Join the MaraThrone Movement</h2>
                    <p className="text-gray-700 mb-6">
                        Whether you're a runner, organizer, or fan — there's a place for you
                        in our community. Let's make every race a memorable one.
                    </p>
                    <Link
                        to="/marathons"
                        className="btn btn-primary text-white md:btn-md"
                    >
                        Explore Marathons
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
