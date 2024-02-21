import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Function to toggle login state
    const loginState = JSON.parse(sessionStorage.getItem('login'));
    const changelogin = () => {
        sessionStorage.setItem('login', JSON.stringify(!loginState));
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        // Input validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const userData = {
                email: email,
                password: password
            };

            // Send POST request to the backend API endpoint for signin
            const response = await axios.post('/api/auth/signin', userData);

            // Check if signin was successful
            if (response.status === 200) {
                changelogin(); // Toggle login state
                console.log('Signin successful');
                Swal.fire({
                    title: "Signin Successful",
                    text: "You have successfully signed in.",
                    icon: "success"
                }).then(() => {
                    navigate('/');
                    
                }).then(()=>{
                    window.location.reload(); 
                })
                // Redirect or show success message
            } else {
                console.error('Signin failed');
                // Handle other responses if needed
            }
        } catch (error) {
            // Handle errors
            setError(error.message);
        }
    };

    if (loginState) {
        return null; // If already logged in, don't render signin form
    }

    return (
        <div className="absolute max-w-sm mx-auto mt-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Signin</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}

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
                <p className='text-center text-blue-500'><Link to="/signup">Register here</Link></p>
                <p className='text-center text-blue-500'><Link to="/forgot">Forget Password ?</Link></p>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                    Signin
                </button>
            </form>
        </div>
    );
};

export default Signin;
