import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-200px)]'>
            <RingLoader color='#4CAF50' size={100}></RingLoader>
        </div>
    );
};

export default Loader;
