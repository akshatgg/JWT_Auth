import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navba from './Navba.js';

const Out = () => {
    return (
        <>
            <Navba/>
            <Outlet/>
        </>
    );
}

export default Out;
