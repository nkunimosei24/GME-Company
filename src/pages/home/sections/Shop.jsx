
import React from 'react'
import gari from '../../../assets/images/23a.webp'
import konkonte from '../../../assets/images/27a.webp'
import banku from '../../../assets/images/22a.webp'
import gari2 from '../../../assets/images/24a.webp'
import agbelema from '../../../assets/images/26a.webp'


const products = [
    {
        id: 1,
        name: 'Gme banku mix(1kg)',
        price: '₵20',
        image: banku,
        description: 'Ijebu Gari is a popular Nigerian food made from cassava'
    },
    {
        id: 2,
        name: 'Ijebu Gari(1kg)',
        price: '₵20',
        image: gari,
        description: 'Ijebu Gari is a popular Nigerian food made from cassava'
    },
    {
        id: 3,
        name: 'Ijebu Gari(1kg)',
        price: '₵20',
        image: agbelema,
        description: 'Ijebu Gari is a popular Nigerian food made from cassava'
    },
    {
        id: 5,
        name: 'Konkonte flour(1kg)',
        price: '₵20',
        image: konkonte,
        description: ' Gari is a popular Nigerian food made from cassava'
    },
    {
        id: 4,
        name: 'Gme Gari(1kg)',
        price: '₵20',
        image: gari2,
        description: ' Gari is a popular Nigerian food made from cassava'
    }
]

const Shop = () => {
  return (
    <div>
 <section className="py-12 px-4 md:px-16 md:mt-20  ">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#1a882ad7]">What do you need?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <div
                            key={product.id}
                            className="border border-gray-200 rounded-lg md-shadow overflow-hidden hover:shadow-lg "
                            
                        >
                            <div className='flex  justify-center'><img src={product.image} alt={product.name} className="w-50 h-50 object-cover hover:scale-105 transform transition duration-300 breathe" /></div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 text-center">{product.name}</h3>
                                <p className="text-gray-600 text-sm my-2 text-center">{product.description}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-[#1a882ad7]">{product.price}</span>
                                    <button className="bg-[#1a882ad7] text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default Shop