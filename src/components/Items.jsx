import React, { useState } from 'react'
import gari from '../assets/images/23.webp'
import konkonte from '../assets/images/27.webp'
import banku from '../assets/images/22.webp'
import gari2 from '../assets/images/24.webp'
import agbelema from '../assets/images/26.webp'

const products = [
  { id: 1, name: 'Gme banku mix(1kg)', price: '₵20', image: banku, description: 'Gme Banku Mix is a convenient, ready-to-cook blend made from fermented corn and cassava dough. It delivers the authentic taste of traditional Ghanaian banku with less hassle, perfect for quick and delicious home-cooked meals.' },
  { id: 2, name: 'Ijebu Gari(1kg)', price: '₵20', image: gari, description: 'Ijebu Gari is a finely textured, sour-tasting variety of gari from southwestern Nigeria, known for its crisp texture and sharp tanginess due to extended fermentation. It’s especially enjoyed when soaked in cold water.Ijebu Gari is a popular Nigerian food made from cassava' },
  { id: 3, name: 'Ijebu Gari(1kg)', price: '₵20', image: agbelema, description: 'GME Agbelema Flour is a premium-quality fermented cassava flour, crafted to deliver the authentic taste of traditional Ghanaian agbelema. Perfect for making delicious flatbreads or porridge, it’s rich in fiber, easy to prepare, and ideal for nutritious, gluten-free meals.' },
  { id: 5, name: 'Konkonte flour(1kg)', price: '₵20', image: konkonte, description: 'GME Konkonte Flour offers the rich, traditional taste of Ghana’s beloved cassava dish, locally known as “Face the Wall.” Finely processed for a smooth, lump-free texture, it’s perfect with local soups and ideal for health-conscious meals—gluten-free and high in natural fiber.' },
  { id: 4, name: 'Gme Gari(1kg)', price: '₵20', image: gari2, description: 'GME Gari is a high-quality, finely processed cassava granule loved across West Africa for its crisp texture and versatility. Carefully sourced and hygienically prepared, our gari is rich in fiber, energy, and authentic taste—perfect for both quick meals and traditional dishes.' }
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
