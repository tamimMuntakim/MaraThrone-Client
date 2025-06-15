import React from 'react';
import HomeMarathonCard from './HomeMarathonCard';

const HomeMarathons = ({ homeMarathons }) => {

    return (
        <>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-secondary'>Featured Marathons</h1>
            <p className='mb-2 md:mb-4'>Browse top marathon listings ~ save time, find the right event that fits you!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-fr'>
                {
                    homeMarathons.map((marathon) => <HomeMarathonCard key={marathon._id} marathon={marathon}></HomeMarathonCard>)
                }
            </div>
        </>
    );
};

export default HomeMarathons;