import React, { useEffect, useState } from "react"; 
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import image from "../../../assets/images/34.webp"

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.2, duration: 0.6 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  

  return (
    <div>
      <Navbar />
      <div
  className="relative flex flex-col justify-center items-center min-h-screen px-4 bg-cover bg-center"
  style={{ backgroundImage: `url(${image})` }}
>
  {/* Overlay that darkens the background */}
  <div className="absolute inset-0 bg-black/20 z-0" />

  {/* Contact Form */}
  <motion.form
    action="https://formspree.io/f/mnnvqpdo"
    method="POST"
    className="relative z-10 flex flex-col gap-6 p-8 w-full mt-22 max-w-md rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    <motion.h4 variants={itemVariants} className="text-3xl sm:text-4xl text-white font-bold text-center">
      Contact Us
    </motion.h4>

    <motion.input
      variants={itemVariants}
      className="bg-white p-3 rounded text-gray-800"
      type="text"
      name="Fullname"
      placeholder="Fullname"
    />

    <motion.input
      variants={itemVariants}
      className="bg-white p-3 rounded text-gray-800"
      type="email"
      name="Email"
      placeholder="Email"
    />

    <motion.textarea
      variants={itemVariants}
      className="bg-white p-3 rounded text-gray-800"
      name="message"
      id="message"
      placeholder="Please enter your request"
      rows="4"
    />

    <motion.button
      type="Submit"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-green-600 font-bold py-3 px-6 rounded hover:bg-gray-200 transition"
    >
      Submit
    </motion.button>
  </motion.form>
</div>

    </div>
  );
};

export default Contact;
