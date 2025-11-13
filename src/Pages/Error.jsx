import React from "react";
import { Link } from "react-router";
import notFound from "/not-found.jpg"; 
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-green-50 to-white px-6 py-12">
      <div
        className="max-w-2xl text-center flex flex-col items-center">
        {/* Image */}
        <img
          src={notFound}
          alt="404 Not Found"
          className="w-64 md:w-80 mb-8 drop-shadow-lg"/>

        {/* Text */}
        <h1 className="text-5xl font-extrabold text-green-600 mb-3">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for might have been removed, renamed, or is
          temporarily unavailable.  
          Don't worry — you can head back home safely!
        </p>

        {/* Button */}
        <Link
          to="/"
          className="flex items-center gap-2 bg-linear-to-r from-green-600 to-lime-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-green-500 hover:to-lime-400 transition-all duration-300">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
