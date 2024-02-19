import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Name, setname] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    // Add more state variables for other signup fields

    const handleSignup = () => {
        // Handle signup logic here
    };

    return (

        <div className="absolute max-w-sm mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="Name"
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setname(e.target.value)}
                         className="w-full px-4 py-2 border rounded-md"
                    />
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />


<p className='text-center text-blue-500'><Link to="/signin">Already have an account ?</Link></p>
                    {/* Add more input fields for other signup fields */}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
