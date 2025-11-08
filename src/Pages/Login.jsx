import Swal from "sweetalert2";
import useAuthContext from "../Hooks/useAuthContext";
import loginImage from "../assets/authBanner.jpg";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router";


const Login = () => {
    const { setUser, setUserLoading, signInUser, googleSignUp } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(data => {
                Swal.fire({
                    icon: "success",
                    title: "Welcome Back!",
                    text: "You have successfully logged in.",
                    confirmButtonColor: "#4CAF50"
                });
                setUser(data.user);
                setUserLoading(false);
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                    confirmButtonColor: "#E74C3C"
                });
            });
        e.target.reset()
    };

    const handleGoogleSignUp = () => {
        googleSignUp()
            .then(data => {
                Swal.fire({
                    icon: "success",
                    title: "Welcome to KrishiLink",
                    text: "Login Successful",
                    confirmButtonColor: "#4CAF50"
                });
                console.log("user data", data)
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="min-h-[calc(100vh-200px)] bg-[#FFFDF5] flex flex-col justify-center">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden my-10">

                {/* Left Image Section */}
                <div className="w-full h-full lg:w-1/2 bg-[#F4F9F4] flex flex-col items-center justify-center p-10">
                    <img
                        src={loginImage}
                        alt="KrishiLink farming"
                        className="rounded-xl object-cover w-80 h-80 shadow-md"
                    />
                    <h2 className="text-2xl font-bold text-[#2E7D32] mt-6 text-center">
                        Welcome Back to KrishiLink!
                    </h2>
                    <p className="text-gray-600 text-center mt-2 max-w-xs">
                        Sign in to continue your journey — explore, grow, and connect with the farming community.
                    </p>
                </div>

                {/* Right Form Section */}
                <div className="w-full h-full lg:w-1/2 p-10 bg-white">
                    <h2 className="text-3xl font-bold text-[#2E7D32] text-center mb-2">KrishiLink</h2>
                    <p className="text-gray-600 text-center mb-8">Sign in to your account</p>

                    <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto">
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

                        <div>
                            <div className="relative">
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        name="password"
                                        type={`${showPassword ? "text" : "password"}`}
                                        className="w-full input input-bordered rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                                        placeholder="••••••••"
                                        require
                                        pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                        title="Password must have at least 6 characters, including 1 uppercase and 1 lowercase letter"
                                    />
                                </div>
                                <div className="text-gray-500 hover:text-[#4CAF50]" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <IoIosEyeOff size={18} className="absolute right-2 bottom-2.5 cursor-pointer z-10" /> :
                                            <FaEye className="absolute right-2 bottom-2.5 cursor-pointer z-10"></FaEye>
                                    }
                                </div>
                            </div>
                            {/* <p className="text-red-400">{error}</p> */}
                            <div className="text-right mt-1">
                                <a href="#" className="text-sm text-[#4CAF50] hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full bg-[#4CAF50] hover:bg-[#43A047] text-white border-none rounded-lg"
                        >
                            Sign In
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
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="#fff" d="M0 0h512v512H0z" /><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" /><path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" /><path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" /><path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" /></g></svg>
                        Continue with Google
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        New here?{" "}
                        <Link to="/auth/registration" className="text-[#4CAF50] font-semibold hover:underline">
                            Create an Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
