import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import image from "../../../assets/images/34.webp"
import { RiWhatsappFill } from 'react-icons/ri';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

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
          className="relative z-10 flex flex-col gap-6 p-8 w-full  max-w-md rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg md:mt-26"
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
<div className="flex flex-col gap-1">
          <motion.p 
          variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-center">
            You may also contact us on
          </motion.p>

<div className="flex gap-4 items-center justify-center">
  <motion.a href={`https://wa.me/233246655247?`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" flex items-center gap-0.5 text-white  hover:text-green-300 cursor-pointer border p-1">
            <FaWhatsapp className="text-green-300"/> Whatsapp 
          </motion.a>

{/* <motion.span variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white">___Or___</motion.span> */}

<motion.a 
href="tel:+233256484404"
variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white border  flex items-center  gap-0.5 p-1 hover:text-green-300"><MdOutlineLocalPhone className=" " />+233 25 648 4404</motion.a></div>
          
</div>
        </motion.form>
      </div>

    </div>
  );
};

export default Contact;
