import React from 'react';
import { useLoaderData } from 'react-router';

const CropsDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            crop details
        </div>
    );
};

export default CropsDetails;