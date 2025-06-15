import { format, parseISO } from 'date-fns';
import React from 'react';

const UpcomingMarathonCard = ({ marathon }) => {

    return (
        <div className="bg-base-100 px-2 md:px-4 py-2 md:py-4 shadow-sm hover:shadow-md hover:border-slate-300 border border-slate-200 rounded md:rounded-md card">
            <div className='card'>
                <div className="mb-2">
                    <h2 className="md:text-xl font-semibold text-indigo-700">{marathon?.title}</h2>
                    <p className="text-xs md:text-md text-gray-500">{marathon?.location}</p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <span className="bg-indigo-100 text-indigo-600 text-xs md:text-sm font-medium px-2 py-1 rounded-full">
                        {marathon?.distance}
                    </span>
                    <span className="text-xs md:text-sm text-gray-600">
                        {format(parseISO(marathon?.expectedStartDate), "EEEE, MMM d, yyyy")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMarathonCard;