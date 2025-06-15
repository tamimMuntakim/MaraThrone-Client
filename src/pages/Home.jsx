import React, { useState } from 'react';
import Sliders from '../components/Sliders';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <section id="sliders" className="mt-10">
                <Sliders></Sliders>
            </section>
            <div className='my-32'>

                <DatePicker
                    showIcon
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                />
            </div>
        </>
    );
};

export default Home;