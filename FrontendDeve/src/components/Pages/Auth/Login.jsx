import React from "react";
import "../../../components/style.css"; // Import your CSS file for styling
import "../../../components/Pages/Auth/Login.css"
const LoginComponent = () => {
  return (
    <div className="login-container flex items-center justify-center">
      <div className="login-content">
        <h2 className="login-title text-purple-500 text-5xl">
          Sign in to your account
        </h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email-address" className="text-lg">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block"
              placeholder="Email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
