import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.js'
const Out = () => {
    return (
        <>
             <Navbar/>
            <Outlet />
        </>
    );
}

export default Out;
