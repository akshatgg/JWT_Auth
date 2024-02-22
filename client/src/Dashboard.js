import React, { useState, useEffect } from "react";
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user data from backend API after component mounts
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/auth/user'); // Correct endpoint to fetch user data
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data');
            }
        };

        console.log(userData);
        fetchUserData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const squareStyle = {
        width: '300px',
        height: '300px',
        background: 'linear-gradient(45deg, #000000, #333333)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        color: 'white'
    };

    return (
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[50%]">
            <div style={squareStyle}>
                {/* Display user email and name if userData is available */}
                {userData && (
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                        <h2>{userData.name}</h2>
                        <p>{userData.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
