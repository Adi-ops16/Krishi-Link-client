import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuthContext from '../Hooks/useAuthContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import CropsModal from '../Components/CropsModal';
import Swal from 'sweetalert2';

const MyPosts = () => {
    const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState()

    useEffect(() => {
        axiosSecure.get(`/crops-owner?email=${user?.email}`)
            .then(data => setPosts(data.data));
    }, [axiosSecure, user]);

    const showModal = (post) => {
        setSelectedPost(post)
        document.getElementById('crop_modal').showModal()
    }

    const editModal = (_id, updatedCrop) => {
        Swal.fire({
            title: "Are you sure you want to update this?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`/update/crop/${_id}`, updatedCrop)

                if (res.data.modifiedCount !== 0) {
                    // update ui instantly
                    setPosts((prevPosts) =>
                        prevPosts?.map((post) =>
                            post._id === _id ? { ...post, ...updatedCrop } : post
                        )
                    );

                    Swal.fire({
                        title: "Update successful!",
                        text: "Your product has been updated",
                        icon: "success"
                    });
                }
            }
        })

        // modal close
        document.getElementById('crop_modal').close()
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this product?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/delete/${id}`)

                if (res.data.deletedCount !== 0) {
                    setPosts((prevPosts) => prevPosts.filter(post => post._id !== id))

                    Swal.fire({
                        title: "Delete successful!",
                        text: "Your product has been Deleted",
                        icon: "success"
                    });
                }
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">My Posted Crops</h1>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse min-w-[900px]">
                    <thead className="bg-[#f3f7f3] text-gray-700 text-[14px] uppercase">
                        <tr>
                            <th className="py-3 px-4 w-1/12">SL</th>
                            <th className="py-3 px-4 w-2/5">Crop</th>
                            <th className="py-3 px-4 w-1/6">Type</th>
                            <th className="py-3 px-4 text-center w-1/6">Price / Unit</th>
                            <th className="py-3 px-4 text-center w-1/6">Quantity</th>
                            <th className="py-3 px-4 w-1/6">Location</th>
                            <th className="py-3 px-4 w-1/6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={post._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4 text-center text-gray-600">{index + 1}</td>
                                <td className="py-3 px-4 flex items-center gap-3">
                                    <img
                                        src={post.crop_image}
                                        alt={post.crop_name}
                                        className="w-12 h-12 object-cover rounded-lg border"
                                    />
                                    <span className="font-medium text-gray-800">{post.crop_name}</span>
                                </td>
                                <td className="py-3 px-4 text-gray-600">{post.type}</td>
                                <td className="py-3 px-4 text-center text-green-700 font-semibold">{post.price_per_unit} / {post.unit}</td>
                                <td className="py-3 px-4 text-center text-gray-700">{post.quantity}</td>
                                <td className="py-3 px-4 text-gray-500">{post.location}</td>
                                <td className="py-3 px-4 flex gap-2 justify-center">
                                    <button onClick={() => showModal(post)} className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                                        <FaEdit /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(post._id)} className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors">
                                        <FaTrash /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-6 text-gray-400">
                                    No posts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <CropsModal selectedPost={selectedPost} editModal={editModal} setSelectedPost={setSelectedPost} ></CropsModal>
        </div>
    );
};

export default MyPosts;
