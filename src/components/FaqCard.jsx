import React from 'react';

const FaqCard = ({ faq }) => {
    return (
        <div className="collapse collapse-arrow join-item border-slate-200 border-b-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
        </div>
    );
};

export default FaqCard;