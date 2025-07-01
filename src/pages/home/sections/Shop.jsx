import React, { useState, useEffect } from 'react';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import gari from '../../../assets/images/23.jpg';
import konkonte from '../../../assets/images/27.webp';
import banku from '../../../assets/images/22.webp';
import gari2 from '../../../assets/images/24.jpg';
import agbelema from '../../../assets/images/26.webp';
import { MdClose } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const products = [
  {
    id: 1,
    name: 'Gme Banku Mix',
    price: 20,
    image: banku,
   tooltipContent: [
      "✅ Ready-to-cook blend of corn and cassava dough",
      "🥘 Enjoy authentic Ghanaian banku with less stress",
      "⚡ Quick to prepare – saves time without losing taste",
      "🧂 Fermented naturally for that traditional sour flavor",
      "🇬🇭 Perfect with okro soup, groundnut soup"
    ]
  },
  {
    id: 2,
    name: 'Ijebu Gari',
    price: 20,
    image: gari,
         tooltipContent: [
      "✅ 100% finely fermented cassava",
      "🌾 Gluten-free and rich in carbohydrates",
      "🥄 Instant-ready — just add water, sugar, and milk if desired",
      "🇳🇬 Authentic Nigerian flavor loved across West Africa"
    ]
  },
  {
    id: 3,
    name: 'Agbelema Flour',
    price: 20,
    image: agbelema,
    tooltipContent: [
      "✅ Premium fermented cassava flour",
      "🌿 Naturally rich in fiber and gluten-free",
      "🍽️ Perfect for traditional dishes like porridge or flatbread",
      "⏱️ Quick and easy to prepare at home",
      "🇬🇭 Brings you the authentic taste of Ghanaian agbelema"
    ]
  },
  {
    id: 5,
    name: 'Konkonte Flour',
    price: 20,
    image: konkonte,
     tooltipContent: [
      "✅ 100% premium sun-dried cassava",
      "🍲 Pairs perfectly with Ghanaian soups",
      "🌾 Gluten-free, high in fiber",
      "🥣 Easy to cook, smooth, and lump-free",
      "👪 Ideal for home use or food service"
    ]
  },
  {
    id: 4,
    name: 'Gme Gari',
    price: 20,
    image: gari2,
    tooltipContent: [
      "✅ Stone-free and hygienically packaged",
      "🌾 Made from 100% premium cassava",
      "🥣 Ideal for soakings, eba, and more",
      "💪 Energy-rich and filling"
    ]
  },
];

const TooltipContent = ({ content }) => {
  return (
    <ul className="space-y-2">
      {content.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2">{item.split(' ')[0]}</span>
          <span>{item.split(' ').slice(1).join(' ')}</span>
        </li>
      ))}
    </ul>
  );
};

const Shop = () => {
   const { addToCart } = useCart();
  const navigate = useNavigate();
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleViewDetails = (productId, e) => {
    e.stopPropagation();
    setActiveTooltip(activeTooltip === productId ? null : productId);
  };

  const handleMouseEnter = (productId) => {
    if (!isMobile) {
      setActiveTooltip(productId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveTooltip(null);
    }
  };

  return (
    <section className="py-12 px-4 md:px-16 md:mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1a882ad7]">What do you need?</h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-70 hover:shadow-lg rounded-sm overflow-hidden transition-transform transform hover:scale-105 duration-300 relative group"
          >
            <div className="w-full relative">
              <div className={`relative ${activeTooltip === product.id ? 'backdrop-blur-md' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-80 object-cover ${activeTooltip === product.id ? 'brightness-70' : ''}`}
                />
                
                {(activeTooltip === product.id) && (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className={`bg-white ${isMobile ? 'bg-opacity-95' : 'bg-opacity-90'} p-4 rounded-lg max-w-xs border border-gray-200 shadow-lg`}>
                      <TooltipContent content={product.tooltipContent} />
                      {isMobile && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTooltip(null);
                          }}
                          className="absolute top-2 right-2 text-red-500 hover:text-gray-700"
                        >
                          <IoIosCloseCircleOutline size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              <div className="flex gap-3 items-center">
                <h3 className="text-xl font-extrabold text-gray-800">{product.name}</h3>
                <p className="text-lg text-gray-600">₵{product.price}</p>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    addToCart(product);
                    navigate('/cart');
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>

                <button
                  onClick={(e) => isMobile && handleViewDetails(product.id, e)}
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                  className="bg-white flex items-center gap-2 text-green-500 px-4 py-2 rounded hover:bg-green-300 hover:text-white border cursor-pointer group"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;