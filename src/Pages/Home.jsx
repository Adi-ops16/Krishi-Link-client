import { ReTitle } from 're-title';
import React from 'react';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            {/* title */}
            <ReTitle title='Home | Krishi-Link'></ReTitle>
            <header>
                <Banner></Banner>
            </header>
        </div>
    );
};

export default Home;