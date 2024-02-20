import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        // Input validation
        if (!name || !email || !password || !confirmpassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmpassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const userData = {
                name: name,
                email: email,
                password: password,
                confirmpassword: confirmpassword
            };
            console.log(userData);
            const response = await axios.post('/api/auth/signup', userData);

            // Check if signup was successful
            if (response.status === 200) {
                console.log('Signup successful');
                // Redirect or show success message
            } else {
                // Handle other responses if needed
                console.error('Signup failed');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="absolute max-w-sm mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <p className='text-center text-blue-500'><Link to="/signin">Already have an account ?</Link></p>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
