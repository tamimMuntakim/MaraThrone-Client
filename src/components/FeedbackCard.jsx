import React from 'react';
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const FeedbackCard = ({ feedback }) => {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <MdOutlineStarPurple500 key={i} className="text-yellow-500" />
                ) : (
                    <MdOutlineStarOutline key={i} className="text-yellow-300" />
                )
            );
        }
        return stars;
    };

    return (
        <>
            <div className="flex flex-col gap-2 md:gap-4 mb-3 bg-base-200 py-2 md:py-4 px-4 md:px-6 rounded md:rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 border border-slate-200">
                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='p-[1px] bg-slate-200 rounded-full'>
                        <img src={feedback.avatar} alt={feedback.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" />
                    </div>
                    <div>
                        <h4 className="text-sm md:text-lg font-semibold text-gray-800">{feedback.name}</h4>
                        <p className="text-xs md:text-sm text-gray-500">{feedback.event}</p>
                        <div className="flex mt-1 text-sm md:text-lg">{renderStars(feedback.rating)}</div>
                    </div>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">“{feedback.feedback}”</p>
            </div>
        </>
    );
};

export default FeedbackCard;