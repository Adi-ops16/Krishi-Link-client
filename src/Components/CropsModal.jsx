import React from 'react';
import { FaSeedling } from 'react-icons/fa';

const CropsModal = ({ selectedPost, editModal, setSelectedPost }) => {
    const { _id, crop_name, crop_image, description, type, price_per_unit, quantity, location } = selectedPost || {}

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedCrop = {
            crop_name: form.crop_name.value,
            crop_image: form.crop_image.value,
            description: form.description.value,
            type: form.type.value,
            price_per_unit: parseFloat(form.price_per_unit.value),
            quantity: parseFloat(form.quantity.value),
            location: form.location.value,
            updated_at: new Date(),
        };

        editModal(_id, updatedCrop)

        setSelectedPost(null)
        document.getElementById('crop_modal').close()
    }

    return (
        <dialog id="crop_modal" className="modal w-full max-w-xl rounded-3xl p-0 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="modal-box flex flex-col gap-5 p-6 bg-white">
                <h3 className="font-bold text-green-600 text-2xl border-b pb-2 mb-4"><FaSeedling /> Edit Crop</h3>

                {/* Crop Name */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Crop Name</label>
                    <input
                        name="crop_name"
                        defaultValue={crop_name}
                        type="text"
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0"
                    />
                </div>

                {/* Type */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Type</label>
                    <input
                        name="type"
                        defaultValue={type}
                        type="text"
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0"
                    />
                </div>

                {/* Price & Quantity */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm font-medium mb-1">Price / Unit</label>
                        <input
                            name="price_per_unit"
                            defaultValue={price_per_unit}
                            type="number"
                            className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm font-medium mb-1">Quantity</label>
                        <input
                            name="quantity"
                            defaultValue={quantity}
                            type="number"
                            className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0"
                        />
                    </div>
                </div>

                {/* Crop Image */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Crop Image URL</label>
                    <input
                        name="crop_image"
                        defaultValue={crop_image}
                        type="text"
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0"
                    />
                </div>

                {/* Location */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Location</label>
                    <input
                        name="location"
                        defaultValue={location}
                        type="text"
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        rows="4"
                        className="textarea textarea-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-within:outline-0 resize-none"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        type="button"
                        className="btn btn-outline btn-sm border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                        onClick={() => document.getElementById('crop_modal').close()}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary btn-sm bg-linear-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400 border-none text-white">
                        Save
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default CropsModal;
