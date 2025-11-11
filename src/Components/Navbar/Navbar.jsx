// import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';


const Navbar = () => {
    // const clicked = useState(true)
    return (
        <div className='bg-[#f5f5f5]'>
            <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/apps'}>Apps</Link></li>
                    <li><Link to={'/installation'}>Installation</Link></li>
                </ul>
                </div>
                <div className="font-bold ml-10">
                    <Link className='flex items-center' to={'/'}><img className="w-[30px] ml-5px" src={logo} alt="" />
                    <p className='text-[#8a59ec]'>HERO.IO</p>
                    </Link>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                <li className='text-[#8a59ec] font-bold'><Link to={'/'}>Home</Link></li>
                <li className='active:bg-green-700'><Link to={'/apps'}>Apps</Link></li>
                <li><Link to={'/installation'}>Installation</Link></li>
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <a href='https://github.com/musanna121' target='blank' 
                className="text-white font-bold btn bg-linear-[#6630e4,#8a59ec]"><FaGithub/> Contribute</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;