import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {currentUser} = useSelector(state => state.user)

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900 text-white z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo + Website Name */}
        <div className="flex items-center gap-2">
          <img src="/bird.png" alt="logo" className="h-10 w-10" />
          <h1 className="text-amber-300 text-xl sm:text-2xl font-bold">NestQuest</h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/Property" className="hover:text-amber-300 transition">Post Property</Link>
          <Link to="/SignUp" className="hover:text-amber-300 transition">Sign Up</Link>
          <Link
            to="/LogIn"
            className="bg-yellow-300 text-black px-3 py-1 rounded-md hover:bg-slate-300 transition"
          >
            Log In
          </Link>
          <Link
            to="/Profile"
            className="bg-yellow-300 text-black px-3 py-1 rounded-md hover:bg-slate-300 transition"
          >
            Profile
          </Link>
        </nav>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons text-white text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-800 h-45 rounded w- text-white">
          <Link to="/" className="block hover:bg-gray-700 rounded px-2 py-1">Home</Link>
          <Link to="/Property" className="block hover:bg-gray-700 rounded px-2 py-1">Post Property</Link>
          <Link to="/SignUp" className="block hover:bg-gray-700 rounded px-2 py-1">Sign Up</Link>
          <Link to="/LogIn" className="block hover:bg-gray-700 rounded px-2 py-1">Log In</Link>
          <Link to="/Profile" className="block hover:bg-gray-700 rounded px-2 py-1">Profile</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
