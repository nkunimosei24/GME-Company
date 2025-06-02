import React from 'react';
import heroimg from '../assets/images/12.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 mt-10">

                    <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">

                        <div className="flex items-center justify-center mb-4">
                            <p className="uppercase tracking-widest text-sm md:text-base text-amber-200 ">
                                Cultivating Excellence, Transforming Agriculture
                            </p>
                        </div>

                        
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 border-t-1 border-b-1">
                            Empowering Agriculture, Enriching Lives
                        </h1>

                        <p className="text-base md:text-lg text-white leading-relaxed mb-8">
                           We grow and process crops like cassava and potato into quality food products, support farmers with mechanization services, and train youth in modern agriculture.
                        </p>

                        <Link to = "/shop" className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
                            Discover Our Products
                        </Link>
                    </div>

                  
                </div>

            </div>
        </div>
    );
};

export default Hero;