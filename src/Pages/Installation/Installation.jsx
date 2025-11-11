import React from 'react';
import InstalledAppsView from '../../Components/InstalledAppsView/InstalledAppsView';
import { FaFilter } from 'react-icons/fa6';

const Installation = () => {
    return (
        <div>
            <div className="p-10">
                <h3 className='font-bold text-4xl text-center '>Your Installed Apps</h3>
                <p className='text-center pt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex w-11/12 mx-auto items-center justify-between pb-5">
                <h3 className='font-bold'>1 Apps Found</h3>
                <button className='btn text-gray-500'>Sort By Size <FaFilter/></button>
            </div>
            <div className="w-11/12 mx-auto grid gap-3">
            <InstalledAppsView></InstalledAppsView>
            <InstalledAppsView></InstalledAppsView>
            <InstalledAppsView></InstalledAppsView>
            </div>
        </div>
    );
};

export default Installation;