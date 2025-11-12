import { ReTitle } from 're-title';
import React from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import AboutUs from '../Components/AboutUs';
import Achievements from '../Components/Achievements';
import Newsletters from '../Components/Newsletters';

const Home = () => {
    return (
        <div>
            {/* title */}
            <ReTitle title='Home | Krishi-Link'></ReTitle>

            {/* banner */}
            <Banner></Banner>

            {/* slider */}
            <Slider></Slider>

            {/* About us section */}
            <AboutUs></AboutUs>

            {/* achievements */}
            <Achievements></Achievements>

            {/* Newsletter */}
            <Newsletters></Newsletters>
        </div>
    );
};

export default Home;