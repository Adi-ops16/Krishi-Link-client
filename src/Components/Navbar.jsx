import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuthContext from '../Hooks/useAuthContext';
import logo from '../assets/logo.png';
import { FaHome, FaRegUserCircle, FaSeedling } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { MdOutlinePostAdd } from 'react-icons/md';
import { GrDocumentText } from 'react-icons/gr';
import { GoHeartFill } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const { logout, user, setUser } = useAuthContext();

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logout successful",
                    confirmButtonColor: "#4CAF50"
                });
                setUser(null);
            })
            .catch((error) => console.log(error.code));
    };

    const links = (
        <>
            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/all-crops"><FaSeedling /> All Crops</NavLink></li>
            {
                user &&
                <>
                    <li><NavLink to="/add-crop"><MdOutlinePostAdd />Add Crop</NavLink></li>
                    <li><NavLink to="/my-post"><GrDocumentText /> My Posts</NavLink></li>
                    <li><NavLink to="/my-interest"><GoHeartFill /> My Interests</NavLink></li>
                    <li><NavLink to="/profile"><CgProfile /> Profile</NavLink></li>
                </>
            }
        </>
    );

    return (
        <nav className="navbar px-4 md:px-8 bg-base-100 shadow-sm">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 ml-2">
                    <img src={logo} alt="KrishiLink Logo" className="w-12 h-12 rounded-full" />
                    <span className="font-bold text-xl text-primary hidden md:inline">KrishiLink</span>
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center gap-5">
                {user ?
                    <figure>
                        <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="user photo" />
                    </figure>
                    :
                    <FaRegUserCircle size={28} color='#43A047' />
                }
                {user ?
                    <button
                        onClick={handleLogout}
                        className="btn btn-md bg-linear-to-r from-[#43A047] to-[#8BC34A] border-none text-white hover:from-[#66BB6A] hover:to-[#4CAF50] transition-all duration-300">
                        Logout
                    </button>
                    :
                    <Link
                        to="/auth/login"
                        className="btn btn-md bg-linear-to-r from-[#43A047] to-[#8BC34A] border-none text-white hover:from-[#66BB6A] hover:to-[#4CAF50] transition-all duration-300">
                        Login
                    </Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;
