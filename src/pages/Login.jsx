import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const userData = { email, password };
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('user', JSON.stringify(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'You have successfully logged in.',
                });
                navigate('/');
            })
            .catch(error => {
                console.error('Error logging in:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'An error occurred while logging in. Please try again later.',
                });
            });
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Authorize</button>
            <div>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;

