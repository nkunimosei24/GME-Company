import React from "react";
import { FaInstagramSquare, FaFacebook, FaTiktok } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import pic from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-lime-50 text-black pt-10 pb-6 border-t border-green-200" id="contact">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <img src={pic} alt="GME Logo" className="w-28 h-20 object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            GME Company Limited grows and processes crops like maize, cassava, and vegetables into quality products.
            We offer farm mechanization services and train youth in modern agriculture to boost productivity and drive growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:ml-24">
          <h3 className="font-semibold text-lg mb-3 text-green-700">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/" className="hover:text-green-700 transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-green-700 transition">Products</Link></li>
            <li><Link to="/aboutUs" className="hover:text-green-700 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-green-700 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-700 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-green-700">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>Barracks Rd, Ho, Ghana</li>
            <a href="tel:+233256484404">+233 25 648 4404</a>
          </ul>

          <h3 className="font-semibold text-lg mt-5 mb-2 text-green-700">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.instagram.com/gmecompanyltd?igsh=MWY1amZ3MTc2MDhycQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-2xl text-gray-600 hover:text-pink-500 transition duration-200">
              <FaInstagramSquare />
            </a>
            <a href="https://www.facebook.com/share/1L5jpdmrEw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="text-2xl text-gray-600 hover:text-blue-600 transition duration-200">
              <FaFacebook />
            </a>
            <a href="mailto:gmeeninfo@gmail.com" aria-label="Email"
              className="text-2xl text-gray-600 hover:text-blue-300 transition duration-200">
              <TfiEmail />
            </a>
            <a href="https://www.tiktok.com/@gmecompanyltd?_t=ZM-8wU0KAMfPWy&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="text-2xl text-gray-600 hover:text-black transition duration-200">
              <FaTiktok />
            </a>
             <a
                              href={`https://wa.me/233256484404?`}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Whatsapp"
                              className="text-2xl text-gray-600 hover:text-green-500 transition duration-200"
                            >
                              <RiWhatsappFill />
                            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-600 px-4 border-t-1 border-gray-300">
        <p className="mb-1 mt-2">Committed to sustainability and youth empowerment</p>
        <p>&copy; 2025 <span className="font-semibold text-green-700">GME Company Limited</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
