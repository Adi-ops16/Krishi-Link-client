import React, { useState, useEffect } from "react";
import { FaUserCircle, FaImage } from "react-icons/fa";
import useAuthContext from "../Hooks/useAuthContext";
import Swal from "sweetalert2";

const Profile = () => {
    const { user, updateUser } = useAuthContext();

    // store editable fields in state
    const [profileData, setProfileData] = useState({
        name: user?.displayName,
        photoURL: user?.photoURL
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setProfileData({
                name: user.displayName,
                photoURL: user.photoURL
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        const updatedProfile = {
            displayName: profileData.name,
            photoURL: profileData.photoURL
        }
        Swal.fire({
            title: "Are you sure you want to save these changes?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,update!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await updateUser(user, updatedProfile)
                Swal.fire({
                    title: "Updated!",
                    text: "Your profile has been updated.",
                    icon: "success"
                });
            }
        });

        setIsSaving(false);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setProfileData({
            name: user.displayName,
            photoURL: user.photoURL,
        });
        setIsEditing(false);
    };

    return (
        <div className="min-h-[calc(100vh-400px)] bg-linear-to-b from-green-50 to-white py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <form onSubmit={handleProfileUpdate}>
                    {/* Header */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="">
                            {profileData.photoURL ?
                                <img src={profileData.photoURL} alt="Profile"
                                    className="w-28 h-28 object-cover rounded-full border-4 border-green-100 shadow-sm" />
                                :
                                <FaUserCircle className="text-green-500 text-[110px]" />
                            }
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800 mt-4">
                            {profileData.name}
                        </h1>
                        <p className="text-gray-600">{user.email}</p>

                        <button
                            type="button"
                            onClick={() => isEditing ? handleCancel() : setIsEditing(true)}
                            className="mt-5 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg shadow-sm transition-all duration-300">
                            {isEditing ? "Cancel" : "Edit Profile"}
                        </button>
                    </div>

                    {/* Editable Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={profileData.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full border border-gray-300 rounded-lg px-4 py-2 outline-none transition-all ${isEditing
                                    ? "bg-white focus:ring-2 ring-green-400"
                                    : "bg-gray-100"
                                    }`} />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                disabled
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed" />
                        </div>

                        {/* Photo URL */}
                        <div className="md:col-span-2">
                            <div className="flex gap-2 items-center mb-1">
                                <FaImage className="text-green-500" />
                                <label className="text-gray-700 font-semibold">Photo URL</label>
                            </div>
                            <input
                                type="text"
                                name="photoURL"
                                value={profileData.photoURL}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`w-full border border-gray-300 rounded-lg px-4 py-2 outline-none transition-all ${isEditing
                                    ? "bg-white focus:ring-2 ring-green-400"
                                    : "bg-gray-100"}`} />
                        </div>
                    </div>

                    {/* Save Button */}
                    {isEditing && (
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={isSaving}
                                className={`${isSaving
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-linear-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400"
                                    } text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition-all duration-300`}>
                                {isSaving ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Profile;
