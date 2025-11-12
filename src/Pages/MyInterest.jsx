import React, { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuthContext from "../Hooks/useAuthContext";

const MyInterest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthContext();
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        axiosSecure
            .get(`/interests/by?email=${user.email}`)
            .then((data) => {
                setInterests(data.data);
            })
            .catch((err) => console.error(err));
    }, [axiosSecure, user.email]);

    if (!interests.length) {
        return (
            <div className="min-h-screen flex justify-center items-center text-gray-600">
                <p className="text-lg font-medium">
                    You haven't sent any interests yet.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-green-50 to-white py-14 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaSeedling className="text-green-600" /> My Interests
                </h1>

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
                            {interests.map((interest) => (
                                <tr
                                    key={interest.interest_id}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    {/* Crop Image */}
                                    <td className="py-3 px-4">
                                        <img
                                            src={interest.crop_image}
                                            alt={interest.crop_name}
                                            className="w-14 h-14 object-cover rounded-lg border border-gray-200"
                                        />
                                    </td>

                                    {/* Crop Name */}
                                    <td className="py-3 px-4 text-gray-800 font-medium">
                                        {interest.crop_name || "N/A"}
                                    </td>

                                    {/* Owner */}
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

                                    {/* Quantity */}
                                    <td className="py-3 px-4 text-center font-medium text-gray-700">
                                        {interest.requestedQuantity}
                                    </td>

                                    {/* Total Price */}
                                    <td className="py-3 px-4 text-center font-semibold text-[#6f4e37] flex justify-center items-center gap-1">
                                        <TbCurrencyTaka /> {interest.total_price}
                                    </td>

                                    {/* Message */}
                                    <td className="py-3 px-4 text-gray-700">{interest.message}</td>

                                    {/* Status */}
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

                                    {/* Action Button */}
                                    <td className="py-3 px-4 text-center">
                                        <Link
                                            to={`/crop-details/${interest.crop_id}`}
                                            className="px-4 py-1.5 rounded-lg text-white text-sm font-medium bg-green-600 hover:bg-green-500 transition-colors shadow-sm">
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyInterest;
