import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center my-30'>
           <ScaleLoader></ScaleLoader>
        </div>
    );
};

export default LoadingSpinner;