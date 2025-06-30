import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const path = location.pathname;
  const isMobile = window.innerWidth < 768;
  const isAboutPage = path === '/aboutus';
  const isShopPage = path === '/shop';
  const isCartPage = path === '/cart'
  const isFullWidth = isMobile || isCartPage;

  useEffect(() => {
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

  let bgColor = 'bg-white';
  let textColor = 'text-black';
  let hoverColor = 'hover:underline';

  if (isAboutPage || isShopPage) {
    bgColor = 'bg-green-600';
    textColor = 'text-white';
    hoverColor = 'hover:underline';
  }

  const navClasses = `fixed top-0 left-0 z-50 transition-all duration-300 ${bgColor} ${scrolled && !isFullWidth
      ? 'w-full shadow-md'
      : isFullWidth
        ? 'w-full shadow'
        : 'w-[90%] left-18 mx-auto mt-4 rounded-md shadow'
    }`;

  return (
    <nav className={navClasses}>
      <div className="px-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-8 items-center ${textColor}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-white text-green-600' : textColor
              } ${hoverColor}`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-white text-green-600' : textColor
              } ${hoverColor}`
            }
          >
            SHOP
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            CONTACT
          </NavLink>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className={`text-2xl ${textColor}`} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          </Link>

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
        <div
          className={`md:hidden px-4 pb-4 space-y-4 flex flex-col ${bgColor} ${textColor}`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/aboutus"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-white text-green-600' : textColor
              } ${hoverColor}`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            SHOP
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `font-medium text-lg px-2 py-1 rounded ${isActive ? 'bg-green-600 text-white' : textColor
              } ${hoverColor}`
            }
          >
            CONTACT
          </NavLink>

          {/* Cart in mobile menu */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={`font-medium text-lg px-2 py-1 rounded flex items-center gap-2 ${textColor} ${hoverColor}`}
          >
            <FiShoppingCart />
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
