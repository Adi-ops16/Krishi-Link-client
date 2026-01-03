import React from 'react';
import logo from '../../assets/logo.png'
import { ChevronRight } from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router';
import Swal from 'sweetalert2';
import useAuthContext from '../../Hooks/useAuthContext';
import { FaHome } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import { GoHeartFill } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';

const DashboardLayout = () => {

    const { user, logout, setUser } = useAuthContext()

    const handleLogOut = () => {
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
    }

    const dashboardLinks = <>
        <li>
            <NavLink to='/dashboard' end className="is-drawer-close:tooltip is-drawer-close:tooltip-right bg-primary/10 text-black/70" data-tip="Dashboard Home">
                {/* Home icon */}
                <FaHome></FaHome>
                <span className="is-drawer-close:hidden">Dashboard Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard/profile' className="is-drawer-close:tooltip is-drawer-close:tooltip-right bg-primary/10 text-black/70" data-tip="Profile">
                <CgProfile></CgProfile>
                <span className="is-drawer-close:hidden">Profile</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/my-post" className="is-drawer-close:tooltip is-drawer-close:tooltip-right bg-primary/10 text-black/70" data-tip="My posts">
                <GrDocumentText />
                <span className="is-drawer-close:hidden">My posts</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/my-interest" className="is-drawer-close:tooltip is-drawer-close:tooltip-right bg-primary/10 text-black/70" data-tip="My Interests">
                <GoHeartFill />
                <span className="is-drawer-close:hidden">My Interests</span>
            </NavLink>
        </li>
    </>

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="sticky top-0 z-30 bg-base-100 border-b border-primary/10">
                    <div className="flex justify-between items-center px-4 py-2">

                        {/* Left */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="my-drawer-4" className="btn btn-sm btn-ghost">
                                <ChevronRight size={20} />
                            </label>
                            <Link to="/" className="font-semibold text-lg text-primary">
                                Krishi-Link
                            </Link>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-3">
                            <img
                                src={user?.photoURL}
                                className="w-9 h-9 rounded-full border border-primary/30"
                                alt="user"
                            />

                            <button
                                onClick={handleLogOut}
                                className="btn btn-md bg-linear-to-r from-[#43A047] to-[#8BC34A] border-none text-white hover:from-[#66BB6A] hover:to-[#4CAF50] transition-all duration-300">
                                Logout
                            </button>
                        </div>

                    </div>
                </nav>


                {/* Page content here */}
                <div className="p-4 md:p-6 bg-[#F9FAF9] min-h-[calc(100vh-56px)]">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col bg-base-100 border-r border-primary/10 is-drawer-close:w-14 is-drawer-open:w-64 transition-all">
                    {/* Sidebar content here */}
                    <ul className="menu gap-1 w-full grow py-16 lg:py-0">
                        <li className='is-drawer-close:w-12 is-drawer-open:w-20 hidden lg:inline'>
                            <Link to={`/`} className="py-4">
                                {/* Logo */}
                                <img className=" rounded-full  transition-all" src={logo} alt="logo" />
                            </Link>
                        </li>

                        {/* List item */}
                        {dashboardLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;