import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../components/style.css";
import "./SignupStyle.css";
import GoogleImg from "../../../assets/googleLogo.png";
import githubImg from "../../../assets/github.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [name, setName] = useState("")
  const userFetch = "http://localhost:7000/user/register";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNamechange = (e)=>{
setName(e.target.value)    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
      name: name
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
      <div className="container-box flex items-center justify-center border-red-500">
        <div className="px-8">
          <form onSubmit={handleSubmit}>
            <h1 className="text-blue-800 text-3xl">
              Join & Connect the Fastest Growing Online Community
            </h1>

            <div className="text-center">
              <span className="mx-8">
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
              <span>
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

            <div className="label-text-color">
              <label htmlFor="username" className="text-sm">
                Username:
              </label>
              <input
              onChange={handleNamechange}
                className="block w-96 py-4 border-0 focus:outline-none"
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
                className="block w-96 py-4 border-0 focus:outline-none"
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
                className="block w-96 py-4 border-0 focus:outline-none"
              />
            </div>
            <div>
              <button id="login-btn" type="submit">
                Submit-here
              </button>
            </div>
          </form>
        </div>
        {/* <div className="rock">
          <Link to="/login">
            <button className="text-blue-400"> Already have an account?</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Signup;

// Krish i kow you can do it just believe in you're self or have a faith on it.