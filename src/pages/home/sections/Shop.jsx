import React from 'react'
import gari from '../../../assets/images/23.jpg'
import konkonte from '../../../assets/images/27.webp'
import banku from '../../../assets/images/22.webp'
import gari2 from '../../../assets/images/24.jpg'
import agbelema from '../../../assets/images/26.webp'

const products = [
  {
    id: 1,
    name: 'Gme Banku Mix',
    price: '₵20',
    image: banku,
    description: 'Ijebu Gari is a popular Nigerian food made from cassava'
  },
  {
    id: 2,
    name: 'Ijebu Gari',
    price: '₵20',
    image: gari,
    description: 'Ijebu Gari is a popular Nigerian food made from cassava'
  },
  {
    id: 3,
    name: 'Agbelema Flour',
    price: '₵20',
    image: agbelema,
    description: 'Ijebu Gari is a popular Nigerian food made from cassava'
  },
  {
    id: 5,
    name: 'Konkonte Flour',
    price: '₵20',
    image: konkonte,
    description: 'Gari is a popular Nigerian food made from cassava'
  },
  {
    id: 4,
    name: 'Gme Gari',
    price: '₵20',
    image: gari2,
    description: 'Gari is a popular Nigerian food made from cassava'
  }
]

const Shop = () => {
  return (
    <div>
      <section className="py-12 px-4 md:px-16 md:mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1a882ad7]">What do you need?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="group w-full sm:w-[45%] md:w-[30%] hover:shadow-lg rounded-sm overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="p-4 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-extrabold text-gray-800">{product.name}</h3>
                <div className="text-lg text-gray-600">{product.price}</div>
                <p className="text-green-600  font-medium mt-2 md:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-300 cursor-pointer">
                  + ADD TO CART
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Shop
