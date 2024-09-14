import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/p1.jpg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-blue-500 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-16 w-16 md:h-20 md:w-20" alt="Logo" />
        </div>

        {/* Menu Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="text-blue-500 md:hidden block focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4 md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent border-t md:border-t-0 border-gray-200 md:border-none`}
        >
          <Link
            to='/'
            className="block px-4 py-2 rounded-lg border-2 border-black hover:border-b-2 hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to='/Programs'
            className="block px-4 py-2 rounded-lg border-2 border-black hover:border-b-2 hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Programs
          </Link>
          <Link
            to='/Showbook'
            className="block px-4 py-2 rounded-lg border-2 border-black hover:border-b-2 hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Student List
          </Link>
          <Link
            to='/AddBook'
            className="block px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Registration
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
