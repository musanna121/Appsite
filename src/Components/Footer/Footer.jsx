import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { Link } from 'react-router';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='bg-[#001931] p-10'>
            <div className="flex md:justify-between flex-col md:flex-row pt-5">
                 <Link className='flex items-center' to={'/'}><img className="w-[30px] ml-5px" src={logo} alt="" />
                    <p className='text-white font-bold'>HERO.IO</p>
                    </Link>
                <div className="text-white mr-10 gap-5">
                    <h3 className='md:p-3 pt-3'>Social Links</h3>
                    <div className="flex justify-left md:justify-between space-x-3 pt-3">
                       <div className=""><FaFacebook/></div> 
                       <div className=""><FaX/></div>
                       <div className=""><FaLinkedin/></div>
                    </div>
                </div>
            </div>
            <h3 className='text-white text-center pt-7'>Copyright © 2025 - All right reserved</h3>
        </footer>
    );
};

export default Footer;