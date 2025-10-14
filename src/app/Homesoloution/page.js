'use client';
import React from 'react';
import SolutionBox from '../components/SolutionBox';
import { motion } from 'framer-motion';

const solutions = [
  { icon: '/Image/fuelpump.png', title: 'Fuel Pump', description: 'Compact and reliable fuel pump providing quick roadside refueling for travelers and commercial vehicles.' },
  { icon: '/Image/ev2.png', title: 'EV Stations', description: 'Smart EV charging point offering convenient roadside charging for electric vehicles on the go.' },
  { icon: '/Image/foodcort3.png', title: 'Food Court', description: 'A small and clean food stop offering quick meals and refreshments for travelers along the roadside.' },
  { icon: '/Image/mechinical 6.png', title: 'Vehicle Repairing', description: 'A roadside service point providing quick vehicle repairs and maintenance for travelers.' },
  { icon: '/Image/children play area 8.png', title: 'Children Play Area', description: 'A small and safe play space designed for kids to relax and enjoy during travel breaks.' },
  { icon: '/Image/firstaid medicle romm 7.png', title: 'Medical Room (First Aid)', description: 'A first aid facility offering medical support for emergencies during road travel.' },
  { icon: '/Image/PARKING.png', title: 'Parking', description: 'A secure roadside parking area for cars and heavy vehicles to rest safely during travel.' },
  { icon: '/Image/Restroom.png', title: 'Restrooms', description: 'A clean and accessible roadside restroom facility for travelers to freshen up during their journey.' },
  { icon: '/Image/toliet 4.png', title: 'Washroom', description: 'A small and hygienic roadside washroom facility ensuring comfort and cleanliness for travelers.' },
];

const SolutionsPage = () => {
  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold fonty text-[#0078AE]"
          >
            <span className="text-4xl sm:text-5xl">S</span>olutions
            <span className="text-orange-500">..</span>
          </motion.h2>

          <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:pl-4">
            We provide integrated roadside solutions including fuel, EV charging, food, repair, sanitation, and rest areas — ensuring comfort, safety, and convenience for every traveler.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded overflow-hidden">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 flex items-start gap-4 border-b border-gray-200 
              ${((index + 1) % 3 === 0) ? 'lg:border-r-0' : 'lg:border-r'} 
              ${index >= solutions.length - 3 ? 'lg:border-b-0' : ''}`}
            >
              <SolutionBox {...item} />
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-gray-300"></div>
    </>
  );
};

export default SolutionsPage;
