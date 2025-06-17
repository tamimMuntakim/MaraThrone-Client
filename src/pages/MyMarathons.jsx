import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { MdDeleteForever, MdEditDocument } from 'react-icons/md';
import Swal from 'sweetalert2';
import UpdateModalCard from '../components/UpdateModalCard';
import DatePicker from 'react-datepicker';

const MyMarathons = () => {
    const [myMarathons, setMyMarathons] = useState([]);

    const [refresh, setRefresh] = useState(false);

    const [modalMarathon, setModalMarathon] = useState();

    const [distance, setDistance] = useState("");
    const [newRegStartDate, setNewRegStartDate] = useState(new Date());
    const [newRegEndDate, setNewRegEndDate] = useState(new Date());
    const [newMarathonStartDate, setNewMarathonStartDate] = useState(new Date());

    const { user } = use(AuthContext);

    useEffect(() => {
        axios.get(`https://b11-assn-11-mara-throne-server.vercel.app/my-marathons?email=${user?.email}`)
            .then(function (response) {
                setMyMarathons(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [user?.email, refresh])

    const handleUpdate = (id) => {
        axios.get(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/${id}`)
            .then(function (response) {
                setModalMarathon(response.data);
                setDistance(response.data?.distance || "");
                setNewRegStartDate(response.data?.regStartDate);
                setNewRegEndDate(response.data?.regEndDate);
                setNewMarathonStartDate(response.data?.marathonStartDate);
                document.getElementById('my_modal_4').showModal();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/${id}`)
                    .then((result) => {
                        if (result?.data?.deletedCount) {
                            setRefresh(!refresh);
                            Swal.fire({
                                icon: "success",
                                title: "Post deleted successfully !!",
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
        });
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedMarathon = Object.fromEntries(formData.entries());
        updatedMarathon.regStartDate = newRegStartDate;
        updatedMarathon.regEndDate = newRegEndDate;
        updatedMarathon.marathonStartDate = newMarathonStartDate;

        axios.patch(`https://b11-assn-11-mara-throne-server.vercel.app/marathons/${modalMarathon?._id}`, updatedMarathon)
            .then((result) => {
                if (result?.data?.modifiedCount) {
                    setRefresh(!refresh);
                    document.getElementById('modal-close-btn').click();
                    Swal.fire({
                        icon: "success",
                        title: "Details updated successfully !!",
                        timer: 1500
                    });
                } else {
                    document.getElementById('modal-close-btn').click();
                    Swal.fire({
                        icon: "error",
                        title: "Please try again later!!",
                        timer: 1500
                    });
                }
            })
            .catch(function (error) {
                document.getElementById('modal-close-btn').click();
                Swal.fire({
                    icon: "error",
                    title: "Please try again later!!",
                    timer: 1500
                });
            });
    }

    return (
        <section id="my-marathons" className='mt-5 md:mt-8'>
            <h1 className='mb-2 text-2xl md:mb-4 md:text-4xl font-bold text-secondary text-center'>My Marathons</h1>
            <p className='mb-2 md:mb-4 text-center'>Browse all of your marathon listings</p>
            <div className="overflow-x-auto rounded-box border border-slate-200 bg-base-100 mb-8 ">
                <table className="table table-zebra">
                    <thead>
                        <tr className='border-b border-b-slate-400 text-xs md:text-sm text-secondary text-center'>
                            <th>#</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Distance</th>
                            <th>Registration Timeline</th>
                            <th>Marathon Date</th>
                            <th>Total Registered</th>
                            <th className='min-w-[90px] md:min-w-[115px] p-0'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myMarathons?.map((marathon, index) => {
                                return (
                                    <tr key={index} className='border-b border-b-slate-400 text-xs md:text-sm text-center'>
                                        <td>{index + 1}</td>
                                        <td>{marathon?.title}</td>
                                        <td>{marathon?.location}</td>
                                        <td>{marathon?.distance}</td>
                                        <td>{format(parseISO(marathon?.regStartDate), "MMMM do, yyyy")} - {format(parseISO(marathon?.regEndDate), "MMMM do, yyyy")}</td>
                                        <td>{format(parseISO(marathon?.marathonStartDate), "MMMM do, yyyy")}</td>
                                        <td>{marathon?.regCount}</td>
                                        <td className='p-0'>
                                            <button className="btn btn-xs md:btn-sm bg-secondary text-white font-bold mx-auto" onClick={() => handleUpdate(marathon?._id)}><MdEditDocument className='md:text-base' /></button>
                                            <button className="btn btn-xs md:btn-sm bg-red-600 text-white font-bold mx-auto" onClick={() => handleDelete(marathon?._id)}><MdDeleteForever className='md:text-base' /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 md:container md:mx-auto px-1 py-4 md:px-4 md:py-8">
                    <h1 className='text-xl md:mt-8 md:mb-6 md:text-2xl font-bold text-primary text-center'>Update Marathon Details</h1>
                    <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleUpdateSubmit}>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Title<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Give a title" name="title" defaultValue={modalMarathon?.title} required />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Registration Start Date<span className='text-red-400'>*</span> </label>
                            <DatePicker
                                className='input w-full'
                                selected={newRegStartDate}
                                required
                                onChange={(date) => setNewRegStartDate(date)}
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Registration End Date<span className='text-red-400'>*</span> </label>
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
                                selected={newMarathonStartDate}
                                required
                                onChange={(date) => setNewMarathonStartDate(date)}
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Location<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Provide location details" name="location" defaultValue={modalMarathon?.location} required />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Running Distance<span className='text-red-400'>*</span></label>
                            <select className="input w-full" placeholder="Select total running distance" name="distance" required
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}>
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
                            <input type="text" className="input w-full" placeholder="Describe the marathon" name="description" defaultValue={modalMarathon?.description} required />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Marathon Image<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Provide marathon banner image" name="marathonImg" defaultValue={modalMarathon?.marathonImg} required />
                        </div>
                        <button type='submit' className='btn btn-primary w-full font-bold text-white mt-4'>Update</button>
                    </form>
                    <div className="modal-action px-1">
                        <form method="dialog">
                            <button className="btn btn-accent text-white" id='modal-close-btn'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default MyMarathons;