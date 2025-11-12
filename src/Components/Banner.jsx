import React from 'react';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="hero max-w-7xl mx-auto h-[calc(100vh/1.5)] rounded-lg overflow-hidden my-14 bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }}>
            <div className="relative hero-content text-neutral-content text-center px-6">
                <div className="max-w-md mx-auto">
                    <h1 className="mb-5 text-5xl font-extrabold text-white drop-shadow-lg raleway">
                        Grow, Connect & Thrive
                    </h1>
                    <p className="mb-6 text-lg text-gray-100 leading-relaxed">
                        Join <span className="font-semibold text-green-300">KrishiLink</span> — a digital space where farmers, traders,
                        and consumers collaborate directly to make agriculture smarter, sustainable, and more connected.
                    </p>
                    <Link to="/all-crops" className="btn bg-linear-to-r from-green-600 to-lime-500 border-none text-white shadow-none hover:from-green-500 hover:to-lime-400 transition-all duration-300"> Explore Now </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;