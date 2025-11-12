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

        form.reset()
        setSelectedPost(null)
        document.getElementById('crop_modal').close()

    }

    return (
        <div>
            <dialog id="crop_modal" className="modal w-full max-w-lg rounded-2xl p-0">
                <form onSubmit={handleSubmit} method="dialog" className="modal-box flex flex-col gap-4 p-6">
                    <h3 className="font-bold text-xl text-gray-800">Edit Crop</h3>

                    {/* Crop Name */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Crop Name</label>
                        <input
                            name="crop_name"
                            defaultValue={crop_name}
                            type="text"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Type */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Type</label>
                        <input
                            name="type"
                            defaultValue={type}
                            type="text"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Price per Unit */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Price per Unit</label>
                        <input
                            name="price_per_unit"
                            defaultValue={price_per_unit}
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Quantity</label>
                        <input
                            name="quantity"
                            defaultValue={quantity}
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* crop image */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Crop Image</label>
                        <input
                            name="crop_image"
                            defaultValue={crop_image}
                            type="text"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Location</label>
                        <input
                            name="location"
                            defaultValue={location}
                            type="text"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm mb-1">Description</label>
                        <textarea
                            name="description"
                            defaultValue={description}
                            className="textarea textarea-bordered w-full resize-none"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={() => document.getElementById('crop_modal').close()}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default CropsModal;