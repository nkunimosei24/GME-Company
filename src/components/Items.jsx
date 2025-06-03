import React from 'react'
import gari from '../assets/images/23.webp'
import konkonte from '../assets/images/27.webp'
import banku from '../assets/images/22.webp'
import gari2 from '../assets/images/24.webp'
import agbelema from '../assets/images/26.webp'


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

const Items = () => {
    return (
        <div>
            <section className="py-12 px-4 md:px-16 bg-lime-50 ">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#1a882ad7]">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition duration-300"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-100 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 text-sm my-2">{product.description}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-[#1a882ad7]">{product.price}</span>
                                    <button className="bg-[#1a882ad7] text-white px-4 py-2 rounded hover:bg-teal-800 text-sm">
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

export default Items