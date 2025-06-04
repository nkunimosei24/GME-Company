// src/components/Testimonials.jsx
import React from 'react';
import testi1 from "../assets/images/35.webp"
import testi2 from "../assets/images/37.webp"
import testi3 from "../assets/images/36.webp"

const testimonials = [
  {
    name: "Akosua Boateng",
    role: "Customer",
    message: "The Gari I ordered was fresh and neatly packaged. I love the quality and taste — definitely buying again!",
    image: testi1
  },
  {
    name: "Yaw Mensah",
    role: "Retailer",
    message: "Their cassava flour is top-notch. Fast delivery and excellent customer service!",
    image: testi2
  },
  {
    name: "Ama Serwaa",
    role: "Chef",
    message: "I use their products in my kitchen daily. The consistency and quality are unmatched in Ghana!",
    image: testi3
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 md:ml-20 ">
      <h2 className="text-3xl font-bold text-center text-[#1a882ad7] mb-10">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </div>
            <p className="text-gray-700 text-sm">“{testimonial.message}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
