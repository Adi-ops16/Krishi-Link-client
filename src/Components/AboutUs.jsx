import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <section className="bg-[#f9faf9] py-16 my-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">

                <div className="lg:w-1/2 w-full flex justify-center"
                    data-aos="fade-right"
                    data-aos-duration="1000">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFncmljdWx0dXJpbmd8ZW58MHx8MHx8fDA%3D"
                        alt="About Us"
                        className="rounded-3xl shadow-lg w-full max-w-md object-cover" />
                </div>

                <div className="lg:w-1/2 w-full text-center lg:text-left" data-aos="fade-left" data-aos-duration="1000">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        About Us
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Welcome to KrishiLink — your trusted platform connecting farmers and buyers across Bangladesh.
                        Our mission is to simplify agricultural trade, empower local farmers, and provide fresh produce
                        directly to your doorstep.
                    </p>

                    <p className="text-gray-600 mb-6">
                        With our user-friendly platform, you can manage your crops, track buyer interests, and make your
                        agricultural business more profitable. Join us in making farming smarter, faster, and more connected.
                    </p>

                    <Link to="/all-crops" className="btn border-none btn-primary bg-linear-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400 text-white">
                        Learn More
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
