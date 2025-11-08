import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-100 px-6 sm:px-10 pt-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

                {/* logo and social links */}
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="KrishiLink Logo" className="w-12 h-12 rounded-full border-2 border-primary" />
                        <span className="text-xl font-bold text-primary">KrishiLink</span>
                    </div>
                    <div className="flex gap-3 mt-2">
                        <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 flex-1">
                    <nav>
                        <h6 className="footer-title text-lg font-semibold mb-3 text-neutral">Services</h6>
                        <ul className="flex flex-col gap-1 text-neutral">
                            <li><a href="#" className="link link-hover hover:text-primary">Branding</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Design</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Marketing</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Advertisement</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-lg font-semibold mb-3 text-neutral">Company</h6>
                        <ul className="flex flex-col gap-1 text-neutral">
                            <li><a href="#" className="link link-hover hover:text-primary">About us</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Contact</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Jobs</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Press kit</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-lg font-semibold mb-3 text-neutral">Legal</h6>
                        <ul className="flex flex-col gap-1 text-neutral">
                            <li><a href="#" className="link link-hover hover:text-primary">Terms of use</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Privacy policy</a></li>
                            <li><a href="#" className="link link-hover hover:text-primary">Cookie policy</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-sm text-neutral">
                &copy; {new Date().getFullYear()} KrishiLink.All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
