import React, { useEffect, useState } from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2';

const OwnersInterestsTable = ({ _id }) => {
    const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        if (!user || !_id) return;

        axiosSecure
            .get(`/crops/${_id}/interests?email=${user?.email}`)
            .then((res) => setInterests(res.data.interests))
            .catch((err) => console.error("Error fetching interests:", err));
    }, [user, _id, axiosSecure]);

    const handleStatusChange = async (interest_id, newStatus) => {
        try {
            const res = await axiosSecure.patch(`/crops/${_id}/interests/${interest_id}`, {
                status: newStatus,
            });

            if (res.data.modifiedCount !== 0) {
                setInterests(interests =>
                    interests.map((interest) =>
                        interest.interest_id.toString() === interest_id.toString()
                            ? { ...interest, status: newStatus }
                            : interest
                    )
                );

                Swal.fire({
                    icon: "success",
                    title: `Interest ${newStatus}`,
                    text: `You have ${newStatus} this interest`,
                    confirmButtonColor: "#4CAF50"
                });
            }
        } catch (err) {
            console.error("Error from updating interest:", err);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-md p-6 w-full">
            <h2 className="text-2xl font-semibold text-[#2e2e2e] mb-6 text-center">
                Buyer Interests
            </h2>

            {interests.length === 0 ?
                <div className="flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg h-40">
                    No interests yet.
                </div>
                :
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm text-left border-collapse">
                        <thead className="bg-[#f3f7f3] text-gray-700 text-[14px] uppercase">
                            <tr>
                                <th className="py-3 px-4 w-1/5">Buyer</th>
                                <th className="py-3 px-4 w-1/5">Message</th>
                                <th className="py-3 px-4 text-center w-1/8">Quantity</th>
                                <th className="py-3 px-4 text-center w-1/8">Total Price</th>
                                <th className="py-3 px-4 text-center w-1/8">Status</th>
                                <th className="py-3 px-4 w-1/6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interests.map((interest) => (
                                <tr
                                    key={interest.interest_id}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors" >

                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <FaUserCircle className="text-green-600 text-xl" />
                                            <div>
                                                <div className="font-semibold text-gray-800 leading-tight">
                                                    {interest.interestedUserName}
                                                </div>
                                                <div className="text-gray-500 text-xs">
                                                    {interest.interestedUserEmail}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="py-3 px-4 text-gray-700">{interest.message}</td>

                                    <td className="py-3 px-4 text-center font-medium text-gray-700">
                                        {interest.requestedQuantity}
                                    </td>

                                    <td className="py-3 px-4 text-center font-medium text-[#6f4e37]">
                                        {interest.total_price}
                                    </td>

                                    <td className="py-3 px-4 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${interest.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : interest.status === "accepted"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"}`}>
                                            {interest.status}
                                        </span>
                                    </td>

                                    <td className="py-3 px-4 flex flex-col gap-2">
                                        <button
                                            onClick={() =>
                                                handleStatusChange(interest.interest_id, "accepted")
                                            }
                                            disabled={interest.status !== "pending"}
                                            className={`btn btn-sm border-none text-white shadow-none transition-all duration-300 ${interest.status !== "pending"
                                                ? "bg-gray-300 cursor-not-allowed"
                                                : "bg-linear-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400"}`}>
                                            Accept
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleStatusChange(interest.interest_id, "rejected")
                                            }
                                            disabled={interest.status !== "pending"}
                                            className={`btn btn-sm border-none text-white shadow-none transition-all duration-300 ${interest.status !== "pending"
                                                ? "bg-gray-300 cursor-not-allowed"
                                                : "bg-linear-to-r from-red-600 to-rose-500 hover:from-red-600 hover:to-rose-600"}`}>
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default OwnersInterestsTable;
