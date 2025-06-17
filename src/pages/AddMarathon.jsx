import React, { use, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddMarathon = () => {
    const { user } = use(AuthContext);
    const [regStartDate, setRegStartDate] = useState(new Date());
    const [regEndDate, setRegEndDate] = useState(new Date());
    const [marathonStartDate, setMarathonStartDate] = useState(new Date());

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newMarathon = Object.fromEntries(formData.entries());
        newMarathon.regStartDate = regStartDate;
        newMarathon.regEndDate = regEndDate;
        newMarathon.marathonStartDate = marathonStartDate;
        newMarathon.createdAt = new Date();
        newMarathon.addedByUserEmail = user.email;
        newMarathon.regCount = 0;
        console.log(newMarathon);
        axios.post('http://localhost:3000/marathons', {
            ...newMarathon
        })
            .then(function (response) {
                if (response?.data?.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "New Marathon Details added successfully !!",
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
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Please try again later!!",
                    timer: 1500
                });
            });
    }

    return (
        <div>
            <h1 className='mt-5 mb-3 text-2xl md:mt-8 md:mb-6 md:text-4xl font-bold text-secondary text-center'>New Marathon Details</h1>
            <p className='mb-3 md:mb-6 text-center'>Add new marathon details to help others find suitable event easily</p>
            <div className='bg-base-200 border-base-300 rounded-box border mb-3 md:mb-6'>
                <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleAddSubmit}>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Title<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Give a title" name="title" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Registration Start Date<span className='text-red-400'>*</span> </label>
                        <DatePicker
                            className='input w-full'
                            selected={regStartDate}
                            required
                            onChange={(date) => setRegStartDate(date)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Registration End Date<span className='text-red-400'>*</span> </label>
                        <DatePicker
                            className='input w-full'
                            selected={regEndDate}
                            required
                            onChange={(date) => setRegEndDate(date)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Marathon Start Date<span className='text-red-400'>*</span> </label>
                        <DatePicker
                            className='input w-full'
                            selected={marathonStartDate}
                            required
                            onChange={(date) => setMarathonStartDate(date)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Location<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Provide location details" name="location" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Running Distance<span className='text-red-400'>*</span></label>
                        <select className="input w-full" placeholder="Select total running distance" name="distance" required>
                            <option value="">--Please choose an option--</option>
                            <option value="25K">25k</option>
                            <option value="15K">15k</option>
                            <option value="10K">10k</option>
                            <option value="7K">7k</option>
                            <option value="5K">5k</option>
                            <option value="3K">3k</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Description<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Describe the marathon" name="description" required />
                    </div>
                    <div className='flex flex-col gap-2 md:text-base w-full'>
                        <label className="label font-semibold">Marathon Image<span className='text-red-400'>*</span> </label>
                        <input type="text" className="input w-full" placeholder="Provide marathon banner image" name="marathonImg" required />
                    </div>
                    <button type='submit' className='btn btn-secondary w-full font-bold text-white mt-4'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;