import { ReTitle } from 're-title';
import React from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import AboutUs from '../Components/AboutUs';
import Achievements from '../Components/Achievements';
import Newsletters from '../Components/Newsletters';
import HowItWorks from '../Components/HowItWorks';
import Blogs from '../Components/Blogs';

const Home = () => {
    return (
        <div className='px-2'>
            {/* title */}
            <ReTitle title='Home | Krishi-Link'></ReTitle>

            {/* banner */}
            <Banner></Banner>

            {/* slider */}
            <Slider></Slider>

            {/* How it works */}
            <HowItWorks></HowItWorks>

            {/* About us section */}
            <AboutUs></AboutUs>

            {/* achievements */}
            <Achievements></Achievements>

            {/* Blogs */}
            <Blogs></Blogs>

            {/* Newsletter */}
            <Newsletters></Newsletters>
        </div>
    );
};

export default Home;