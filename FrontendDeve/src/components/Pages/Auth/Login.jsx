import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../components/style.css"; // Import your CSS file for styling
import "../../../components/Pages/Auth/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
const LoginComponent = () => {
  // const [data, setdata] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const dataFetch = "https://geek-quiz.onrender.com/user/login";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(dataFetch, { email, password })
      .then((result) => {
        // console.log(result);
        if (result.status === 200) {
          toast.success("Login successfully!");
          setTimeout(() => {
            Navigate("/");
          }, 2000);
        } else {
          console.log("not success");
          Navigate("/login");
          alert("You are not registered to this service");
        }
      })
      .catch((err) => {
        console.error(
          "Login failed:",
          err.response ? err.response.data : err.message
        );
        toast.error("Login failed, please check your credentials.");
      });
  };

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div>
        {/* s */}
      </div>
      <div className="login-container flex items-center justify-center">
        <div className="login-content">
          <h2 className="login-title text-purple-500 text-5xl">Welcome back</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="text-white">Login</h3>
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
                onChange={handleEmail}
                className="block py-2"
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
                onChange={handlePassword}
                className="block py-2"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginComponent;
