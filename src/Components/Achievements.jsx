import React from 'react';
import { FaUsers, FaLeaf, FaTractor, FaAward } from 'react-icons/fa';

const Achievements = () => {
    const achievementData = [
        {
            icon: <FaUsers size={30} className="text-green-600" />,
            title: "1000+ Farmers Joined",
            description: "Empowering local farmers to sell their crops directly to buyers.",
        },
        {
            icon: <FaLeaf size={30} className="text-green-600" />,
            title: "50000+ Crops Sold",
            description: "Fresh and high-quality produce delivered across the country.",
        },
        {
            icon: <FaTractor size={30} className="text-green-600" />,
            title: "200+ Farms Connected",
            description: "Connecting farms and buyers through a seamless online platform.",
        },
        {
            icon: <FaAward size={30} className="text-green-600" />,
            title: "Award-Winning Platform",
            description: "Recognized for innovation in agriculture technology.",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievementData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#f3f7f3] p-6 rounded-2xl shadow-md flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}>
                            <div className="p-4 bg-green-100 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
