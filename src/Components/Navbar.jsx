import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-6 right-6 z-[100]">
      {/* Hamburger */}
      <button
        className="text-3xl text-rose-500 focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-50 transition duration-300">
          {/* Close button in overlay */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-rose-500 text-3xl"
          >
            <FiX />
          </button>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-60}
              className="text-3xl text-rose-500 font-semibold my-4 cursor-pointer relative group"
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              {link.label}
              {/* underline effect */}
              <span className="block h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1" />
            </Link>
          ))}

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1koDTGIijwBNW5IDT69QsNXbVoZAqqr7n/view?usp=drive_link"  
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="text-3xl text-rose-500 font-semibold my-4 cursor-pointer relative group"
          >
            Resume
            <span className="block h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
