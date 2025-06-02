import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isclose, setIsClose] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'w-full shadow-md' : 'w-[90%] left-18 mx-auto mt-4 rounded-md shadow'
                }`}
        >
            <div className="px-4 flex justify-between items-center">

                <div>
                    <img src={logo} alt="logo" className="w-32 h-auto" />
                </div>


                <div className="hidden md:flex space-x-8 items-center">
                    <Link to='/' className="font-medium text-lg text-black hover:underline">HOME</Link>
                    <Link to="/aboutus" className="font-medium text-lg text-black hover:underline">ABOUT</Link>
                    <Link to="/shop" className="font-medium text-lg text-black hover:underline">SHOP</Link>
                    <Link to="/services" className="font-medium text-lg text-black hover:underline">SERVICES</Link>
                    <Link to="/contact" className="font-medium text-lg text-black hover:underline">CONTACT</Link>
                </div>


                <div className="flex items-center gap-2">
                    {isclose ? (
                        <button
                            className="px-4 py-2 rounded-md text-sm bg-[#1a882acc] text-white"
                            onClick={() => setIsClose(false)}
                        >
                            Search
                        </button>
                    ) : (
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="What do you need?"
                                className="py-2 px-4 rounded-md bg-white text-black w-60"
                                autoFocus
                            />
                            <span
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                                onClick={() => setIsClose(true)}
                            >
                                <FaSearch />
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
