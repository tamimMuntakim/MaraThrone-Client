import React from 'react';
import { useLoaderData } from 'react-router';
import AllMarathonsCard from '../components/AllMarathonsCard';

const Marathons = () => {
    const marathons = useLoaderData();
    return (
        <section id="all-marathons">
            <title>MaraThrone || Marathons</title>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-secondary text-center'>All Marathons</h1>
            <p className='mb-2 md:mb-4 text-center'>Browse all marathon listings ~ save time, find the right event that fits you!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-fr'>
                {
                    marathons.map((marathon, index)=><AllMarathonsCard key={index} marathon={marathon}></AllMarathonsCard>)
                }
            </div>
        </section>
    );
};

export default Marathons;