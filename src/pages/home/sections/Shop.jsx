import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

import gari from '../../../assets/images/23.jpg';
import konkonte from '../../../assets/images/27.webp';
import banku from '../../../assets/images/22.webp';
import gari2 from '../../../assets/images/24.jpg';
import agbelema from '../../../assets/images/26.webp';
import { FaWhatsapp } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const products = [
  {
    id: 1,
    name: 'Gme Banku Mix',
    price: 20,
    image: banku,
    description: 'Ijebu Gari is a popular Nigerian food made from cassava',
  },
  {
    id: 2,
    name: 'Ijebu Gari',
    price: 20,
    image: gari,
    description: 'Ijebu Gari is a popular Nigerian food made from cassava',
  },
  {
    id: 3,
    name: 'Agbelema Flour',
    price: 20,
    image: agbelema,
    description: 'Ijebu Gari is a popular Nigerian food made from cassava',
  },
  {
    id: 5,
    name: 'Konkonte Flour',
    price: 20,
    image: konkonte,
    description: 'Gari is a popular Nigerian food made from cassava',
  },
  {
    id: 4,
    name: 'Gme Gari',
    price: 20,
    image: gari2,
    description: 'Gari is a popular Nigerian food made from cassava',
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate()

  return (
    <section className="py-12 px-4 md:px-16 md:mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1a882ad7]">What do you need?</h2>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group w-full sm:w-[45%] md:w-[30%] hover:shadow-lg rounded-sm overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-extrabold text-gray-800">{product.name}</h3>
              <p className="text-lg text-gray-600">₵{product.price}</p>
 <div className="flex gap-2 mt-2">
    <button
      onClick={() => {addToCart(product)
        navigate('/cart')}}
    
      
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Add to Cart
    </button>

    <a
      href={`https://wa.me/233246655247?text=Hello, I'm interested in ${encodeURIComponent(product.name)}. Is it available?`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white flex items-center gap-2 text-green-400 px-4 py-2 rounded hover:bg-[#1ebe5bc2] hover:text-white border "
    >
      WhatsApp <RiWhatsappFill />
    </a>
  </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
