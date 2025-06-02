import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const path = location.pathname;
  const isMobile = window.innerWidth < 768;
  const isAboutPage = path === '/aboutus';

  useEffect(() => {
    // Disable scroll effect on mobile and About page
    if (isMobile) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isAboutPage]);

  // Dynamic styles
  let bgColor = 'bg-white';
  let textColor = 'text-black';
  let hoverColor = 'hover:underline';

  if (isAboutPage) {
    bgColor = 'bg-green-700';
    textColor = 'text-white';
    hoverColor = 'hover:text-underline';
  }

  const isFullWidth = isMobile ;

const navClasses = `fixed top-0 left-0 z-50 transition-all duration-300 ${bgColor} ${
  scrolled && !isFullWidth
    ? 'w-full shadow-md'
    : isFullWidth
    ? 'w-full shadow'
    : 'w-[90%] left-18 mx-auto mt-4 rounded-md shadow'
}`;


  return (
    <nav className={navClasses}>
      <div className="px-4 py-1 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-8 items-center mr-4 ${textColor}`}>
          <Link to="/" className={`font-medium text-lg ${hoverColor}`}>HOME</Link>
          <Link to="/aboutus" className={`font-medium text-lg ${hoverColor}`}>ABOUT</Link>
          <Link to="/shop" className={`font-medium text-lg ${hoverColor}`}>SHOP</Link>
          <Link to="/services" className={`font-medium text-lg ${hoverColor}`}>SERVICES</Link>
          <Link to="/contact" className={`font-medium text-lg ${hoverColor}`}>CONTACT</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-4 pb-4 space-y-4 flex flex-col ${bgColor} ${textColor}`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className={`font-medium text-lg ${hoverColor}`}>HOME</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)} className={`font-medium text-lg ${hoverColor}`}>ABOUT</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className={`font-medium text-lg ${hoverColor}`}>SHOP</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className={`font-medium text-lg ${hoverColor}`}>SERVICES</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`font-medium text-lg ${hoverColor}`}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
