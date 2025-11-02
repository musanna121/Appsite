import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='bg-[#001931] p-10'>
            <div className="flex justify-between pt-10 text-xl">
                <div className="ml-10 flex items-center">
                    <img className="w-[35px]" src={logo} alt="" />
                    <h3 className='text-white'>HERO.IO</h3>
                </div>
                <div className="text-white mr-10">
                    <h3 className='p-3'>Social Links</h3>
                    <div className="flex justify-center space-x-3">
                       <div className=""><FaFacebook/></div> 
                       <div className=""><FaX/></div>
                       <div className=""><FaLinkedin/></div>
                    </div>
                </div>
            </div>
            <h3 className='text-white text-xl text-center'>Copyright © 2025 - All right reserved</h3>
        </footer>
    );
};

export default Footer;