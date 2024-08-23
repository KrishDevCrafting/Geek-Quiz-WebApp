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
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          distinctio eos quam, voluptates error doloremque sequi a sapiente
          iusto illum.
        </h1>
      </section>
    </>
  );
};

export default FeedBack;
