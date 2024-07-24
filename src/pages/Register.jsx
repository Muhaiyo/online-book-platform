import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const userData = { email, password };
        fetch('http://localhost:3000/register', {
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
                localStorage.setItem('user', JSON.stringify(data));
                console.log('User registered successfully:', data);
                Swal.fire({
                    icon: 'success',
                    title: 'Successful registration!',
                    text: 'You successfully registered',
                });
                navigate('/');
            })
            .catch(error => {
                console.error('Error registering user:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration failed',
                    text: 'An error occurred while registering. Please try again later.',
                });
            });
    };

    return (
        <div className="register-page">
            <h2>Register</h2>
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
            <button onClick={handleRegister}>Register</button>
            <div>
                <p>Already have an account? <Link to="/login">Authorize</Link></p>
            </div>
        </div>
    );
};

export default Register;
