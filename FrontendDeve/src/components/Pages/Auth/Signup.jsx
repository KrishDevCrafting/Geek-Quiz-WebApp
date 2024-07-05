import React from "react";
import { Link } from "react-router-dom";
import "../../../components/style.css";
import "./SignupStyle.css";
import GoogleImg from "../../../assets/googleLogo.png";
import githubImg from "../../../assets/github.png";
const Signup = () => {
  return (
    <>
      <div className="container-box flex items-center justify-center border-rose-500 ">
        <div className="px-8">
          <form action="">
            <h1 className="text-blue-800 text-3xl">
              Join & Connect the Fastest Growing Online Community
            </h1>

            <div className="text-cente">
              <span className="mx-8">
                <button
                  type="submit"
                  className="bg-slate-100 p-2 rounded-2xl px-4">
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
                  type="submit"
                  className="bg-slate-100 p-2 rounded-2xl px-4">
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
              <label htmlFor="name" className="text-sm">
                username:
              </label>
              <input
                className="block w-96 py-4 border-0 focus:outline-none"
                name="text"
                placeholder="Enter email or username"
                type="text"
              />
            </div>

            <div className="label-text-color">
              <label htmlFor="Email" className="text-sm">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="block w-96 py-4 border-0 focus:outline-none"
              />
            </div>

            <div className="label-text-color">
              <label htmlFor="Pasword" className="text-sm">
                Password:
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="block w-96  py-4 border-0 focus:outline-none"
              />
            </div>
            <div>
              <button id="login-btn" type="submit">
                Submit-here
              </button>
            </div>
          </form>
        </div>
        <div className="rock">
          <Link to="/login">
            <button className="text-blue-400"> Already have account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
