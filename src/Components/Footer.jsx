import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Footer = ({ handleScrollToAbout }) => {
    const handleContact = () => {
        Swal.fire({
            title: "Thank you for your interest",
            text: "you can contact us via email:hasibadi22@gmail.com or via wp:+880 1918-389189",
            confirmButtonColor: "green"
        })
    }
    return (
        
        <footer className="bg-base-100 border-t border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-4">

                {/* Top content */}
                <div className="flex flex-col lg:flex-row justify-evenly items-start gap-8">

                    {/* Logo + Social */}
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="KrishiLink Logo" className="w-11 h-11 rounded-full border-2 border-primary" />
                            <span className="text-lg font-semibold text-primary">KrishiLink</span>
                        </div>

                        <div className="flex gap-2">
                            <a href='https://www.facebook.com/spiegel.spike.854114' className="btn btn-circle btn-xs btn-ghost hover:bg-primary hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href='https://x.com/AbdulHasib95581' className="btn btn-circle btn-xs btn-ghost hover:bg-primary hover:text-white">
                                <FaXTwitter />
                            </a>
                            <a href='https://www.instagram.com/_astro.philee_/' className="btn btn-circle btn-xs btn-ghost hover:bg-primary hover:text-white">
                                <FaInstagram />
                            </a>
                            <a className="btn btn-circle btn-xs btn-ghost hover:bg-primary hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}

                        <nav>
                            <h6 className="font-medium mb-2 text-neutral">Services</h6>
                            <ul className="flex flex-col gap-1 text-neutral text-sm">
                                <li><a href="https://clutch.co/bd/agencies/branding" className="link link-hover hover:text-primary">Branding</a></li>
                                <li><a href="https://clutch.co/bd/agencies/design" className="link link-hover hover:text-primary">Design</a></li>
                                <li><a href="https://clutch.co/agencies/digital-marketing" className="link link-hover hover:text-primary">Marketing</a></li>
                                <li><a href="https://clutch.co/bd/agencies" className="link link-hover hover:text-primary">Ads</a></li>
                            </ul>
                        </nav>

                        <nav>
                            <h6 className="font-medium mb-2 text-neutral">Company</h6>
                            <ul className="flex flex-col gap-1 text-neutral text-sm">
                                <li><button onClick={handleScrollToAbout} className="link link-hover hover:text-primary text-left">About</button></li>
                                <li><button onClick={handleContact} className="link link-hover hover:text-primary text-left">Contact</button></li>
                            </ul>
                        </nav>

                </div>

                {/* Bottom */}
                <div className="mt-6 text-center text-xs text-neutral">
                    &copy; {new Date().getFullYear()} KrishiLink. All rights reserved.
                </div>
            </div>
        </footer>


    );
};

export default Footer;
