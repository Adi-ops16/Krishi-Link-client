import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router';

const Slider = () => {
    const axiosInstance = useAxios();
    const [latestCrops, setLatestCrops] = useState([]);

    useEffect(() => {
        axiosInstance(`/crops?sort=desc&limit=6`)
            .then((data) => setLatestCrops(data.data))
            .catch((error) => console.error('Error fetching latest crops', error));
    }, [axiosInstance]);

    return (
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center my-10 text-[#2e2e2e]">
                🌾 Latest Crops
            </h2>

            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                loop={latestCrops.length > 1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 200,
                    modifier: 2,
                    slideShadows: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.2,
                    },
                    1024: {
                        slidesPerView: 2.2,
                    },
                    1280: {
                        slidesPerView: 2.8,
                    },
                }}
            >
                {latestCrops.map((crop) => (
                    <SwiperSlide key={crop._id}>
                        <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white">
                            {/* Crop Image */}
                            <img
                                src={crop.crop_image}
                                alt={crop.crop_name}
                                className="w-full h-[400px] object-cover transition-all duration-500 group-hover:scale-105"
                            />

                            {/* Overlay (Bottom Info Card) */}
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-white via-white/95 to-transparent p-6">
                                {/* Crop name */}
                                <h3 className="text-2xl font-bold text-[#2e2e2e] mb-2">
                                    {crop.crop_name}
                                </h3>

                                {/* Crop type and price */}
                                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base mb-3">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                                        {crop.type}
                                    </span>
                                    <span className="font-semibold text-[#5b3f2d">
                                        💰 {crop.price_per_unit}/{crop.unit}
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-1 text-gray-600 text-sm mb-4">
                                    <MapPin size={16} />
                                    <span>{crop.location}</span>
                                </div>

                                {/* View Details Button */}
                                <Link
                                    to={`/crop-details/${crop._id}`}
                                    className="inline-block mt-2 bg-[#6f4e37] hover:bg-[#5b3f2d] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
