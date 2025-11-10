import React from 'react';
import { FaGooglePlay } from 'react-icons/fa6';
import { FaAppStore } from 'react-icons/fa6';
import bannerImg from '../../assets/hero.png'
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Banner = () => {
    const apps = useLoaderData();
    console.log(apps)
    return (
        <div className='text-center space-y-10 bg-[#f5f5f5]'>
            <div className="space-y-5">
                <h3 className='text-5xl font-bold pt-10'>We Build</h3>
                <h3 className='text-5xl font-bold'><span className='text-[#8a59ec]'>Productive </span>Apps</h3>
                <p className='w-6/12 mx-auto text-xl text-gray-400'>At HERO.IO , we craft innovative apps designed to make everyday 
                    life simpler, smarter, and more exciting. Our goal is to turn your
                     ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="flex justify-center gap-5">
                <button className='btn flex items-center bg-white'><FaGooglePlay/>Google Play</button>
                <button className='btn flex items-center bg-white'><FaAppStore/>App Store</button>
            </div>
            <div className="flex justify-center mb-0">
                <img src={bannerImg} className='' alt="" />
            </div>
            <div className="bg-linear-[#6630e4,#8a59ec] text-white pt-15">
                <h3 className='text-5xl font-bold'>Trusted by Millions, Built for You</h3>
                <div className="flex justify-center space-x-70 p-20">
                    <div className="space-y-4">
                        <h3>Total Downloads</h3>
                        <h3 className='text-5xl font-bold'>29.6M</h3>
                        <h3>21% more than last month</h3>
                    </div>
                    <div className="space-y-4">
                        <h3>Total Reviews</h3>
                        <h3 className='text-5xl font-bold'>906K</h3>
                        <h3>46% more than last month</h3>
                    </div>
                    <div className="space-y-4">
                        <h3>Active Apps</h3>
                        <h3 className='text-5xl font-bold'>132+</h3>
                        <h3>31 more will Launch</h3>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5f5f5]">
                <h3 className='text-5xl font-bold text-[#8a59ec] mb-10'>Trending Apps</h3>
                <Apps apps={apps}></Apps>
            </div>
        </div>
    );
};

export default Banner;