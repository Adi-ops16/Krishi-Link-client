import React from "react";
import { ReTitle } from "re-title";
import { FaSeedling, FaImage, FaMapMarkerAlt } from "react-icons/fa";
import { MdCategory, MdOutlineDescription } from "react-icons/md";
import { TbWeight, TbCurrencyTaka } from "react-icons/tb";
import useAuthContext from "../Hooks/useAuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import RingLoader from "../Components/Loaders/Loader";

const AddCrop = () => {
    const { user } = useAuthContext()
    const axiosSecure = useAxiosSecure()

    const handleCropAdd = (e) => {
        e.preventDefault()
        const crop_name = e.target.crop_name.value
        const type = e.target.type.value
        const price_per_unit = e.target.price.value
        const unit = e.target.unit.value
        const quantity = e.target.quantity.value
        const location = e.target.location.value
        const crop_image = e.target.crop_image.value
        const description = e.target.description.value
        const owner = {
            owner_id: user.uid,
            owner_email: user.email,
            owner_name: user.displayName
        }
        const newCrop = {
            crop_name, type, price_per_unit, unit, quantity, location, crop_image, description, owner
        }
        axiosSecure.post('/crops', newCrop)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your crop has been added",
                        text: "Thank you for trusting us",
                        confirmButtonColor: "#4CAF50"
                    });
                    e.target.reset()
                }
            })
    }


    return (
        <div className="min-h-[calc(100vh-300px)] bg-[#FFFDF5] py-12 px-4 sm:px-6 lg:px-8">
            <ReTitle title="Add a crop | Krishi-Link"></ReTitle>
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                {/* Header Section */}
                <div className="bg-linear-to-r from-[#4CAF50] to-[#2E7D32] py-8 text-center text-white">
                    <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                        <FaSeedling className="text-3xl" />
                        Add a New Crop
                    </h1>
                    <p className="text-sm mt-1 text-green-100">
                        Share your harvest with others — fill out the details below.
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleCropAdd} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Crop Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Crop Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-primary bg-white">
                            <FaSeedling className="text-gray-400" />
                            <input
                                type="text"
                                name="crop_name"
                                required
                                placeholder="e.g. Tomato"
                                className="w-full bg-white text-gray-800 placeholder-gray-400 border-none outline-none shadow-none py-2 px-2 
                                autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-fill-black"
                            />
                        </div>
                    </div>

                    {/* Crop Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Crop Type
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3">
                            <MdCategory className="text-gray-400" />
                            <select required name="type"
                                className="select w-full shadow-none border-none bg-white outline-none" defaultValue="">
                                <option value="" disabled>Select type</option>
                                <option>Vegetable</option>
                                <option>Fruit</option>
                                <option>Grain</option>
                            </select>
                        </div>
                    </div>

                    {/* Price per Unit */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Price per Unit
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3">
                            <TbCurrencyTaka className="text-gray-400" />
                            <input
                                name="price"
                                required
                                type="number"
                                placeholder="e.g. 55"
                                className="input w-full shadow-none outline-none border-none bg-white"
                            />
                        </div>
                    </div>

                    {/* Unit */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Unit
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3">
                            <TbWeight className="text-gray-400" />
                            <select name="unit" className="select w-full border-none bg-white outline-none shadow-none" required defaultValue="">
                                <option value="" disabled>Select unit</option>
                                <option>kg</option>
                                <option>ton</option>
                                <option>bag</option>
                            </select>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Quantity Available
                        </label>
                        <input
                            name="quantity"
                            required
                            type="number"
                            placeholder="e.g. 400"
                            className="input w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] shadow-none outline-none"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Location
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-primary bg-white">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <input
                                required
                                name="location"
                                type="text"
                                placeholder="e.g. Bogura"
                                className="w-full bg-white text-gray-800 placeholder-gray-400 border-none outline-none shadow-none py-2 px-2 
                                autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-fill-black"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Crop Image URL
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-primary bg-white">
                            <FaImage className="text-gray-400" />
                            <input
                                name="crop_image"
                                required
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                className="w-full bg-white text-gray-800 placeholder-gray-400 border-none outline-none shadow-none py-2 px-2 
                                autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-fill-black"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Description
                        </label>
                        <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2">
                            <MdOutlineDescription className="text-gray-400 mt-1" />
                            <textarea
                                name="description"
                                placeholder="Write a short description about your crop..."
                                className="textarea shadow-none resize-none w-full border-none focus:outline-none bg-transparent"
                                rows="3">
                            </textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button
                            type="submit"
                            className="btn bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 rounded-lg shadow-md">
                            Add Crop
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCrop;
