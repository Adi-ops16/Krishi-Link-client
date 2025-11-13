import React from "react";
import { FaUserPlus, FaSeedling, FaHandshake, FaTruck } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus className="text-4xl text-green-600 mb-3" />,
            title: "1. Create Your Account",
            desc: "Sign up as a farmer, buyer, or trader to start your journey. It’s quick, easy, and completely free to join KrishiLink.",
        },
        {
            icon: <FaSeedling className="text-4xl text-green-600 mb-3" />,
            title: "2. Post or Explore Crops",
            desc: "Farmers can list their crops with details like price, quantity, and location. Buyers can browse or search for fresh produce directly from growers.",
        },
        {
            icon: <FaHandshake className="text-4xl text-green-600 mb-3" />,
            title: "3. Show Interest & Connect",
            desc: "Buyers express interest in a crop, and farmers can view and manage these requests easily from their dashboard.",
        },
        {
            icon: <FaTruck className="text-4xl text-green-600 mb-3" />,
            title: "4. Finalize and Deliver",
            desc: "Once both sides agree, coordinate the delivery or pickup — building trust and transparency in every transaction.",
        },
    ];

    return (
        <section className="py-16 bg-linear-to-b from-green-50 to-white" id="how-it-works">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div
                    data-aos="fade-down"
                    className="mb-12 space-y-3">
                    <h2 className="text-4xl font-bold text-gray-800">
                        How <span className="text-green-600">KrishiLink</span> Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        KrishiLink makes agriculture simple — connecting farmers and buyers directly through a transparent, easy-to-use platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-2xl p-6 transition-all duration-300">

                            <div className="flex flex-col items-center text-center">
                                {step.icon}
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>

                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
