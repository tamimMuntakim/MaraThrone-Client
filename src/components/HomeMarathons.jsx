import React from 'react';
import HomeMarathonCard from './HomeMarathonCard';

const HomeMarathons = ({ homeMarathons }) => {
    return (
        <>
            <h1 className="mb-2 md:mb-4 text-2xl  md:text-4xl font-bold text-secondary">
                Featured Marathons
            </h1>
            <p className="mb-2 md:mb-4">
                Browse top marathon listings ~ save time, find the right event that fits you!
            </p>

            {!homeMarathons ? (
                <div className="flex justify-center py-10">
                    <span className="loading loading-infinity loading-xl md:w-[50px] md:h-auto"></span>
                </div>
            ) : homeMarathons.length === 0 ? (
                <p className="text-center text-gray-500">No featured marathons available right now.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-fr">
                    {homeMarathons.map((marathon) => (
                        <HomeMarathonCard key={marathon._id} marathon={marathon} />
                    ))}
                </div>
            )}
        </>
    );
};

export default HomeMarathons;
