import { format, parseISO } from 'date-fns';
import React from 'react';
import { Link } from 'react-router';

const AllMarathonsCard = ({ marathon }) => {
    return (
        <div className="card bg-base-100 shadow-sm hover:shadow-md hover:border-slate-400">
            <figure>
                <img
                    src={marathon?.marathonImg}
                    alt="Shoes"
                    className="h-[90px] md:h-[120px] w-full object-cover" />
            </figure>
            <div className="card-body p-2 md:p-3">
                <h2 className="card-title">
                    {marathon?.title}
                </h2>
                <div className='flex gap-2'>
                    <div className="badge badge-secondary text-white font-semibold badge-xs md:badge-sm">{marathon?.location}</div>
                    <div className="badge badge-primary text-white font-semibold badge-xs md:badge-sm">{marathon?.distance}</div>
                </div>
                <p>Registration: {format(parseISO(marathon?.regStartDate), "EEEE, MMMM do, yyyy")} - {format(parseISO(marathon?.regEndDate), "EEEE, MMMM do, yyyy")}</p>
                <div className="card-actions justify-end">
                    <Link className='btn btn-xs md:btn-sm text-white btn-primary' to={`/marathon-details/${marathon?._id}`}>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllMarathonsCard;