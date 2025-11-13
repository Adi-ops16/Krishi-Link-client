import React, { useState } from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import Swal from 'sweetalert2';
import loginImage from '../assets/authBanner.jpg';
import { FaEye } from 'react-icons/fa6';
import { IoIosEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router';
import useAxios from '../Hooks/useAxios';

const Registration = () => {
    const { setUser, setUserLoading, createNewUser, googleSignUp, updateUser } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const axiosInstance = useAxios()
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;
        const password = e.target.password.value;

        createNewUser(email, password)
            .then(async (data) => {
                const user = data.user;
                await updateUser(user, {
                    displayName,
                    photoURL
                })

                const userInfo = {
                    displayName,
                    photoURL,
                    email,
                    created_at: new Date()
                }

                axiosInstance.post('/user', userInfo)

                Swal.fire({
                    icon: "success",
                    title: "Welcome to Krishi Link",
                    text: "Your account has been successfully created",
                    confirmButtonColor: "#4CAF50"
                })
                setUser(user)
                setUserLoading(false)
                navigate(location.state ? location.state : "/")
            })
            .catch(error => {
                console.log("error on creating a user", error);
                Swal.fire({
                    icon: "error",
                    title: "Registration failed",
                    text: `${error.message}`,
                    confirmButtonColor: "red"
                })
            })
        e.target.reset()
    };

    const handleGoogleSignUp = () => {
        googleSignUp()
            .then((data) => {
                const user = data.user
                const { displayName, photoURL, email } = user
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome to KrishiLink',
                    text: 'Login Successful',
                    confirmButtonColor: '#4CAF50',
                });
                const userInfo = {
                    displayName,
                    photoURL,
                    email,
                    created_at: new Date()
                }

                axiosInstance.post('/user', userInfo)

                setUser(data.user)
                setUserLoading(false)
                navigate(location.state ? location.state : "/")
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="bg-[#FFFDF5] flex flex-col justify-center">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden my-10">
                {/* left section */}
                <div className="w-full lg:w-1/2 bg-[#F4F9F4] flex flex-col items-center justify-center p-10">
                    <img
                        src={loginImage}
                        alt="KrishiLink farming"
                        className="rounded-xl object-cover w-80 h-80 shadow-md"
                    />
                    <h2 className="text-2xl font-bold text-[#2E7D32] mt-6 text-center">
                        Join the KrishiLink Community!
                    </h2>
                    <p className="text-gray-600 text-center mt-2 max-w-xs">
                        Create your account to connect with farmers, buyers, and agri-enthusiasts across Bangladesh.
                    </p>
                </div>

                {/* right section */}
                <div className="w-full lg:w-1/2 p-10 bg-white">
                    <h2 className="text-3xl font-bold text-[#2E7D32] text-center mb-2">Create Account</h2>
                    <p className="text-gray-600 text-center mb-8">Register your KrishiLink profile</p>

                    <form onSubmit={handleRegister} className="space-y-4 max-w-md mx-auto">
                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                className="w-full input input-bordered rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="w-full input input-bordered rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                name="photo"
                                type="text"
                                className="w-full input input-bordered rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                                placeholder="https://example.com/photo.jpg"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className="w-full input input-bordered rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                                placeholder="••••••••"
                                required
                                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Password must have at least 6 characters, including 1 uppercase and 1 lowercase letter"
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 bottom-3 cursor-pointer z-10 text-gray-500 hover:text-[#4CAF50]">
                                {showPassword ? <IoIosEyeOff size={18} /> : <FaEye size={18} />}
                            </div>
                        </div>
                        {/* Terms & Conditions */}
                        <div className="flex items-center gap-2 text-sm mt-2">
                            <input
                                type="checkbox"
                                required
                                className="accent-[#4CAF50] cursor-pointer w-4 h-4"
                            />
                            <p className="text-gray-700">
                                I agree to the {" "}
                                <span className="text-[#4CAF50] hover:underline">
                                    terms & conditions
                                </span>
                            </p>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="btn w-full bg-[#4CAF50] hover:bg-[#43A047] text-white border-none rounded-lg transition-all duration-200"
                        >
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-6">
                        <span className="h-px w-20 bg-gray-300"></span>
                        <span className="mx-2 text-gray-400 text-sm">or</span>
                        <span className="h-px w-20 bg-gray-300"></span>
                    </div>

                    {/* Google Sign In */}
                    <button
                        onClick={handleGoogleSignUp}
                        className="btn w-full bg-white border border-gray-300 text-gray-700 hover:bg-[#F4F9F4] flex items-center justify-center gap-2"
                    >
                        <svg
                            aria-label="Google logo"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path fill="#fff" d="M0 0h512v512H0z" />
                                <path
                                    fill="#34a853"
                                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                />
                                <path
                                    fill="#4285f4"
                                    d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                />
                                <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path
                                    fill="#ea4335"
                                    d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                />
                            </g>
                        </svg>
                        Continue with Google
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{' '}
                        <Link to="/auth/login" className="text-[#4CAF50] font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
