import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div >
            <img className='mx-auto mt-30' src={error} alt="" />
            <div className="mx-auto text-center space-y-4">
            <h3 className='font-bold text-4xl'>Oops, page not found!</h3>
            <p>The page you are looking for is not available.</p>
            <button className='text-white font-bold bg-linear-[#6630e4,#8a59ec] px-10 py-2 rounded-xl'><Link to='/'>Go back</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;