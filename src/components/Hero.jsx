import React, { useState, useEffect } from 'react';
import heroimg1 from '../assets/images/hero2.webp';
import heroimg2 from '../assets/images/21.webp';
import heroimg3 from '../assets/images/13.webp'; 
import { Link } from 'react-router-dom';

const slides = [
    {
        image: heroimg1,
        headline: 'Empowering Agriculture, Enriching Lives',
        subtext: 'We grow and process crops like cassava and potato into quality food products, support farmers with mechanization services, and train youth in modern agriculture.',
    },
    {
        image: heroimg2,
        headline: 'Transforming Farming with Technology',
        subtext: 'Our services provide innovative farming tools, expert training, and high-yield crop solutions for modern-day agriculture.',
    },
    {
        image: heroimg3,
        headline: 'Building a Sustainable Future',
        subtext: 'We are committed to sustainable agricultural practices that ensure food security and empower rural communities.',
    },
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const { image, headline, subtext } = slides[index];

    return (
        <div
            className="hero flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center transition-all duration-1000 ease-in-out "
            style={{ backgroundImage: `url(${image})`}}
        >
             <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 mb-12 mt-20 items-center justify-center py-20 backdrop-blur-xs backdrop-brightness-75">
                    <div className="relative z-20 px-4 max-w-3xl mx-auto text-center">
                        <div>
                            <div className="flex mb-4 justify-center items-center">
                                <p className="uppercase tracking-widest text-sm md:text-base text-amber-200">
                                    Cultivating Excellence, Transforming Agriculture
                                </p>
                            </div>
                            <h1 className="hero-text text-4xl md:text-6xl font-extrabold text-white mb-6">
                                {headline}
                            </h1>
                            <p className="text-base md:text-lg text-white leading-relaxed mb-8">
                                {subtext}
                            </p>
                        </div>
                        <div>
                            <Link
                                to="/shop"
                                className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            >
                                Discover Our Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
