import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbCurrencyTaka, TbWeight } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import InterestForm from "../Components/InterestForm";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import OwnersInterestsTable from "../Components/OwnersInterestsTable";
import useAuthContext from "../Hooks/useAuthContext";
import Loader from "../Components/Loaders/Loader";

const CropsDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthContext()

    useEffect(() => {
        axiosSecure(`/crops/${id}`)
            .then(data => {
                setData(data.data)
            })
    }, [axiosSecure, id])

    if (!data?.owner?.owner_id) { return }

    const { _id, crop_name, type, price_per_unit, unit, quantity, location, crop_image, description, owner,
    } = data || {};

    return (
        <div className="min-h-screen bg-linear-to-b from-green-50 to-white py-14 px-4">
            <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* crop details */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100  hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                        <img
                            src={crop_image}
                            alt={crop_name}
                            className="w-full h-72 object-cover rounded-t-lg" />
                        <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/60 to-transparent p-4 text-white">
                            <h1 className="text-2xl font-bold">{crop_name}</h1>
                            <p className="text-sm text-green-100">{type}</p>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <p className="flex items-center text-gray-700">
                            <MdCategory className="text-[#4CAF50] mr-2" />{" "}
                            <span className="font-medium">{type}</span>
                        </p>
                        <p className="flex items-center text-gray-700">
                            <TbCurrencyTaka className="text-[#4CAF50] mr-2" />
                            <span className="font-semibold text-lg text-gray-800">
                                {price_per_unit}
                            </span>{" "}
                            / {unit}
                        </p>
                        <p className="flex items-center text-gray-700">
                            <TbWeight className="text-[#4CAF50] mr-2" />
                            <span>{quantity}</span> available
                        </p>
                        <p className="flex items-center text-gray-700">
                            <FaMapMarkerAlt className="text-[#4CAF50] mr-2" /> {location}
                        </p>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                {description}
                            </p>
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-4">
                            <h3 className="font-semibold text-gray-800 mb-1">Posted by</h3>
                            <p className="text-gray-700">{owner?.owner_name}</p>
                            <p className="text-gray-500 text-sm">{owner?.owner_email}</p>
                        </div>

                        <div className="pt-5 flex justify-end">
                            <Link
                                to="/all-crops"
                                className="bg-[#4CAF50] hover:bg-[#43A047] text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200">
                                Back to All Crops
                            </Link>
                        </div>
                    </div>
                </div>

                {/* form for user / table for owner */}

                {
                    user.uid === owner.owner_id ?
                        < div className="sticky top-24">
                            <OwnersInterestsTable _id={_id} />
                        </div>
                        :
                        <div className="sticky top-24">
                            <InterestForm _id={_id} price_per_unit={price_per_unit} quantity={quantity} />
                        </div>
                }
            </div>
        </div >
    );
};

export default CropsDetails;
