import React from "react";
import { Link } from "react-router-dom";
import "../../../components/style.css";
import "./SignupStyle.css";
const Signup = () => {
  return (
    <>
      <div className="container-box flex items-center justify-center">
        <div className="px-8">
          <form action="">
            <h1 className="text-blue-800 text-6xl">Sign-up</h1>
            <div>
              <label htmlFor="name" className="text-sm">
                Name:
              </label>
              <input
                className="block"
                name="text"
                placeholder="Enter email or username"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="Email" className="text-sm">
               
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="block"
              />
            </div>

            <div>
              <label htmlFor="Pasword" className="text-sm">
                Password:
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="block"
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
