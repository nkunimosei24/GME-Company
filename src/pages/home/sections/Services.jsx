import React from 'react';
import video1 from '../../../assets/images/vid 1.mp4';
import video2 from '../../../assets/images/vid 7.mp4';
import video3 from '../../../assets/images/vid 5.mp4';
import video4 from '../../../assets/images/vid 4.mp4';
import Navbar from '../../../components/Navbar';

const servicesData = [
  {
    title: 'Harrowing ane Plowing Preparation',
    description: 'Efficient and timely plowing, harrowing of farmland to ensure optimal planting conditions.',
    video: video1,
  },
  {
    title: 'Land levelling Services',
    description: 'We offer professional land leveling services to ensure uniform soil surfaces, improve water distribution, and create optimal planting conditions for increased crop yield',
    video: video2,
  },
  {
    title: 'Shelling of Corn (Maize)',
    description: 'We provide efficient, affordable, and modern mechanized solutions for corn shelling',
    video: video3,
  },
  {
    title: 'Post-Harvest Handling',
    description: 'From threshing to transportation, we provide tools to reduce waste and preserve quality.',
    video: video4,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16  md:ml-20">
      <Navbar />
      <div className="text-center mb-12 ">
        <h2 className="text-3xl font-bold text-[#1a882ad7]">Our Agricultural Mechanization Services</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge mechanization services to empower farmers, boost productivity, and promote sustainable agriculture across Ghana.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
            <div className="relative group w-full h-60 md:h-72 mb-4 rounded-md overflow-hidden">
              <video
                src={service.video}
                controls
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-300 rounded-md pointer-events-none" />
            </div>

            <h3 className="text-xl font-semibold text-[#1a882ad7] mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-16 bg-green-50 p-8 rounded-lg ">
        <h3 className="text-2xl font-bold text-[#1a882ad7] mb-6 text-center">What Our Clients Say</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="bg-white p-6 rounded-md shadow transform hover:scale-105 hover:shadow-lg transition duration-300">
            <p className="italic text-gray-700">"Their mechanization services saved us time and increased our yield. I highly recommend them!"</p>
            <span className="block mt-4 font-semibold text-[#1a882ad7]">– Kwame A., Farmer, Volta Region</span>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-md shadow transform hover:scale-105 hover:shadow-lg transition duration-300">
            <p className="italic text-gray-700">"Modern equipment, timely support, and professional service. Game-changer for our cooperative."</p>
            <span className="block mt-4 font-semibold text-[#1a882ad7]">– Akua B., Agro-Coop Leader</span>
          </blockquote>
        </div>
      </div>

      {/* Request a Service Form */}
      <div className="mt-16 bg-white p-8 rounded-md shadow-md">
        <h3 className="text-2xl font-bold text-[#1a882ad7] mb-6 text-center">Request a Service</h3>
        <form action="https://formspree.io/f/mnnvqpdo"
          method="POST" className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name='Fullname'
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name='Email'
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name='Telephone'
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            rows="4"
            name='message'
            id='message'
            placeholder="Describe the service you need..."
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
          <button
            type="Submit"
            className="w-full bg-[#1a882ad7] hover:bg-teal-800 text-white font-bold py-3 rounded"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Services;
