import React from 'react';
import { FaEnvelopeOpenText } from "react-icons/fa";
import Swal from 'sweetalert2';

const Newsletters = () => {
    const handleNewsletter = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: "success",
            title: "Subscribed",
            text: "Thank you for your support.",
            timer: 2000,
            showConfirmButton: false,
            timerProgressBar: true
        })
    }
    return (
        <section className="bg-linear-to-r from-green-50 to-white py-16" data-aos="fade-up">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="bg-green-100 p-4 rounded-full mb-4">
                    <FaEnvelopeOpenText className="text-green-600 text-3xl" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                    Stay Updated with KrishiLink
                </h2>
                <p className="text-gray-600 max-w-xl mb-8">
                    Subscribe to our newsletter and get the latest updates, crop trends, and farming tips directly in your inbox.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleNewsletter}
                    className="w-full sm:w-[500px] flex flex-col sm:flex-row items-center gap-3"
                    data-aos="fade-up">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered w-full py-3 px-4 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required />
                    <button
                        type="submit"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-xl w-full sm:w-auto px-6 py-3 transition-all duration-200">
                        Subscribe
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                    We respect your privacy — no spam, ever.
                </p>
            </div>
        </section>
    );
};

export default Newsletters;
