import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isAboutPage = location.pathname === '/aboutus';


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const bgColor = isAboutPage ? 'bg-green-700' : 'bg-white';
  const textColor = isAboutPage && isMobile ? 'text-black' : isAboutPage ? 'text-white' : 'text-black';
  const hoverColor = 'hover:underline';

  return (
    <>

      <button
        className={`fixed top-4 left-4 z-50 text-2xl md:hidden ${textColor}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>


      <div
        className={`fixed top-0 left-0 h-full w-30 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:translate-x-0 md:block ${bgColor} ${textColor} shadow-lg`}
      >
        <div className="p-4 flex gap-20 flex-col items-center space-y-6">

          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="logo" className="w-32 h-auto mt-6" />
          </Link>


          <div className="flex gap-4 flex-col space-y-4 text-lg font-medium w-full items-start px-4">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>
              `${isActive ? 'bg-green-600 text-white rounded px-2 py-1' : ''} hover:underline`
            }>
              HOME
            </NavLink>
            <NavLink to="/aboutus" onClick={() => setIsOpen(false)} className={({ isActive }) =>
              `${isActive ? 'bg-green-600 text-white rounded px-2 py-1' : ''} hover:underline`
            }>
              ABOUT
            </NavLink>
            <NavLink to="/shop" onClick={() => setIsOpen(false)} className={({ isActive }) =>
              `${isActive ? 'bg-green-600 text-white rounded px-2 py-1' : ''} hover:underline`
            }>
              SHOP
            </NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) =>
              `${isActive ? 'bg-green-600 text-white rounded px-2 py-1' : ''} hover:underline`
            }>
              SERVICES
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) =>
              `${isActive ? 'bg-green-600 text-white rounded px-2 py-1' : ''} hover:underline`
            }>
              CONTACT
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
