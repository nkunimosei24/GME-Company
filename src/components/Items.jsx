import React, { useState } from 'react'
import gari from '../assets/images/23.webp'
import konkonte from '../assets/images/27.webp'
import banku from '../assets/images/22.webp'
import gari2 from '../assets/images/24.webp'
import agbelema from '../assets/images/26.webp'

const products = [
  { id: 1, name: 'Gme banku mix(1kg)', price: '₵20', image: banku, description: 'Gme Banku Mix is a convenient, ready-to-cook blend made from fermented corn and cassava dough. It delivers the authentic taste of traditional Ghanaian banku with less hassle, perfect for quick and delicious home-cooked meals.' },
  { id: 2, name: 'Ijebu Gari(1kg)', price: '₵20', image: gari, description: 'Ijebu Gari is a popular Nigerian food made from cassava' },
  { id: 3, name: 'Ijebu Gari(1kg)', price: '₵20', image: agbelema, description: 'Ijebu Gari is a popular Nigerian food made from cassava' },
  { id: 5, name: 'Konkonte flour(1kg)', price: '₵20', image: konkonte, description: 'Gari is a popular Nigerian food made from cassava' },
  { id: 4, name: 'Gme Gari(1kg)', price: '₵20', image: gari2, description: 'Gari is a popular Nigerian food made from cassava' }
]

const Items = () => {
  const [activeId, setActiveId] = useState(null)

  const toggleDescription = (id) => {
    // toggle if clicked again, otherwise set new
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <section className="py-12 px-4 md:px-16 bg-lime-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1a882ad7]">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => {
          const isActive = activeId === product.id
          return (
            <div
              key={product.id}
              className="relative group bg-white shadow-md rounded-lg overflow-hidden transition duration-300 cursor-pointer"
              onClick={() => toggleDescription(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-90 object-cover transition duration-300 ${
                  isActive ? 'blur-sm brightness-75' : 'group-hover:blur-sm group-hover:brightness-75'
                }`}
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition duration-300 text-white ${
                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-md">{product.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Items
