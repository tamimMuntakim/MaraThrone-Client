import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import AllMarathonsCard from '../components/AllMarathonsCard';

const Marathons = () => {
    const marathons = useLoaderData();

    const [sortOrder, setSortOrder] = useState('asc');

    const parseDistance = (distanceStr) => {
        if (!distanceStr) return 0;
        return parseFloat(distanceStr.replace('K', '')) || 0;
    };

    const sortedMarathons = useMemo(() => {
        return [...marathons].sort((a, b) => {
            const distA = parseDistance(a.distance);
            const distB = parseDistance(b.distance);
            return sortOrder === 'asc' ? distA - distB : distB - distA;
        });
    }, [marathons, sortOrder]);

    return (
        <section id="all-marathons">
            <title>MaraThrone || Marathons</title>
            <h1 className="mb-2 text-2xl md:mb-4 md:text-4xl font-bold text-secondary text-center">
                All Marathons
            </h1>
            <p className="mb-2 md:mb-4 text-center">
                Browse all marathon listings ~ save time, find the right event that fits you!
            </p>

            <div className="flex justify-center mb-4">
                <select
                    className="select select-bordered w-64 max-w-xs"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Sort by Distance: Ascending</option>
                    <option value="desc">Sort by Distance: Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-fr">
                {sortedMarathons.map((marathon, index) => (
                    <AllMarathonsCard key={index} marathon={marathon} />
                ))}
            </div>
        </section>
    );
};

export default Marathons;
