import React from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Abdul Karim",
            role: "Farmer • Rajshahi",
            feedback:
                "KrishiLink helped me connect directly with buyers without middlemen. I now get fair prices for my crops."
        },
        {
            name: "Nusrat Jahan",
            role: "Retail Buyer • Dhaka",
            feedback:
                "Buying fresh crops directly from farmers has never been easier. Quality and transparency are excellent."
        },
        {
            name: "Md. Tanvir Hasan",
            role: "Wholesale Trader • Bogura",
            feedback:
                "Transparent listings and direct communication save both time and cost for my business."
        },
        {
            name: "Shahida Begum",
            role: "Organic Farmer • Rangpur",
            feedback:
                "I can promote organic produce and reach conscious buyers easily through KrishiLink."
        },
        {
            name: "Imran Hossain",
            role: "Agro Entrepreneur • Jessore",
            feedback:
                "KrishiLink is a powerful bridge between farmers and markets. It has modernized my sourcing workflow."
        },
        {
            name: "Farzana Akter",
            role: "Consumer • Chattogram",
            feedback:
                "Knowing where my food comes from gives me confidence. KrishiLink makes local farming visible."
        }
    ];

    return (
        <section className="w-full px-4 py-16 bg-linear-to-t from-white to-green-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our Users Say
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 1.2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                    data-aos="fade-up"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full w-full border border-base-300 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col my-10">
                                <FaQuoteLeft className="text-green-600 text-xl mb-4" />

                                <p className="text-sm text-base-content/80 leading-relaxed mb-6 grow">
                                    “{item.feedback}”
                                </p>

                                <div className="flex items-center gap-3 mt-auto">
                                    <FaUserCircle className="text-3xl text-green-600" />
                                    <div>
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p className="text-xs text-base-content/70">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
