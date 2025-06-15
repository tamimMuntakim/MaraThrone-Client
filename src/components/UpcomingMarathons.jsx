import React from 'react';
import UpcomingMarathonCard from './UpcomingMarathonCard';

const UpcomingMarathons = () => {
    const upcomingMarathons = [
        {
            "title": "Sunset Sprint 2025",
            "location": "Gulshan, Dhaka",
            "distance": "5k",
            "expectedStartDate": "2025-07-05T16:30:00.000Z"
        },
        {
            "title": "Heritage Run Challenge",
            "location": "Old Dhaka",
            "distance": "10k",
            "expectedStartDate": "2025-07-12T06:00:00.000Z"
        },
        {
            "title": "Lake View Marathon",
            "location": "Dhanmondi Lake",
            "distance": "15k",
            "expectedStartDate": "2025-07-18T07:00:00.000Z"
        },
        {
            "title": "Chattogram City Night Run",
            "location": "Chattogram",
            "distance": "7k",
            "expectedStartDate": "2025-07-25T20:00:00.000Z"
        },
        {
            "title": "Hill Track Dash",
            "location": "Bandarban",
            "distance": "12k",
            "expectedStartDate": "2025-08-02T06:30:00.000Z"
        },
        {
            "title": "Capital City Marathon",
            "location": "Dhaka University Area",
            "distance": "21k",
            "expectedStartDate": "2025-08-10T05:30:00.000Z"
        }
    ]

    return (
        <>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-primary'>Upcoming Marathons</h1>
            <p className='mb-2 md:mb-4'>Upcoming marathons will appear here. Lace up and stay ready!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 my-2 md:my-4'>
                {
                    upcomingMarathons.map((marathon, index)=> <UpcomingMarathonCard key={index} marathon={marathon}></UpcomingMarathonCard>)
                }
            </div>
        </>
    );
};

export default UpcomingMarathons;