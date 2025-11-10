import React from 'react';
import Rating from '../../Components/Rating/Rating';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    console.log(appId);
    const data = useLoaderData();
    const appData = data.find((app)=> app.id === appId)
    console.log(appData);
    const {image, title, companyName, ratings} = appData
    return (
        <div className='w-11/12 mx-auto'>
           <div className="flex mt-15 mb-10">
                <img src={image} alt="" /> 
                <div className="pl-5">
                    <h3 className='text-3xl font-bold'>{title}</h3>
                    <h3 className='text-sm text-[#627382]'>Developed by <span className='font-bold text-[#8a59ec]'>{companyName}</span></h3>
                </div>
           </div>
           
           <div className="">
            <h3 className='font-bold'>Ratings</h3>
            <Rating ratings={ratings}></Rating>
           </div>
        </div>
    );
};

export default AppDetails;