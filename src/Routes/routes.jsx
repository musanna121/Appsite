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
import AppPage from "../Pages/AppPage/AppPage";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";



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
      {
        index: true,
        path: '/apps',
        Component: AppPage
      },
      {
        index: true,
        path: '/installation',
        Component: Installation
      },
      {
        index: true,
        path: '/appdetails/:id',
        loader:()=> fetch('data.json'),
        Component: AppDetails
      }
    ]
  },
  
])


export default router;

