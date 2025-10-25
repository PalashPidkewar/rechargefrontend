'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiHotelLine } from "react-icons/ri";
const slides = [
  {
    title: 'Fuel Pump',
    description: 'Compact and reliable fuel pump providing quick roadside refueling for travelers and commercial vehicles.'
  },
  {
    title: 'EV Stations',
    description: 'Smart EV charging point offering convenient roadside charging for electric vehicles on the go.'
  },
  {
    title: 'Food Court',
    description: 'A small and clean food stop offering quick meals and refreshments for travelers along the roadside.'
  },
  {
    title: 'Vehicle Repairing',
    description: 'A roadside service point providing quick vehicle repairs and maintenance for travelers.'
  },
  {
    title: 'Children Play Area',
    description: 'A small and safe play space designed for kids to relax and enjoy during travel breaks.'
  },
  {
    title: 'Medical Room (First Aid)',
    description: 'A first aid facility offering medical support for emergencies during road travel.'
  },
  {
    title: 'Parking',
    description: 'A secure roadside parking area for cars and heavy vehicles to rest safely during travel.'
  },
  {
    title: 'Restrooms',
    description: 'A clean and accessible roadside restroom facility for travelers to freshen up during their journey.'
  },
  {
    title: 'Washroom',
    description: 'A small and hygienic roadside washroom facility ensuring comfort and cleanliness for travelers.'
  }
];

export default function FullScreenLocalVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // fade out duration
    }, 3000); // total slide duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen min-h-[calc(100vh-90px)] sm:min-h-[100vh] md:h-screen overflow-hidden">
      
      {/* ✅ Side Badge Component Code Inline */}
  <motion.div
      initial={{ x: '-10%' }}
      whileHover={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="hidden sm:flex fixed top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white items-center gap-2 rounded-r-full shadow-xl cursor-pointer overflow-hidden group w-12 hover:w-52 transition-all duration-300 z-20"
    >
      {/* Circle Badge with Glow */}
      <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0">
        <span className="relative z-10 text-lg font-bold">25+</span>
        
        {/* Pulsating Glow */}
        <motion.div
          className="absolute inset-0 bg-orange-400/50 rounded-full blur-md"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Full Text with Icon */}
      <span className="flex items-center gap-2 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <RiHotelLine className="text-yellow-400 text-2xl drop-shadow-lg" />
        </motion.div>
        <span>Wayside Amenities</span>
      </span>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
    </motion.div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/Recharge.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10" />

      {/* Rotating Text */}
<div
  className={`absolute bottom-16 md:bottom-20 lg:bottom-32 left-5 md:left-10 text-white z-10 max-w-md transition-opacity duration-500 ${
    fade ? 'opacity-100' : 'opacity-0'
  }`}
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug drop-shadow-2xl bg-gradient-to-r from-pink-700 via-green-700 to-blue-700 bg-clip-text text-transparent inline-block w-fit">
    {slides[currentIndex].title}
  </h1>
  <p className="mt-2 text-sm sm:text-base md:text-base text-gray-200 drop-shadow-md">
    {slides[currentIndex].description}
  </p>
</div>

    </div>
  );
}
