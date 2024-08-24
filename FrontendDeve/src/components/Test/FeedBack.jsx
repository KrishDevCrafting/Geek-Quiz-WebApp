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
        <h1>Feedback Form</h1>
        <div>
          <form action="">
            <label>Name</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="email"></input>

            <h1>Share your exprience in scaling</h1>
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
