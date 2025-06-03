import React from 'react'
import ceoImage from "../../../assets/images/16.webp"
import cassavaImage from "../../../assets/images/18.webp"
import biofuelImage from "../../../assets/images/19.jpg"
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'

const AboutUs = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="px-6 md:px-20 py-10 space-y-16  mt-20">

        <section className="flex flex-col md:flex-row items-center gap-10">



          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-[#1a882ad7]">From Farmer to Visionary</h2>
            <p className="text-gray-700 text-lg">
              At the heart of GME Company Limited is a powerful story — one of passion, perseverance, and purpose. Our founder and CEO began as a farmer, deeply connected to the land. With hands in the soil and eyes on the future, he discovered a lifelong passion for agriculture.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              What sparked real change was learning that cassava, a crop he had cultivated for years, could be transformed into ethanol and eventually, into biofuel. That moment birthed a vision: to position cassava not just as a food staple, but as a tool for sustainable energy.
            </p>

            <p className="text-gray-700 text-lg mt-4">Furthermore, we are dedicated to training and equipping the youth with essential agricultural techniques, empowering them to succeed in their farming ventures. </p>
          </div>
          
          <div className="bg-lime-50 p-6 rounded-xl shadow-md w-full md:w-1/3">
            <img
              src={ceoImage}
              alt="CEO of GME Company"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>


        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-[#1a882ad7]">The Cassava Value Chain Today</h2>
            <p className="text-gray-700 text-lg">
              While the dream of renewable energy is in motion, GME is fully engaged in its current mission: processing cassava into high-quality food products like gari, banku mix, konkonte flour, and fermented cassava flour.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Our operations also include farm mechanization services in Ho Municipal and youth training programs that equip aspiring farmers with modern techniques.
            </p>
          </div>

          <img
            src={cassavaImage}
            alt="Cassava Processing"
            className="w-full md:w-1/3 rounded-xl shadow-lg object-cover"
          />
        </section>


        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-[#1a882ad7]">Looking Ahead: Renewable Energy Through Cassava</h2>
            <p className="text-gray-700 text-lg">
              Though our hands are busy producing food today, our eyes remain on the horizon. Our dream is to build Ghana’s first cassava-to-biofuel processing plant — converting cassava into ethanol and sustainable biofuels to reduce emissions and dependence on fossil fuels.
            </p>
          </div>
          <img
            src={biofuelImage}
            alt="Biofuel Vision"
            className="w-full md:w-1/3 rounded-xl shadow-lg object-cover"
          />
        </section>

        <section className="text-center bg-[#1a882ad7] text-white py-10 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Join Us On This Journey</h3>
          <p className="text-lg mb-6 px-6 md:px-40">
            Whether you're a partner, investor, or a changemaker who believes in sustainable progress, we welcome you. Let's cultivate not just crops, but change — together.
          </p>
          <Link to='/contact' className="bg-white text-[#1a882ad7] px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  )
}

export default AboutUs