import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector(state => state.user);

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900 text-white z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/bird.png" alt="logo" className="h-10 w-10" />
          <h1 className="text-amber-300 text-xl sm:text-2xl font-bold">NestQuest</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/Property" className="hover:text-amber-300 transition">Post Property</Link>
          {
            currentUser ? (
              <Link to="/Profile">
                <div className="rounded-full h-10 w-10 border-1 bg-amber-300">Profile</div>
              </Link>
            ) : (
              <Link
                to="/LogIn"
                className="bg-yellow-300 text-black px-3 py-1 rounded-md hover:bg-slate-300 transition"
              >
                Log In
              </Link>
            )
          }
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons text-white text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-800 rounded px-4 py-2 space-y-2 text-white">
          <Link to="/" className="block hover:bg-gray-700 rounded px-2 py-1">Home</Link>
          <Link to="/Property" className="block hover:bg-gray-700 rounded px-2 py-1">Post Property</Link>
          {
            currentUser ? (
              <Link to="/Profile" className="flex items-center gap-2 hover:bg-gray-700 rounded px-2 py-1">
                <img src={currentUser.avatar} alt="avatar" className="h-6 w-6 rounded-full" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link to="/LogIn" className="block hover:bg-gray-700 rounded px-2 py-1">Log In</Link>
            )
          }
        </nav>
      )}
    </header>
  );
};

export default Header;
