import React from 'react';
import { format, parseISO } from 'date-fns'
import { Link } from 'react-router';

const HomeMarathonCard = ({ marathon }) => {
    return (
        <div className="card bg-base-100 shadow-sm hover:shadow-md hover:border-slate-400">
            <figure>
                <img
                    src={marathon?.marathonImg}
                    alt="Shoes"
                    className="h-[120px] md:h-[150px] w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {marathon?.title}
                </h2>
                <div className="badge badge-secondary text-white font-semibold badge-xs md:badge-sm">{marathon?.location}</div>
                <p>Registration: {format(parseISO(marathon?.regStartDate),"MM/dd/yyyy (EEE)")} - {format(parseISO(marathon?.regEndDate),"MM/dd/yyyy (EEE)")}</p>
                <div className="card-actions justify-end">
                    <Link className='btn btn-xs md:btn-sm text-white btn-primary' to={""}>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeMarathonCard;