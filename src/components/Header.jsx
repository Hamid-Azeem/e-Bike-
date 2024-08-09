import React, { useEffect, useState } from 'react';
import logo from "../assets/bikeLogo.png"
import { FaBars, FaUser, FaSignInAlt, FaSignOutAlt, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="flex justify-between items-center max-w-[1300px] mx-auto px-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className={`md:h-10 h-8 flex w-auto  ${isScrolled && 'invert'}`} />
            <div className={`md:text-2xl md:block hidden text-xl font-bold ${isScrolled ? 'text-white' : 'text-black'}`}>MotoShift</div>
          </div>
          <nav className={`hidden md:flex gap-6  ${isScrolled && 'text-white'}`}>
            <a href="#home" className={`  transition-transform duration-300 transform hover:scale-105`}>Home</a>
            <a href="#products" className="  transition-transform duration-300 transform hover:scale-105">Products</a>
            <a href="#teams" className="  transition-transform duration-300 transform hover:scale-105">About</a>
            <a href="#contact" className="  transition-transform duration-300 transform hover:scale-105">Contact</a>
          </nav>
          <div className={` ${isScrolled && 'text-white'} flex items-center space-x-2 md:space-x-4`}>
            <button className=" flex items-center space-x-1">
              <FaUser />
              <span>Login</span>
            </button>
            <button className=" flex items-center space-x-1">
              <FaSignInAlt />
              <span>Register</span>
            </button>
            <button className="md:hidden" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
        </div>

      </header>

      {/* Mobile menu */}
      <div className={`fixed z-[100] top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <button className="absolute top-4 right-4 text-gray-800" onClick={closeMenu}>
          <FaTimes />
        </button>
        <nav className="flex flex-col gap-4 mt-12">
          <a href="#home" className="text-gray-700 font-semibold hover:text-gray-900 transition-transform duration-300 transform hover:scale-105" onClick={closeMenu}>Home</a>
          <a href="#products" className="text-gray-700 font-semibold hover:text-gray-900 transition-transform duration-300 transform hover:scale-105" onClick={closeMenu}>Products</a>
          <a href="#teams" className="text-gray-700 font-semibold hover:text-gray-900 transition-transform duration-300 transform hover:scale-105" onClick={closeMenu}>About</a>
          <a href="#contact" className="text-gray-700 font-semibold hover:text-gray-900 transition-transform duration-300 transform hover:scale-105" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
