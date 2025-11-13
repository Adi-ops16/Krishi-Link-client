import React, { useState, useEffect } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuthContext from "../Hooks/useAuthContext";

const InterestForm = ({ _id, price_per_unit, quantity }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthContext()
    const [totalPrice, setTotalPrice] = useState(0);
    const [interestedQuantity, setInterestedQuantity] = useState("");
    const [interested, setInterested] = useState(false)

    // get the specific crop data
    useEffect(() => {
        if (!user || !_id) { return }

        axiosSecure.get(`/crops/${_id}`)
            .then(res => {
                const crop = res.data
                const alreadyInterested = crop.interests.some(interest => {
                    return interest.interestedUserEmail === user.email
                })
                setInterested(alreadyInterested)
            })
            .catch(error => console.log("error from interest", error))

    }, [user, _id, axiosSecure])

    // validating the submission
    useEffect(() => {
        const q = parseFloat(interestedQuantity);
        if (!isNaN(q) && q > 0 && q <= quantity) {
            setTotalPrice(q * price_per_unit);
        } else {
            setTotalPrice(0);
        }
    }, [interestedQuantity, price_per_unit, quantity]);

    // submitting form
    const handleInterest = (e) => {
        e.preventDefault();
        const q = parseFloat(interestedQuantity);
        const message = e.target.message.value;

        if (q <= 0) {
            return Swal.fire({
                icon: "error",
                title: "Invalid Quantity",
                text: "Please enter a valid quantity greater than 0",
                confirmButtonColor: "#4CAF50",
            });
        }

        if (q > quantity) {
            return Swal.fire({
                icon: "error",
                title: "Not Enough Quantity",
                text: `Only ${quantity} units are available. Please enter a smaller quantity.`,
                confirmButtonColor: "#4CAF50",
            });
        }

        const total_price = q * price_per_unit;
        const newInterest = {
            requestedQuantity: q,
            message,
            total_price,
            interestedUserEmail: user.email,
            interestedUserName: user.displayName
        };

        Swal.fire({
            title: "You are submitting an interest for this crop",
            text: "You won't be able to revert this! Do you confirm?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post(`/crops/${_id}/interests`, newInterest)
                    .then((data) => {
                        if (data.data.modifiedCount) {
                            Swal.fire({
                                icon: "success",
                                title: "Interest Sent!",
                                text: "Your interest has been submitted successfully",
                                confirmButtonColor: "#4CAF50",
                            });
                            e.target.reset();
                            setInterestedQuantity("");
                            setTotalPrice(0);
                            setInterested(true)
                        }
                    });
            }
        });

    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 mt-10">

            <div className="bg-linear-to-r from-[#4CAF50] to-[#2E7D32] text-white py-5 px-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <GiFarmTractor className="text-3xl" />
                    Send Interest Request
                </h2>
                <p className="text-green-100 text-sm mt-1">
                    Available Quantity: <strong>{quantity}</strong> units
                </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleInterest} className="p-6 space-y-5">
                {/* Quantity */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Quantity (must be ≤ {quantity})
                    </label>
                    <input
                        name="quantity"
                        onChange={(e) => setInterestedQuantity(e.target.value)}
                        value={interestedQuantity}
                        type="number"
                        placeholder="Enter quantity"
                        className="input w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] shadow-none outline-none px-3 py-2 bg-white"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Message
                    </label>
                    <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2">
                        <FaRegCommentDots className="text-gray-400 mt-1" />
                        <textarea
                            required
                            name="message"
                            placeholder="Write a short message..."
                            className="textarea shadow-none resize-none w-full border-none focus:outline-none bg-transparent px-2"
                            rows="3"
                        ></textarea>
                    </div>
                </div>

                {/* Total Price */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Total Price
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-gray-50 py-2">
                        <TbCurrencyTaka className="text-gray-500" />
                        <input
                            name="total_price"
                            type="text"
                            value={totalPrice}
                            readOnly
                            className="w-full bg-transparent border-none outline-none text-gray-600"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-3">
                    {
                        interested ?
                            <button
                                type="submit"
                                disabled
                                className="btn bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 py-2 rounded-lg shadow-md transition-all duration-200">
                                You have already submitted interest
                            </button>
                            :
                            <button
                                type="submit"
                                className="btn bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 py-2 rounded-lg shadow-md transition-all duration-200">
                                Submit Interest
                            </button>
                    }
                </div>
            </form>
        </div>
    );
};

export default InterestForm;
