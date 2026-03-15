import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <span className="text-4xl mr-2">🐾</span>
            <h1 className="text-2xl font-bold text-white shadow-lg group-hover:scale-105 transition">
              PawsAdopt
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-white font-semibold hover:text-yellow-200 transition transform hover:scale-110"
            >
              🏠 Home
            </button>
            <button
              onClick={() => navigate('/feedback')}
              className="text-white font-semibold hover:text-yellow-200 transition transform hover:scale-110"
            >
              💬 Testimonials
            </button>
            <div className="flex items-center space-x-3 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="text-2xl">👤</span>
              <span className="text-white font-semibold">{user?.name || 'User'}</span>
            </div>
            <button
              onClick={onLogout}
              className="bg-white text-red-500 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition transform hover:scale-105 shadow-lg"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-b from-orange-400 to-pink-400 pb-4 space-y-2">
            <button
              onClick={() => {
                navigate('/');
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-white font-semibold hover:bg-white hover:bg-opacity-20"
            >
              🏠 Home
            </button>
            <button
              onClick={() => {
                navigate('/feedback');
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-white font-semibold hover:bg-white hover:bg-opacity-20"
            >
              💬 Testimonials
            </button>
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 text-white font-semibold hover:bg-white hover:bg-opacity-20"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
