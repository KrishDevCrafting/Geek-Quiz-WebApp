import React from "react";
import { Link } from "react-router-dom";
import "../../../components/style.css"
const Signup = () => {
  return (
    <>
      <div className="container-box">
        <div className="box">
          <form action="/">
            <h1 className="text-blue-800">Sign-up</h1>
            <div>
              <label htmlFor="name">Name:</label>
              Name: <input type="text" placeholder="UserName" />
            </div>

            <div>
              <label htmlFor="Email"> Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="Pasword">Password:</label>{" "}
              <input type="password" name="" id="" placeholder="Password" />
            </div>
            <div>
              <button
                style={{ backgroundColor: "red", color: "black" }}
                type="submit"
              >
                Submit-here
              </button>
            </div>
          </form>
        </div>
        <div className="rock">
          <Link to="/login">
            <button> Already have account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
