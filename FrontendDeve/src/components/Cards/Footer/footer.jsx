import React from "react";
const Footer = () => {
  return (
    <>
      <div className=" text-white flex justify-around" style={{ height: "500px" }}>
        <div>
          <h1>Join for Update</h1>
          <p style={{ width: "578px" }}>
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
    </>
  );
};

export default Footer;
