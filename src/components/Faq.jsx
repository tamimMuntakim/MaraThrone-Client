import React from 'react';
import FaqCard from './FaqCard';

const Faq = () => {
    const faqs = [
        {
            question: "How can I register for a marathon?",
            answer: "You can register by visiting the marathon's event page and clicking the 'Register Now' button. Make sure you're logged in to complete the registration."
        },
        {
            question: "Is there a registration deadline?",
            answer: "Yes, each marathon has its own registration deadline. It will be clearly mentioned on the event details page."
        },
        {
            question: "Can I update my personal details after registering?",
            answer: "Yes, you can edit your profile details anytime from the dashboard. However, registration-specific data may be locked after the deadline."
        },
        {
            question: "Do you provide accommodation for participants coming from long distances?",
            answer: "No, we only provide necessary arrangements related to the marathon itself."
        },
        {
            question: "Do you provide participation certificates or medals?",
            answer: "Yes! All participants receive digital certificates. Top performers may receive medals and other prizes depending on the event."
        }
    ];

    return (
        <>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-primary'>Frequently Asked Questions (FAQ)</h1>
            <div className="join join-vertical bg-base-200 w-full rounded-lg overflow-hidden text-sm md:text-base">
                {
                    faqs.map((faq, index)=><FaqCard key={index} faq={faq}></FaqCard>)
                }
            </div>
        </>
    );
};

export default Faq;