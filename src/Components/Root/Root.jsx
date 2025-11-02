import React from 'react';
import Home from '../../Pages/Home/Home';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;