import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
    const handleContact = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Message sent Successfully! We will contact you soon..",
            timer: 1000
        });
        e.target.reset();
    }
    return (
        <div className="bg-white text-gray-800">
            <title>MaraThrone || Contact Us</title>
            <section className="bg-gradient-to-r from-primary via-cyan-700 to-secondary py-8 md:py-16 rounded-lg">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <h1 className="text-2xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="md:text-lg max-w-2xl mx-auto text-sm">
                        Have questions, suggestions, or need support? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="mx-auto mt-7 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:shadow-xl transition">
                    <FaEnvelope className="text-primary text-xl md:text-3xl mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-600">support@marathrone.com</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:shadow-xl transition">
                    <FaPhone className="text-primary text-xl md:text-3xl mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-600">+880 123-456-7890</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 text-center hover:shadow-xl transition">
                    <FaMapMarkerAlt className="text-primary text-xl md:text-3xl mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Location</h3>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
            </section>

            <section className="bg-base-200 mt-7 md:mt-14 py-6 md:py-16 rounded-lg">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-xl md:text-4xl font-bold text-center mb-6">Send Us a Message</h2>
                    <form className="bg-white flex flex-col shadow-lg rounded-lg p-4 md:p-6 gap-2 md:gap-4" onSubmit={handleContact}>
                        <div>
                            <label className="block font-medium mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full input focus:outline-none focus:ring-2 focus:ring-primary "
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full input focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Message</label>
                            <textarea
                                placeholder="Write your message..."
                                className="min-h-32 w-full input focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
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
