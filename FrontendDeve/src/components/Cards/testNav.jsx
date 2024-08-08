import React, { useState } from 'react';

const NavbarA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-gray-800 text-red-500">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">Brand</div>
        <button
          onClick={toggleMenu}
          className="block lg:hidden px-2 py-1 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`lg:flex flex-grow items-center justify-center space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavbarA;
