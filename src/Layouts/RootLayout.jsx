import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const RootLayout = () => {
    // aos initialization
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])
    // aos refresh
    useEffect(() => {
        AOS.refresh()
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;