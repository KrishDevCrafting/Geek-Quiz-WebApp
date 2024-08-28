import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isOpen && (
        <div>
          {/* Dropdown content here */}
          <Link to="/computer-science">
            <h1>Computer-science</h1>
          </Link>
          <p>Dropdown Item 2</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
