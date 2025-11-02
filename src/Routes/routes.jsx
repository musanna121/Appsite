import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from "../Components/Navbar/Navbar";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Banner from "../Components/Banner/Banner";


const router = createBrowserRouter([
  {
    path :'/',
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader:()=> fetch('data.json'),
        Component: Banner
      },
      {
        index: true,
        path: '/about',
        Component: About
      },
      
    ]
  },
  
])


export default router;

