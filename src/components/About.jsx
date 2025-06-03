import React from 'react'
import storyImage from "../assets/images/17.webp"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="w-[90%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
      

      <div className="flex justify-center">
        <img src={storyImage} alt="Our Story" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg" />
      </div>

      <div>
        <p className="text-sm text-[#FFB900] font-medium uppercase mb-2">Our Story</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Rooted in Farming, Growing Through Innovation
        </h2>

        <p className="text-gray-700 mb-4">
          At GME Company Limited, our roots run deep in the soil of Ghana. What began as a passion for farming has grown into a full-scale operation dedicated to cultivating and processing cassava into essential food products.
        </p>

        <p className="text-gray-700 mb-4">
          Today, we produce high-quality gari, banku mix, konkonte flour, and fermented cassava flour — nourishing homes across the country. Our commitment to quality and community drives everything we do, from planting to packaging.
        </p>

        <p className="text-gray-700 mb-4">
          We also provide farm mechanization services that support local farmers with land preparation, boosting productivity and encouraging efficient agricultural practices.
        </p>

        <p className="text-gray-700 mb-6">
          But this is just the beginning.
        </p>

        <Link to="/aboutus" className="bg-[#FFB900] text-white font-semibold px-6 py-3 rounded hover:bg-amber-500 transition-all">
          Learn More
        </Link>
      </div>
    </section>
  )
}

export default About