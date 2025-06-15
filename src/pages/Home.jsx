import { useEffect, useState } from 'react';
import Sliders from '../components/Sliders';
import axios from 'axios';
import HomeMarathons from '../components/HomeMarathons';

const Home = () => {
    const [homeMarathons, setHomeMarathons] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/marathons?limit=true')
            .then(function (response) {
                setHomeMarathons(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <>
            <section id="sliders" className="mt-10">
                <Sliders></Sliders>
            </section>
            <section id="marathons" className='mt-7 md:mt-14'>
                <HomeMarathons homeMarathons={homeMarathons}></HomeMarathons>
            </section>
        </>
    );
};

export default Home;