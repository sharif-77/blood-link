import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full h-full' src="https://i.ibb.co/frGYJXn/1581099611064.jpg" alt="" />
                <Link to='/' className='absolute top-1 left-1 btn uppercase btn-success text-white'>Go Home</Link>
            </div>
            
        </div>
    );
};

export default Error;