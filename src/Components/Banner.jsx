import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import banner from "../assets/banner.jpg"; // background image

const Banner = ({ handleScrollToBlogs }) => {
    const slides = [
        {
            title: "Grow, Connect & Thrive",
            text: "Join KrishiLink — a digital space where farmers, traders, and consumers collaborate directly to make agriculture smarter, sustainable, and more connected.",
            button: "Add your product now",
            link: "/add-crop",
        },
        {
            title: "Empowering Farmers Nationwide",
            text: "From rural lands to urban markets — KrishiLink bridges the gap, ensuring farmers get fair prices and visibility for their hard work.",
            button: "Join as a Farmer",
            link: "/auth/registration",
        },
        {
            title: "Buy Fresh, Buy Local",
            text: "Discover locally grown produce straight from the source. Support communities while enjoying fresh, chemical-free crops every season.",
            button: "Browse Crops",
            link: "/all-crops",
        },
        {
            title: "Sustainability Starts with You",
            text: "Together, we can promote eco-friendly farming and ensure a greener tomorrow for future generations.",
            button: "Learn More",
            link: handleScrollToBlogs, // function reference
        },
    ];

    return (
        <div className="max-w-7xl mx-auto my-14 rounded-xl overflow-hidden">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={900}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 200,
                    modifier: 2,
                    slideShadows: false,
                }}
                className="rounded-xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero h-[calc(100vh/1.5)] bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }} >
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="relative hero-content text-center text-neutral-content px-6 z-10">
                                <div className="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
                                    <h1 className="mb-5 text-5xl font-extrabold text-white drop-shadow-lg raleway">
                                        {slide.title}
                                    </h1>
                                    <p className="mb-6 text-lg text-gray-100 leading-relaxed">
                                        {slide.text}
                                    </p>

                                    {typeof slide.link === "string" ?
                                        <Link
                                            to={slide.link}
                                            className="btn bg-linear-to-r from-green-600 to-lime-500 border-none text-white shadow-none hover:from-green-500 hover:to-lime-400 transition-all duration-300">
                                            {slide.button}
                                        </Link>
                                        :
                                        <button
                                            onClick={slide.link}
                                            className="btn bg-linear-to-r from-green-600 to-lime-500 border-none text-white shadow-none hover:from-green-500 hover:to-lime-400 transition-all duration-300">
                                            {slide.button}
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
