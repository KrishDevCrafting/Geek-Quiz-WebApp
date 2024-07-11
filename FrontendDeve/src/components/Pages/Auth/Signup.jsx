import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../components/style.css";
import "./SignupStyle.css";
import GoogleImg from "../../../assets/googleLogo.png";
import githubImg from "../../../assets/github.png";
import img from "../../../assets/faridunsplash.jpg";
const Signup = () => {
  const [toggle, setToogle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const userFetch = "http://localhost:7000/user/register";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNamechange = (e) => {
    setName(e.target.value);
  };

  const handleToggle = () => {
    setToogle(!toggle);
  };

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
        <div className="">
          <div className="toggle-position">
            <div class="toggle-switch">
              <label class="switch-label">
                <input
                  type="checkbox"
                  class="checkbox"
                  onClick={handleToggle}
                />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="container-box flex items-center justify-end">
          <div>
            <img className="h-screen w-screen" src={img} alt="img" />
          </div>

          <div className="px-8">
            <form onSubmit={handleSubmit}>
              <h1
                className="text-3xl m-10 sm:text-red-500 lg:text-blue-600 md:text-yellow-500"
                id="heading"
              >
                Join & Connect the Fastest Growing Online Community
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
              <div className="ml-48">
                <div className="label-text-color my-8">
                  <label htmlFor="username" className="text-sm">
                    Username:
                  </label>
                  <input
                    onChange={handleNamechange}
                    className="block w-96 py-1 border-0 focus:outline-none my-2"
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
                    required
                    onChange={handleEmailChange}
                    className="block w-96 py-1 border-0 focus:outline-none my-2"
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
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className="block w-96 py-1 border-0 focus:outline-none my-2"
                  />
                </div>
                <div>
                  <button id="login-btn" type="submit" title="button">
                    Submit-here
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* <div className="rock">
          <Link to="/login">
            <button className="text-blue-400"> Already have an account?</button>
          </Link>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Signup;

// Krish i kow you can do it just believe in you're self or have a faith on it.
