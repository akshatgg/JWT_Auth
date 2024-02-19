// ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        // Handle forgot password logic here
    };

    return (
        <div className="absolute p-7 shadow-md max-w-sm mx-auto mt-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
            <form onSubmit={handleForgotPassword} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
                <p className='text-center text-blue-500'><Link to="/signin">Back on Sigin page -></Link></p>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
