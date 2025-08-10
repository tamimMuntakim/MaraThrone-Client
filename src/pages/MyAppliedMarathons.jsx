import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { MdDeleteForever, MdEditDocument } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyAppliedMarathons = () => {
    const { user } = use(AuthContext);

    const [myAppliedMarathons, setMyAppliedMarathons] = useState([]);

    const [refresh, setRefresh] = useState(false);
    const [modalMarathon, setModalMarathon] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/my-registrations?email=${user?.email}`)
            .then(function (response) {
                setMyAppliedMarathons(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [user?.email, refresh])

    const handleUpdate = (id) => {
        axios.get(`http://localhost:3000/registrations/${id}`)
            .then(function (response) {
                setModalMarathon(response.data);
                document.getElementById('my_modal_register').showModal();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedRegistration = Object.fromEntries(formData.entries());

        axios.patch(`http://localhost:3000/registrations/${modalMarathon?._id}`, updatedRegistration)
            .then((result) => {
                if (result?.data?.modifiedCount) {
                    setRefresh(!refresh);
                    document.getElementById('applied-modal-close-btn').click();
                    Swal.fire({
                        icon: "success",
                        title: "Details updated successfully !!",
                        timer: 1500
                    });
                } else {
                    document.getElementById('applied-modal-close-btn').click();
                    Swal.fire({
                        icon: "error",
                        title: "Please try again later!!",
                        timer: 1500
                    });
                }
            })
            .catch(function (error) {
                document.getElementById('applied-modal-close-btn').click();
                Swal.fire({
                    icon: "error",
                    title: "Please try again later!!",
                    timer: 1500
                });
            });
    }

    const handleDelete = (id, marathonId) => {
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
                axios.delete(`http://localhost:3000/registrations/${id}`)
                    .then(function (response) {
                        if (response?.data?.deletedCount) {
                            axios.patch(`http://localhost:3000/marathons/decrement/${marathonId}`)
                                .then(function (res) {
                                    if (res?.data?.modifiedCount) {
                                        setRefresh(!refresh);
                                        Swal.fire({
                                            icon: "success",
                                            title: "Registration deleted successfully !!",
                                            timer: 1500
                                        });
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
        });
    }

    return (
        <section id="my-applied-marathons" className='mt-5 md:mt-8'>
            <title>MaraThrone || My Applied Marathons</title>
            <h1 className='mb-2 text-2xl md:mb-4 md:text-4xl font-bold text-secondary text-center'>My Registered Marathons</h1>
            <p className='mb-2 md:mb-4 text-center'>Browse all of your registered marathon listings</p>
            <div className="overflow-x-auto rounded-box border border-slate-200 bg-base-100 mb-8 ">
                <table className="table table-zebra">
                    <thead>
                        <tr className='border-b border-b-slate-400 text-xs md:text-sm text-secondary text-center'>
                            <th>#</th>
                            <th>Marathon Title</th>
                            <th>Marathon Date</th>
                            <th>Registered Name</th>
                            <th>Contact</th>
                            <th>Additional Info</th>
                            <th className='min-w-[90px] md:min-w-[115px] p-0'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAppliedMarathons?.map((marathon, index) => {
                                return (
                                    <tr key={index} className='border-b border-b-slate-400 text-xs md:text-sm text-center'>
                                        <td>{index + 1}</td>
                                        <td>{marathon?.marathonTitle}</td>
                                        <td>{marathon?.marathonStartDate}</td>
                                        <td>{marathon?.firstName} {marathon?.lastName}</td>
                                        <td>{marathon?.contactNum}</td>
                                        <td>{marathon?.addInfo}</td>
                                        <td className='p-0'>
                                            <button className="btn btn-xs md:btn-sm bg-secondary text-white font-bold mx-auto" onClick={() => handleUpdate(marathon?._id)}><MdEditDocument className='md:text-base' /></button>
                                            <button className="btn btn-xs md:btn-sm bg-red-600 text-white font-bold mx-auto" onClick={() => handleDelete(marathon?._id, marathon?.marathonId)}><MdDeleteForever className='md:text-base' /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <dialog id="my_modal_register" className="modal">
                <div className="modal-box w-11/12 md:container md:mx-auto px-1 py-4 md:px-4 md:py-8">
                    <h1 className='text-xl md:mt-8 md:mb-6 md:text-2xl font-bold text-primary text-center'>Update Registration Details</h1>
                    <form className="fieldset p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-end" onSubmit={handleUpdateSubmit}>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Title<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Give a title" value={modalMarathon?.marathonTitle} readOnly />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Marathon Start Date<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full"
                                value={modalMarathon?.marathonStartDate} readOnly />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">First Name<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Provide first name" name="firstName" required defaultValue={modalMarathon?.firstName} />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Last Name<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Provide last name" name="lastName" required defaultValue={modalMarathon?.lastName} />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Contact Number<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Provide contact number" name="contactNum" required defaultValue={modalMarathon?.contactNum} />
                        </div>
                        <div className='flex flex-col gap-2 md:text-base w-full'>
                            <label className="label font-semibold">Additional Info<span className='text-red-400'>*</span> </label>
                            <input type="text" className="input w-full" placeholder="Provide additional information" name="addInfo" required defaultValue={modalMarathon?.addInfo} />
                        </div>
                        <button type='submit' className='btn btn-primary w-full font-bold text-white mt-4 md:col-span-2 lg:col-span-3'>Update</button>
                    </form>
                    <div className="modal-action px-1">
                        <form method="dialog">
                            <button className="btn btn-accent text-white" id='applied-modal-close-btn'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default MyAppliedMarathons;