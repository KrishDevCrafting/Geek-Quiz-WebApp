import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className=" text-white flex justify-around parent">
        <div>
          <h1 className="join">Join for Update</h1>
          <p className="parent-box">
            Be the first to know about our latest updates, exclusive offers, and
            more
          </p>
        </div>
        <div>
          <input
            className="m-4"
            style={{ height: "44px", width: "320px" }}
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <button
            className="bg-blue-500 text-white"
            style={{ width: "110px", height: "44px" }}>
            Subcribe
          </button>
        </div>
      </div>

      <div className="main flex justify-around text-white">
        <div>
          <ul>
            <li className="list-heading">Product & Service</li>
            <li>Products</li>
            <li>Services</li>
            <li>Appliances</li>
            <li>Lifestyle</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="list-heading">Suport</li>
            <li> contact</li>
            <li>Email Support</li>
            <li>Phone Support</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="list-heading">Account</li>
            <li>My Account</li>
            <li>score</li>
            <li>Rewards</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
