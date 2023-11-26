import React from 'react';

const Welcome = ({heading}) => {
    return (
        <div>
            <p className='uppercase text-3xl font-bold'> welcome <span className='text-red-600'>{heading}</span></p>
        </div>
    );
};

export default Welcome;