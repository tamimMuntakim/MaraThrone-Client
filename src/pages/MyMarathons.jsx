import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { MdDeleteForever, MdEditDocument } from 'react-icons/md';

const MyMarathons = () => {
    const [myMarathons, setMyMarathons] = useState([]);
    const { user } = use(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:3000/marathons?email=${user?.email}`)
            .then(function (response) {
                setMyMarathons(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [user?.email])

    const handleUpdate = ()=>{
        
    }

    const handleDelete = ()=>{

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
        </section>
    );
};

export default MyMarathons;