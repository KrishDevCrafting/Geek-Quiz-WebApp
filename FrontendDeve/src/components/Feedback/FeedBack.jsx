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
        <div className="flex justify-center items-center  container-form">
          <form action="">
            <h1 className="text-4xl text-center">Feedback Form</h1>
            <div className="container-box-1 px-2">
              <div className="py-5">
                <br />
                <label className="ml-7 label-user">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input-tag input"
                  name="text"
                />

                <br />
              </div>
              <div>
                <label className="ml-7">Email Address</label>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-tag"></input>
                <br />
              </div>

              <div>
                <h1>Share your experience in scaling</h1>
              </div>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                cols="50"
                placeholder="Enter your comments here..."></textarea>
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
