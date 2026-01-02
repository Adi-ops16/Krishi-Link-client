import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const RootLayout = () => {

    const aboutRef = useRef(null)


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

    const handleScrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <header className='sticky top-0 z-50'>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='flex-1'>
                <Outlet context={{ aboutRef }}></Outlet>
            </main>
            <footer>
                <Footer handleScrollToAbout={handleScrollToAbout}></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;