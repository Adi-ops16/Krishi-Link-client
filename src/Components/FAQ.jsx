import React from "react";
import { FaSeedling, FaUserPlus, FaHandshake } from "react-icons/fa";
import { IoLeaf, IoCash, IoShieldCheckmark, IoHelpCircle } from "react-icons/io5";

const FAQ = () => {
    const FAQS = [
        {
            question: "What is KrishiLink?",
            icon: <FaSeedling className="w-5 h-5 text-green-600" />,
            answer: `KrishiLink is a digital agriculture platform that connects farmers, buyers, and traders directly, enabling fair pricing, transparency, and sustainable farming practices.`
        },
        {
            question: "How do I create an account on KrishiLink?",
            icon: <FaUserPlus className="w-5 h-5 text-green-600" />,
            answer: `Click on the "Register" button from the navigation bar, choose your role, and complete the sign-up process using valid credentials.`
        },
        {
            question: "How can farmers list their crops?",
            icon: <IoLeaf className="w-5 h-5 text-green-600" />,
            answer: `After logging in, farmers can go to the "Add Crop" section, provide crop details, pricing, quantity, and location, then submit for listing.`
        },
        {
            question: "How do buyers show interest in crops?",
            icon: <FaHandshake className="w-5 h-5 text-green-600" />,
            answer: `Buyers can browse available crops and submit an interest request directly from the crop details page to connect with the farmer.`
        },
        {
            question: "Is there any payment system on KrishiLink?",
            icon: <IoCash className="w-5 h-5 text-green-600" />,
            answer: `Currently, KrishiLink focuses on connecting farmers and buyers. Pricing and transactions are handled mutually between both parties.`
        },
        {
            question: "Is my personal information secure?",
            icon: <IoShieldCheckmark className="w-5 h-5 text-green-600" />,
            answer: `Yes. KrishiLink uses secure authentication and protects user data using modern security practices. Sensitive information is never shared.`
        },
        {
            question: "Who can use KrishiLink?",
            icon: <IoHelpCircle className="w-5 h-5 text-green-600" />,
            answer: `KrishiLink is open to farmers, traders, wholesalers, and consumers who want direct access to fresh, locally sourced agricultural products.`
        }
    ];

    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-14">
            <h2 className="text-3xl font-bold text-center mb-10">
                Frequently Asked Questions
            </h2>

            <div data-aos="fade-up" className="space-y-4">
                {FAQS.map((faq, index) => (
                    <details
                        key={index}
                        className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-md rounded-xl"
                    >
                        <summary className="collapse-title flex items-center gap-3 text-lg font-semibold">
                            {faq.icon}
                            {faq.question}
                        </summary>
                        <div className="collapse-content text-sm text-base-content/80 leading-relaxed">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
