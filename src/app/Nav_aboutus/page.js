'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Aboutus() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* About Section */}
      <section className="py-12 px-2 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="pt-0 text-left pl-2">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold fonty text-[#0078AE] mb-6 inline-block"
          >
            <span className="text-5xl">A</span>bout Us
            <span className="text-orange-500">.</span>
          </motion.h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
          {/* Left: Text */}
          <div className="md:col-span-7 fonty px-5">
            <p className="text-lg text-gray-600 leading-relaxed mb-6  tracking-wide text-justify">
              We are building a next-generation roadside infrastructure ecosystem that helps travelers, commercial drivers, and logistics operators access reliable charging stations, sanitation facilities, fuel points, food stops, and emergency services — all mapped and accessible through a single digital platform.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed  tracking-wide text-justify">
              As the quality of highways continues to improve, accompanied by a surge in highway travel, enhancing the overall highway traveling experience for road users becomes increasingly essential.
              A pioneering concept: rest areas equipped with essential facilities strategically located along major National Highways and Expressways. These amenities aim to offer highway travelers a revitalizing break during their journey.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-3 flex justify-center lg:ml-10">
            <Image
                          src="/Image/pathrechargelogo1.png"
                          alt="Highway Amenities"
                          width={300}
                          height={300}
                          className="w-40 sm:w-56 md:w-full max-w-[250px] h-auto object-contain"
                        />
          </div>
        </div>
      </section>

      {/* Mission + Vision Section with Gradient Background */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(#fcf7ea, #ffffff)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Vision + Mission */}
          <div className="flex flex-col gap-12 text-left">
            {/* Vision */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 oswald-regular">Our Vision</h2>
              <p className="text-base text-gray-500">
                To build India’s largest network of digitally-connected roadside service hubs, supporting sustainable travel and boosting highway economy.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 oswald-regular">Our Mission</h2>
              
              <p className="text-base text-gray-500">
                To transform road journeys by providing accessible and well-maintained roadside amenities across national and state highways in India.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <img
              src="/Image/rechargebackground.png"
              alt="Our Mission and Vision"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


{/* youtube section show */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-12"
  style={{
    backgroundImage: "url('brandpatnerimg/wood-texture-background.jpg')",
  }}
>
  {/* Overlay for contrast */}
  <div className="absolute inset-0 "></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
    
    {/* Left: Title + Description */}
    <div className="space-y-6">
     <h2 className="text-4xl md:text-5xl font-bold oswald-regular text-blue-400 relative inline-block">
  Touching Lives Every Minute
  <span className="text-orange-500">.</span>
  
  <span className="block h-[3px] w-24 bg-gradient-to-r from-blue-400 to-blue-600 mt-2 rounded-full"></span>
</h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Path Recharge is redefining India’s highway travel experience through 
        world-class wayside amenities. From clean restrooms and EV charging 
        stations to food courts, fuel pumps, and convenience stores — each 
        facility is designed to make your journey smoother, safer, and more 
        enjoyable. Our mission is to ensure every traveler finds comfort, 
        connectivity, and care along every mile of India’s roads.
      </p>
    </div>

    {/* Right: YouTube Video */}
<div className="flex justify-center lg:pr-12">
  <div className="relative w-full max-w-[550px] h-64 md:h-80 lg:h-80 rounded-2xl overflow-hidden border border-gray-700 shadow-[0_8px_30px_rgba(107,114,128,0.5)]">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/LBG0HDS7jJQ?si=G94uMVMv8BhuO2nN"
      title="Path Recharge - Wayside Amenities"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>



  </div>
</section>




    </main>
  );
}
