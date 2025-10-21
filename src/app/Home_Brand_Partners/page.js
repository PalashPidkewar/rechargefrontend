// components/BrandPartners.js
'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const logos = [
  "/brands/a.jpg",
  "/brands/image-1723267733872.png",
  "/brands/image-1723267818621.png",
  "/brands/image-1723267876385.png",
  "/brands/image-1723267914308.png",
  "/brands/image-1723267939971.png",
  "/brands/image-1723267964797.png",
  "/brands/image-1723268007112.png",
  "/brands/image-1723268037506.png",
  "/brands/image-1723268070044.png",
  "/brands/Pizza_Hut_international_logo_2014.svg.png",
  "/brands/image-1723268124023.png",
  "/brands/ganis_icecream.png",
  "/brands/bikanerwala.png",

  
    "/brands/image-1723268098037 (1).png",
];

export default function BrandPartners() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <div>
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative pb-18"
        style={{
          backgroundImage: "url('/homecontactimg/gpt4.jpg')",
        }}
      >
        {/* Optional: overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading + description */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="text-left">
              <motion.h1
                ref={headingRef}
                initial={{ opacity: 0, y: -30 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
              >
                
                <span className="text-5xl">O</span>ur Brand Partners
                <span className="text-orange-500">..</span>
              </motion.h1>
            </div>
            <div className="text-left max-w-lg mt-4 md:mt-0">
              <p className="text-gray-400 text-sm sm:text-base md:text-base lg:text-base">
                Path Recharge works hand-in-hand with top brands in food & beverage, automotive services, and lifestyle retail to offer travelers everything they need on the go.
              </p>
            </div>
          </div>

          {/* Grid with border */}
          
          <div className="relative">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
  gap-3 sm:gap-4 md:gap-6 items-center justify-center
  border-2 border-gray-300 rounded-md p-4 mx-3 sm:p-5
  bg-white/90 backdrop-blur-sm
  shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              {logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center h-12 sm:h-16 md:h-20 lg:h-16">
                  <img
                    src={logo}
                    alt={`Brand logo ${index + 1}`}
                    className="h-full object-contain transition duration-500 hover:grayscale-0"
                    style={{ filter: "grayscale(10%)" }}
                  />
                </div>
              ))}
            </div>

            {/* Overlay for bottom right cut */}
            <div className="absolute bottom-0 right-5 sm:right-10 lg:right-20 h-[2px] w-20 sm:w-24 lg:w-32 bg-white z-10"></div>

            {/* Image in center of cut */}
            <div className="absolute bottom-0 right-3 sm:right-5 lg:right-17 translate-y-1/2 z-20">
              <img
                src="/brands/logo.png"
                alt="Cut center icon"
                className="h-10 sm:h-12 lg:h-15 w-auto"
              />
            </div>
          </div>
         
        </div>
      </section>

      <div className="w-full h-[1px] bg-gray-300 lg:mt-5"></div>
    </div>
  );
}
