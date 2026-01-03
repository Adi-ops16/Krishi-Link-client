import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaSeedling, FaMapMarkerAlt } from "react-icons/fa";
import { TbCurrencyTaka, TbWeight } from "react-icons/tb";
import { Link } from "react-router";
import noCropsFound from '../assets/not-found-crops.png'
import Loader from "../Components/Loaders/Loader";
import { ReTitle } from "re-title";

const AllCrops = () => {
    const axiosInstance = useAxios();
    const [crops, setCrops] = useState([]);
    const [searchCrops, setSearchCrop] = useState("");
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        type: "",
        price: ""
    })

    useEffect(() => {
        setLoading(true)
        axiosInstance.get(`/crops?type=${filters?.type}&price=${filters?.price}`)
            .then((data) => {
                setCrops(data.data)
                setLoading(false)
            })
            .catch((err) => console.error(err));
    }, [axiosInstance, filters]);

    const filteredCrops = crops.filter((crop) =>
        crop.crop_name.toLowerCase().includes(searchCrops.toLowerCase())
    );

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="max-w-11/12 mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* Page Title */}
            <ReTitle title="All-crops || Krishi-Link"></ReTitle>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-[#4CAF50] gap-3 flex items-center mb-8">
                    <FaSeedling size={35} /> All Crops
                </h1>
            </div>

            {/* Search Bar */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-end">
                {/* Search input */}
                <div className="lg:col-span-2">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Search crops
                    </label>
                    <input
                        type="text"
                        placeholder="Search crops..."
                        onChange={(e) => setSearchCrop(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                    />
                </div>

                {/* Filter by type */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Search by type
                    </label>
                    <select
                        name="type"
                        value={filters.type}
                        onChange={handleFilterChange}
                        className="select w-full rounded-lg border border-gray-300 shadow-sm focus-within:outline-none focus-within:border-2 focus-within:border-[#4CAF50]"
                    >
                        <option value="">All types</option>
                        <option value="Vegetable">Vegetable</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Grain">Grain</option>
                    </select>
                </div>

                {/* Sort by price */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Sort by price
                    </label>
                    <select
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        className="select w-full rounded-lg border border-gray-300 shadow-sm focus-within:outline-none focus-within:border-2 focus-within:border-[#4CAF50]"
                    >
                        <option value="" disabled >
                            Select
                        </option>
                        <option value="asc">Low → High</option>
                        <option value="desc">High → Low</option>
                    </select>
                </div>
            </div>


            {/* all Crops */}
            {loading ? <Loader></Loader> :
                filteredCrops.length === 0 ?
                    <figure className="flex justify-center">
                        <img className="h-96" src={noCropsFound} alt="" />
                    </figure>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredCrops.map((crop) => (
                            <div
                                key={crop._id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200">
                                {/* crop image */}
                                <img
                                    src={crop.crop_image}
                                    alt={crop.crop_name}
                                    className="w-full h-48 object-cover" />

                                {/* crop info */}
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        <FaSeedling className="text-[#4CAF50]" />
                                        {crop.crop_name}
                                    </h2>
                                    <p className="text-gray-600 mt-1">{crop.type}</p>

                                    <div className="flex items-center gap-4 mt-2 text-gray-700">
                                        <div className="flex items-center gap-1">
                                            <TbCurrencyTaka />
                                            <span>{crop.price_per_unit} / {crop.unit}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <TbWeight />
                                            <span>{crop.quantity}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 mt-2 text-gray-600">
                                        <FaMapMarkerAlt className="text-gray-400" />
                                        <span>{crop.location}</span>
                                    </div>

                                    {/* owner */}
                                    <p className="text-sm text-gray-500 mt-2">
                                        Posted by: {crop.owner.owner_name}
                                    </p>

                                    {/* button */}
                                    <Link to={`/crop-details/${crop._id}`}
                                        className="block mt-4 text-center bg-[#4CAF50] hover:bg-[#43A047] text-white py-2 rounded-lg font-semibold transition-all duration-200">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </div>
    );
};

export default AllCrops;
