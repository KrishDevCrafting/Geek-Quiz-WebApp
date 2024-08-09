import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../components/style.css";
import "./SignupStyle.css";

import GoogleImg from "../../../assets/googleLogo.png";
import githubImg from "../../../assets/github.png";
import img from "../../../assets/faridunsplash.jpg";

const Signup = () => {
  // Initialized the navigate into use navigate..!
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const userFetch = "http://localhost:7000/user/register";

  useEffect(() => {
    console.log("Signup component mounted or updated");

    return () => {
      console.log("Signup component will unmount");
    };
  }, []);
  // toggle fucntion..!
  const handleToggle = () => {
    setToggle(!toggle);
  };
  //basic login to set name,email,password to database..!
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      name: name,
    };

    try {
      const response = await fetch(userFetch, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success", data);
        navigate("/");
      } else {
        console.error("Error", response.statusText);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className={toggle ? "light-mode" : "dark-mode"}>
        <div className="toggle">
          <div className="toggle-position">
            <div className="toggle-switch">
              <label className="switch-label">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="container-box flex items-center justify-center">
          <div className="px-8" id="sign-page">
            <form onSubmit={handleSubmit}>
              <h1
                className="text-3xl m-10 sm:text-red-500 lg:text-blue-600 md:text-yellow-500"
                id="heading"
              >
                Welcome Mother' Fucker!
              </h1>
              <h1 className="heading-signUp">Sign Up</h1>
              <div className="text-center">
                <span className="mx-8 display">
                  <button
                    type="button"
                    className="bg-slate-100 p-2 rounded-2xl px-4"
                  >
                    <img
                      src={GoogleImg}
                      alt="img"
                      width="26px"
                      height="36px"
                      style={{ display: "inline", marginRight: "20px" }}
                    />
                    Sign up with Google
                  </button>
                </span>
                <span className="display">
                  <button
                    type="button"
                    className="bg-slate-100 p-2 rounded-2xl px-4"
                  >
                    <img
                      src={githubImg}
                      alt="img"
                      width="26px"
                      height="36px"
                      style={{ display: "inline", marginRight: "20px" }}
                    />
                    Sign up with Github
                  </button>
                </span>
              </div>
              <div className="ml-20  form-responsive">
                <div className="label-text-color my-8 ">
                  <label htmlFor="username" className="text-sm">
                    Username:
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="block w-96 py-1 border-0 focus:outline-none my-2 userInput"
                    name="username"
                    placeholder="Enter email or username"
                    type="text"
                  />
                </div>

                <div className="label-text-color">
                  <label htmlFor="email" className="text-sm">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-96 py-1 border-0 focus:outline-none my-2 userInput"
                  />
                </div>

                <div className="label-text-color">
                  <label htmlFor="password" className="text-sm">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="block w-96 py-1 border-0 focus:outline-none my-2 userInput"
                  />
                </div>
                <div className="my-2">
                  <button
                    id={toggle ? "login-btn" : "loginDark-btn"}
                    type="submit"
                    title="button"
                  >
                    Submit-here
                  </button>
                </div>

                <div className="rock">
                  <Link to="/login">
                    <button className="text-blue-400">
                      Already have an account?
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

// Krish i know you can do it just believe in you're self or have a faith on it.
// for tersting
