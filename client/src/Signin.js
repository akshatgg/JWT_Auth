// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        // Handle signin logic here
    };

    return (
        <div className="absolute max-w-sm mx-auto mt-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Signin</h2>
            <form onSubmit={handleSignin} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
                <p className='text-center text-blue-500'><Link to="/">Register here</Link></p>
                <p className='text-center text-blue-500'><Link to="/forgot">Forget Password ?</Link></p>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                    Signin
                </button>
            </form>
        </div>
    );
};

export default Signin;
