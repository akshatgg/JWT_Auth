import React from "react";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const squareStyle = {
        width: '300px',
        height: '300px',
        background: 'linear-gradient(45deg, #000000, #333333)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    };

    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-[50%]">
            <div style={squareStyle} className="rounded-2xl">
                {/* Content inside the square */}
                <p style={{ color: '#ffffff' }}>Dashboard Content</p>
            </div>
        </div>
    );
};

export default Dashboard;
