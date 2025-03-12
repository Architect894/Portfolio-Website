"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import styles from '../styles/global.css'; // Import global CSS or your CSS module

const ClientLogin = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        password: '', // Add password field for login and registration
    });

    useEffect(() => {
        // Apply the dark theme class to the <body> when the component is mounted
        document.body.classList.add('dark-theme');

        // Cleanup: Remove the class when the component unmounts
        return () => {
            document.body.classList.remove('dark-theme');
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'; // Adjust based on login or register
        const payload = isLogin
            ? { email: formData.email, password: formData.password }
            : formData;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(`Error: ${data.error}`);
            } else {
                alert(data.message);
                if (isLogin && data.token) {
                    localStorage.setItem('token', data.token); // Save JWT token
                    window.location.href = '/dashboard'; // Redirect to dashboard after login
                } else if (!isLogin) {
                    alert('Registration successful! You can now log in.');
                    setIsLogin(true); // Switch to login form after registration
                }
            }
        } catch (error) {
            console.error('Error during submission:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="residential-portal" className="container my-5">
            <div className="residential-container">
                <h2 className="text-center mb-4">
                    {isLogin ? 'Login' : 'Create Account'}
                </h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="row">
                        {!isLogin && (
                            <>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </>
                        )}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        {/* Address Section */}
                        {!isLogin && (
                            <>
                                <div className="col-12 mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="123 Main St"
                                        required
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="city" className="form-label">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state" className="form-label">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="zipCode" className="form-label">
                                        Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mt-3"
                        style={{ padding: '10px', fontSize: '16px' }}
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="btn btn-link"
                        style={{ textDecoration: 'none', fontSize: '14px' }}
                    >
                        {isLogin
                            ? "Don't have an account? Register here"
                            : 'Already have an account? Login here'}
                    </button>
                </div>
                <div className="text-center mt-4">
                    <Link
                        href="/"
                        className="btn btn-secondary"
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                    >
                        Back to Home Page
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClientLogin;
