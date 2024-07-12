// Login.js

import React from 'react';
// import './Login.css'; // Import your CSS file for styling

const LoginComponent = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <h2 className="login-title">Sign in to your account</h2>
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="login-input"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="login-input"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-button"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
