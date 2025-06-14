import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Sliders = () => {
    const slides = [
        {
            title: "Plan Your Marathon with Ease",
            description: "From route setup to volunteer coordination, manage every detail effortlessly.",
            buttonText: "Get Started",
            bgImg: "https://i.ibb.co/4nv9L4cj/marathon1.jpg"
        },
        {
            title: "Track Runners & Results",
            description: "Monitor live progress, participant stats, and finish times in real-time.",
            buttonText: "View Dashboard",
            bgImg: "https://i.ibb.co/GQHsXZ50/marathon2.jpg"
        },
        {
            title: "Simplified Registration",
            description: "Streamlined sign-up process for runners, volunteers, and sponsors alike.",
            buttonText: "Register Now",
            bgImg: "https://i.ibb.co/jvyYNZxH/marathon3.jpg"
        }
    ];

    return (
        <div className="w-full h-full relative mt-4 md:mt-2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="rounded-lg shadow-xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero min-h-[320px] md:min-h-[380px]"
                            style={{
                                backgroundImage:
                                    `url(${slide.bgImg})`,
                            }}
                        >
                            <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-2xl md:text-5xl font-bold">{slide.title}</h1>
                                    <p className="text-sm md:text-xl mt-4">{slide.description}</p>
                                    <button className="mt-4 md:mt-8 btn btn-primary btn-active text-white btn-sm md:btn-md md:font-bold md:w-auto">{slide.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sliders;