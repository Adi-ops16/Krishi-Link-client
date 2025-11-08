import { ReTitle } from 're-title';
import React from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
            {/* title */}
            <ReTitle title='Home | Krishi-Link'></ReTitle>
            {/* banner */}
            <Banner></Banner>
            {/* slider */}
            <Slider></Slider>
        </div>
    );
};

export default Home;