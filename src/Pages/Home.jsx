import { ReTitle } from 're-title';
import React, { useRef } from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import AboutUs from '../Components/AboutUs';
import Achievements from '../Components/Achievements';
import Newsletters from '../Components/Newsletters';
import HowItWorks from '../Components/HowItWorks';
import Blogs from '../Components/Blogs';
import { useOutletContext } from 'react-router';
import FAQ from '../Components/FAQ';
import Testimonials from '../Components/Testimonials';

const Home = () => {
    const {aboutRef} = useOutletContext()
    const blogsRef = useRef()

    const handleScrollToBlogs = () => {
        blogsRef.current?.scrollIntoView({ behavior: "smooth"});
    };

    return (
        <div className='px-2 overflow-hidden'>
            {/* title */}
            <ReTitle title='Home | Krishi-Link'></ReTitle>

            {/* banner */}
            <Banner handleScrollToBlogs={handleScrollToBlogs}></Banner>

            {/* slider */}
            <Slider></Slider>

            {/* How it works */}
            <HowItWorks></HowItWorks>

            {/* About us section */}
            <AboutUs aboutRef={aboutRef}></AboutUs>

            {/* achievements */}
            <Achievements></Achievements>

            <div ref={blogsRef}>
                {/* Blogs */}
                <Blogs></Blogs>
            </div>

            {/* Testimonials */}
            <Testimonials></Testimonials>

            {/* FAQ */}
            <FAQ></FAQ>

            {/* Newsletter */}
            <Newsletters></Newsletters>
        </div>
    );
};

export default Home;