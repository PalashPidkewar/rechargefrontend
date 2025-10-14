'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GlobalFootprint = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <div className="bg-white py-12 px-4 md:px-10 lg:px-28">
      
      {/* Top Row: Heading Left, Description Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
        {/* Left: Heading */}
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold fonty text-[#0078AE]"
        >
          <span className="text-5xl">P</span>an India Network
          <span className="text-orange-500">.</span>
        </motion.h1>

        {/* Right: Description */}
        <p className="text-gray-500 text-base leading-relaxed">
         Pan-India network of wayside amenities, offering seamless facilities and services across major expressways and highways.
        </p>
      </div>

      {/* Bottom: Full-width Google Map */}
      <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg">
      

        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1QJ-NmazxDkAN89b56TnYBnnrEl--nLI&ehbc=2E312F" width="640" height="480"  className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default GlobalFootprint;
