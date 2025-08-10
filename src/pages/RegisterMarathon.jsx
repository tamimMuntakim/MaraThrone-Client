import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterMarathon = () => {
    const marathon = useLoaderData();
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newRegistration = Object.fromEntries(formData.entries());
        newRegistration.marathonId = marathon?._id;

        axios.post('https://b11-assn-11-mara-throne-server.vercel.app/registrations', {
            ...newRegistration
        })
            .then(function (response) {
                if (response?.data?.insertedId) {
                    axios.patch(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/increment/${marathon?._id}`)
                        .then(function (res) {
                            if (res?.data?.modifiedCount) {
                                navigate("/dashboard/my-applied-marathons");
                                Swal.fire({
                                    icon: "success",
                                    title: "Registration successfull !!",
                                    timer: 1500
                                });
                                e.target.reset();
                            } else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Please try again later!!",
                                    timer: 1500
                                });
                            }
                        }) 
                }
            })
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Please try again later!!",
                    timer: 1500
                });
            });
    }

    return (
        <section id="register-marathon">
            <title>MaraThrone || Register Marathon</title>
            <h1 className='mt-5 mb-3 text-2xl md:mt-8 md:mb-6 md:text-4xl font-bold text-secondary text-center'>Marathon Registration Details</h1>
            <div className='bg-base-200 border-base-300 rounded-box border mb-3 md:mb-6'>
                <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleRegisterSubmit}>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold ">User Email<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full " value={user?.email} readOnly name="userEmail" />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Title<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Give a title" value={marathon?.title} name="marathonTitle" readOnly />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Marathon Start Date<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full"
                            value={format(parseISO(marathon?.regStartDate), "EEEE, MMMM do, yyyy")} name='marathonStartDate' readOnly />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">First Name<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Provide first name" name="firstName" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Last Name<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Provide last name" name="lastName" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Contact Number<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Provide contact number" name="contactNum" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Additional Info<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Provide additional information" name="addInfo" required />
                    </div>
                    <button type='submit' className='btn btn-secondary w-full font-bold text-white mt-4 lg:col-span-2'>Register</button>
                </form>
            </div>
        </section>
    );
};

export default RegisterMarathon;