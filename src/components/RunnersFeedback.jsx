import React from 'react';
import FeedbackCard from './FeedbackCard';

const RunnersFeedback = () => {
    const feedbacks = [
        {
            name: "Rifat Hasan",
            avatar: "https://i.ibb.co/Tq4h3sB8/male1.png",
            feedback: "The organization was top-notch! Loved the energy and the volunteers were super helpful.",
            event: "Capital City Marathon 2024",
            rating: 5
        },
        {
            name: "Tajrina Rahman",
            avatar: "https://i.ibb.co/QFXVZvRr/female1.png",
            feedback: "Great crowd support and hydration points. Looking forward to running again next year!",
            event: "Sunset Sprint 2024",
            rating: 5
        },
        {
            name: "Tanvir Ahmed",
            avatar: "https://i.ibb.co/DHvNZgbJ/male2.png",
            feedback: "Running through the hills was challenging but so rewarding. Beautiful route and amazing vibe!",
            event: "Hill Track Dash 2024",
            rating: 4
        },

    ];

    return (
        <>
            <h1 className='mb-2 text-2xl md:mb-4 md:text-4xl font-bold text-secondary'>Runners' Feedback</h1>
            <p className='mb-2 md:mb-4'>Love running? So do they. Here's what they had to say!</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
                {
                    feedbacks.map((feedback, index) => <FeedbackCard key={index} feedback={feedback}></FeedbackCard>)
                }
            </div>
        </>
    );
};

export default RunnersFeedback;