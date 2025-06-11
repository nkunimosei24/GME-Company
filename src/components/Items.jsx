import React from 'react'
import fruitsImg from '../assets/images/27.webp'
import vegetablesImg from '../assets/images/22.webp'
import basketImg from '../assets/images/23.webp'
import juiceImg from '../assets/images/24.webp'
import driedImg from '../assets/images/26.webp'
import { Link } from 'react-router-dom'

const categories = [
  { id: 1, label: 'Konkonte', image: fruitsImg },
  { id: 2, label: 'Banku Mix', image: vegetablesImg },
  { id: 3, label: 'Gme Gari', image: juiceImg },
  { id: 4, label: 'Agbelema', image: driedImg },
]

const Items = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-lime-50 md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {categories.slice(0, 2).map(item => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 group"
            >
              <img src={item.image} alt={item.label} className="w-full h-85 object-cover breathe" />
              <span className="absolute bottom-0 left-0 bg-green-600 text-white text-sm px-4 py-2 rounded-tr-lg">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Center column */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold text-green-700">Our Products</h2>
          <p className="text-gray-600 text-base">Durable and easier to prepare</p>
          <Link to ='/shop'className="bg-green-600 hover:bg-transparent hover:border-1 hover:text-green-600 text-white px-6 py-2 rounded-md transition font-medium">
            Shop now
          </Link>
          <div className="mt-6 w-full rounded-xl overflow-hidden shadow-md">
            <img src={basketImg} alt="Basket" className="w-full h-85 object-cover breathe" />
            
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {categories.slice(2).map(item => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 group"
            >
              <img src={item.image} alt={item.label} className="w-full h-85 object-cover breathe" />
              <span className="absolute bottom-0 left-0 bg-green-600 text-white text-sm px-4 py-2 rounded-tr-lg">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Items
