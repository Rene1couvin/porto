import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 container mx-auto">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <p className="text-white text-xl font-bold">Portfolio</p>

          
          <button
            className="block lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
              />
            </svg>
          </button>

          {/* Navigation links */}
          <ul className={`hidden lg:flex space-x-6 text-white`}>
            <li>
              <NavLink
                to="/"
                activeClassName="font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`lg:hidden mt-4 ${
            isMenuOpen ? "block" : "hidden"
          } space-y-2`}
        >
          <li>
            <NavLink
              to="/"
              activeClassName="font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
