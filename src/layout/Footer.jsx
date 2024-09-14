import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full sm:w-1/3">
            <h4 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
              <li><Link to="/showbook" className="hover:text-gray-400 transition-colors">Student list</Link></li>
              <li><Link to="/addbook" className="hover:text-gray-400 transition-colors">Registration</Link></li>
              
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">About Us</h4>
            <p className="text-gray-300">
              We are a dedicated team passionate about books. Our mission is to provide a comprehensive platform for book enthusiasts.
            </p>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-xl hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-xl hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Alumni Students App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
