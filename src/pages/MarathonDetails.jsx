import { format, parseISO } from 'date-fns';
import React from 'react';
import { useLoaderData } from 'react-router';

const MarathonDetails = () => {
    const marathon = useLoaderData();
    const now = new Date();

    return (
        <section id="marathon-details" className='mb-4 md:md-8'>
            <div className="bg-white rounded-xl overflow-hidden shadow-md max-w-3xl mx-auto">
                <img src={marathon?.marathonImg} alt={marathon?.title} className="w-full h-56 object-cover" />
                <div className="p-6 space-y-3">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-800">{marathon?.title}</h2>
                    <p className="text-xs md:text-sm text-gray-500">{marathon?.location} ~ {marathon?.distance}</p>
                    <p className="text-sm md:text-base text-gray-700">{marathon?.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600 mt-4 text-sm md:text-base">
                        <div>
                            <span className="font-semibold block text-gray-800">Registration Starts:</span>
                            {format(parseISO(marathon?.regStartDate), "EEEE, MMMM do, yyyy")}
                        </div>
                        <div>
                            <span className="font-semibold block text-gray-800">Registration Ends:</span>
                            {format(parseISO(marathon?.regEndDate), "EEEE, MMMM do, yyyy")}
                        </div>
                        <div>
                            <span className="font-semibold block text-gray-800">Marathon Starts:</span>
                            {format(parseISO(marathon?.marathonStartDate), "EEEE, MMMM do, yyyy")}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
                    <span className="text-sm text-gray-700">
                        <span className="font-semibold">{marathon?.regCount}</span> already registered
                    </span>
                    <button className="text-white btn btn-sm md:btn-md btn-secondary disabled:cursor-not-allowed"
                        disabled={
                            !(now >= parseISO(marathon?.regStartDate) && now <= parseISO(marathon?.regEndDate))
                        }
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MarathonDetails;