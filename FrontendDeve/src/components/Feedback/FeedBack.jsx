import React, { useEffect, useState } from "react";
import "./DropDown.css";

const FeedBack = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-brand">Feed-Back</h1>
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li onClick={toggleDropdown} className="dropdown">
            Services
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>Web Development</li>
                <li>App Development</li>
                <li>SEO Optimization</li>
              </ul>
            )}
          </li>
          <li>Contact</li>
        </ul>
      </nav>

      <section>
        <div className="flex justify-center items-center  container-form main-container">
          <form action="">
            <h1 className="text-4xl text-center mb-4 text-white">
              Feedback Form
            </h1>
            <div className="container-box-1 px-2">
              <div className="py-5">
                <br />
                <label className="ml-7 label-user font-bold">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input-tag input"
                  name="text"
                />

                <br />
              </div>
              <div>
                <label className="ml-7 font-bold">Email Address</label>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-tag"></input>
                <br />
              </div>

              <div className="flex justify-center mt-8">
                <h1 className="text-xl">Share your experience in scaling</h1>
              </div>
              {/* Star features: */}
              <div className="flex mb-4">
                <label className="container">
                  <input type="checkbox" className="container" />

                  <svg
                    height="24px"
                    width="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </g>
                  </svg>
                </label>

                <label className="container">
                  <input type="checkbox" id="input" />
                  <svg
                    height="24px"
                    width="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </g>
                  </svg>
                </label>

                <label className="container">
                  <input type="checkbox" className="container" />

                  <svg
                    height="24px"
                    width="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </g>
                  </svg>
                </label>
                <label className="container">
                  <input type="checkbox" className="container" />

                  <svg
                    height="24px"
                    width="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </g>
                  </svg>
                </label>
                <label className="container">
                  <input type="checkbox" className="container" />

                  <svg
                    height="24px"
                    width="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                    </g>
                  </svg>
                </label>
              </div>

              {/* End star Features */}

              <textarea
                id="comments"
                name="comments"
                rows="4"
                cols="50"
                placeholder="Enter your comments here..."></textarea>
              <div className="parent-btn">
                <button
                  id="feedback-btn"
                  type="submit"
                  className="bg-blue-500 px-14 py-3 text-white hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* <a
          className="text-red-500 text-4xl"
          href="https://www.figma.com/design/iuAC5dXPsygVx7S4cb3i3f/Feedback-Forms---Free-to-use-(Community)?node-id=6-15&t=t5dQg8YFuh7nBI9e-0"
          target="_blank">
          Link
        </a> */}
      </section>
    </>
  );
};

export default FeedBack;
