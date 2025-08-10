import axios from 'axios';
import { parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

const UpdateModalCard = ({ modalMarathonId }) => {
    const [modalMarathon, setModalMarathon] = useState();

    useEffect(() => {
        if (modalMarathonId){
            axios.get(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/${modalMarathonId}`)
                .then(function (response) {
                    setModalMarathon(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [modalMarathonId]);

    const [newRegStartDate, setNewRegStartDate] = useState();
    const [newRegEndDate, setNewRegEndDate] = useState();
    const [newRarathonStartDate, setNewMarathonStartDate] = useState();

    if (modalMarathon) {
        setNewRegStartDate(parseISO(modalMarathon?.regStartDate));
        setNewRegEndDate(parseISO(modalMarathon?.regEndDate));
        setNewMarathonStartDate(parseISO(modalMarathon?.marathonStartDate));
    }

    const handleAddSubmit = () => {

    }
    return (
        <div className="modal-box w-11/12 md:container md:mx-auto">
            <h1 className='text-xl md:mt-8 md:mb-6 md:text-2xl font-bold text-secondary text-center'>Update Marathon Details</h1>
            <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleAddSubmit}>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Title<span className='text-red-400'>*</span> </label>
                    <input type="text" className="input w-full" placeholder="Give a title" name="title" required />
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Start Registration Date<span className='text-red-400'>*</span> </label>
                    <DatePicker
                        className='input w-full'
                        selected={newRegStartDate}
                        required
                        onChange={(date) => setNewRegStartDate(date)}
                    />
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">End Registration Date<span className='text-red-400'>*</span> </label>
                    <DatePicker
                        className='input w-full'
                        selected={newRegEndDate}
                        required
                        onChange={(date) => setNewRegEndDate(date)}
                    />
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Marathon Start Date<span className='text-red-400'>*</span> </label>
                    <DatePicker
                        className='input w-full'
                        selected={newRarathonStartDate}
                        required
                        onChange={(date) => setNewMarathonStartDate(date)}
                    />
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Location<span className='text-red-400'>*</span> </label>
                    <input type="text" className="input w-full" placeholder="Provide location details" name="location" required />
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Running Cistance<span className='text-red-400'>*</span></label>
                    <select className="input w-full" placeholder="Select total running distance" name="distance" required>
                        <option value="">--Please choose an option--</option>
                        <option value="25K">25k</option>
                        <option value="10K">10k</option>
                        <option value="3K">3k</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Description<span className='text-red-400'>*</span> </label>
                    <input type="text" className="input w-full" placeholder="Describe the roommate" name="description" required />
                </div>
                <div className='flex flex-col gap-2 md:text-base w-full'>
                    <label className="label font-semibold">Marathon Image<span className='text-red-400'>*</span> </label>
                    <input type="text" className="input w-full" placeholder="Provide marathon banner image" name="marathonImg" required />
                </div>
                <button type='submit' className='btn btn-secondary w-full font-bold text-white mt-4'>Add</button>
            </form>
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-accent text-white">Close</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModalCard;