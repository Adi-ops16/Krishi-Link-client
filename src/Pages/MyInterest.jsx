import React, { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuthContext from "../Hooks/useAuthContext";
import { ReTitle } from "re-title";
import Loader from "../Components/Loaders/Loader";
import notFound from '/not-found.jpg'

const MyInterest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthContext();
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        setLoading(true);
        axiosSecure
            .get(`/interests/by?email=${user.email}`)
            .then((data) => {
                setInterests(data.data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [axiosSecure, user.email]);

    const sortedInterests = [...interests].sort((a, b) => {
        if (sortOption === "price-asc") {
            return a.total_price - b.total_price;
        } else if (sortOption === "price-desc") {
            return b.total_price - a.total_price;
        } else if (sortOption === "quantity-asc") {
            return a.requestedQuantity - b.requestedQuantity;
        } else if (sortOption === "quantity-desc") {
            return b.requestedQuantity - a.requestedQuantity;
        }
        return 0;
    });

    return (
        <div className={`min-h-[calc(100vh/2)] ${interests.length === 0 ? "bg-[#ffffff80]" : "bg-linear-to-b from-green-50 to-white"} py-4 px-4 rounded-xl`}>
            <ReTitle title="My Interests || Krishi-Link" />

            {loading ? <Loader /> :
                (<div className="max-w-7xl mx-auto rounded-2xl shadow-md border border-gray-100 p-6 bg-[#ffffff1e]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <FaSeedling className="text-green-600" /> My Interests
                        </h1>

                        {interests.length > 0 && (
                            <div className="flex items-center gap-3">
                                <label htmlFor="sort" className="text-gray-700 font-medium">
                                    Sort by:
                                </label>
                                <select
                                    id="sort"
                                    className="border-none rounded-lg px-4 py-2 text-sm md:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}>
                                    <option className="bg-green-50 my-2" value="">Default</option>
                                    <option className="bg-green-50 " value="price-asc">Total Price (Low → High)</option>
                                    <option className="bg-green-50 " value="price-desc">Total Price (High → Low)</option>
                                    <option className="bg-green-50 " value="quantity-asc">Quantity (Low → High)</option>
                                    <option className="bg-green-50 " value="quantity-desc">Quantity (High → Low)</option>
                                </select>
                            </div>)}
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1100px] text-sm text-left border-collapse">
                            <thead className="bg-[#f3f7f3] text-gray-700 text-[14px] uppercase">
                                <tr>
                                    <th className="py-3 px-4 w-[100px]">Image</th>
                                    <th className="py-3 px-4 w-1/6">Crop Name</th>
                                    <th className="py-3 px-4 w-1/5">Owner</th>
                                    <th className="py-3 px-4 text-center w-1/8">Quantity</th>
                                    <th className="py-3 px-4 text-center w-1/8">Total Price</th>
                                    <th className="py-3 px-4 w-1/4">Message</th>
                                    <th className="py-3 px-4 text-center w-1/8">Status</th>
                                    <th className="py-3 px-4 text-center w-[120px]">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortedInterests.map((interest) => (
                                    <tr
                                        key={interest.interest_id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                        <td className="py-3 px-4">
                                            <img
                                                src={interest.crop_image}
                                                alt={interest.crop_name}
                                                className="w-14 h-14 object-cover rounded-lg border border-gray-200"
                                            />
                                        </td>

                                        <td className="py-3 px-4 text-gray-800 font-medium">
                                            {interest.crop_name || "N/A"}
                                        </td>

                                        <td className="py-3 px-4 text-gray-700">
                                            <div>
                                                <div className="font-semibold text-gray-800 leading-tight">
                                                    {interest.owner_name || "Unknown"}
                                                </div>
                                                <div className="text-gray-500 text-xs">
                                                    {interest.owner_email || ""}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3 px-4 text-center font-medium text-gray-700">
                                            {interest.requestedQuantity}
                                        </td>

                                        <td className="py-3 px-4 text-center font-semibold text-[#6f4e37] flex justify-center items-center gap-1">
                                            <TbCurrencyTaka /> {interest.total_price}
                                        </td>

                                        <td className="py-3 px-4 text-gray-700">{interest.message}</td>

                                        <td className="py-3 px-4 text-center">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${interest.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : interest.status === "accepted"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {interest.status}
                                            </span>
                                        </td>

                                        <td className="py-3 px-4 text-center">
                                            <Link
                                                to={`/crop-details/${interest.crop_id}`}
                                                className="px-4 py-1.5 rounded-lg text-white text-sm font-medium bg-green-600 hover:bg-green-500 transition-colors shadow-sm">
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}

                                {interests.length === 0 && (
                                    <tr className="h-[600px]">
                                        <td colSpan="8">
                                            <div className="flex flex-col justify-center items-center gap-5 text-gray-600">
                                                <img src={notFound} alt="not found photo" />
                                                <p className="text-xl md:text-3xl font-bold">
                                                    You haven't sent any interests yet.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                )}
        </div>
    );
};

export default MyInterest;
