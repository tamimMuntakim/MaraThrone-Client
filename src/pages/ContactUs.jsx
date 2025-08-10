import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary via-cyan-700 to-secondary py-16">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Have questions, suggestions, or need support? We’d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
                    <FaEnvelope className="text-primary text-4xl mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-600">support@marathrone.com</p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
                    <FaPhone className="text-primary text-4xl mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-600">+880 123-456-7890</p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
                    <FaMapMarkerAlt className="text-primary text-4xl mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Location</h3>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
                    <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
                        <div>
                            <label className="block font-medium mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                        </div>
                        <button
                        type="button"
                            className="w-full btn btn-primary text-white"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
