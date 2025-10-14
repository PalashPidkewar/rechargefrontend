'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// 25 images
const images = Array.from({ length: 25 }, (_, i) => `/Gallery/pic${i + 1}.png`);

const Gallery = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="px-3 sm:px-6 py-12 max-w-screen-2xl mx-auto overflow-hidden">
      {/* Title and Description Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
        {/* Heading */}
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
        >
          <span className="text-5xl">C</span>atalog
          <span className="text-gray-400 text-base ml-1">Gallery</span>
          <span className="text-orange-500">.</span>
        </motion.h1>

        {/* Paragraph */}
        <div className="text-left max-w-xl">
          <p className="text-gray-500 text-base lg:pl-4">
            Path Recharge provides essential wayside amenities for travelers — clean restrooms, seating areas, water facilities, and EV charging — all designed for comfort and convenience along the highway.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-6 lg:mt-6">
        {images.map((src, idx) => {
          const fromLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full aspect-[4/3] relative rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover sm:hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
