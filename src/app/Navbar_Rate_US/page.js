'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Rate_Us() {
  const [site, setSite] = useState('');
  const [option, setOption] = useState('');

  // ✅ Define ref and in-view animation for heading
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted for Site: ${site}, Option: ${option}`);
  };

  return (
    <>
      {/* ✅ Background Wrapper */}
      <div
        className="py-5 px-4 lg:mt-2 mt-2 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/homecontactimg/gpt4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12  lg:pt-8 px-5">
          <div className="text-left">
            <motion.h1
              ref={headingRef}
              initial={{ opacity: 0, y: -30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
            >
              <span className="text-4xl sm:text-5xl">R</span>ate Us
              <span className="text-orange-500">..</span>
            </motion.h1>
          </div>

          <div className="text-left max-w-lg mt-4 md:mt-0">
            <p className="text-gray-400 text-sm sm:text-base">
              Path Recharge provides high-quality wayside amenities to make every traveler’s journey comfortable and convenient.
              We value your experience and invite you to rate our services — your feedback helps us serve you even better.
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div
          className="bg-cover bg-center shadow-xl rounded-3xl sm:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-4 sm:mx-6 md:mx-auto mt-6 sm:mt-8 md:mt-12 mb-6 sm:mb-8 md:mb-12"
          style={{ backgroundImage: "url('brandpatnerimg/wood-leaf background.jpeg')" }}
        >
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left bg-white/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg shadow-indigo-900/50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-3 sm:mb-4">
              Rate Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Your feedback matters! Take a moment to click the link below and share your thoughts to help us serve you better.
            </p>
          </div>

          {/* Right Section (Form) */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 space-y-3 sm:space-y-4 w-full max-w-sm md:max-w-none bg-white/30 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg shadow-indigo-900/50"
          >
            <select
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className="w-full rounded-lg p-2.5 sm:p-3 text-indigo-900 font-bold text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md shadow-indigo-900/40 border-none transition"
              required
            >
              <option value="">SELECT SITE</option>
              <option value="Site A">Site A</option>
              <option value="Site B">Site B</option>
            </select>

            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="w-full rounded-lg p-2.5 sm:p-3 text-indigo-900 font-bold text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md shadow-indigo-900/40 border-none transition"
              required
            >
              <option value="">SELECT OPTION</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Needs Improvement">Needs Improvement</option>
            </select>

            <button
              type="submit"
              className="w-full bg-indigo-900 text-white font-bold py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:bg-indigo-800 active:bg-indigo-950 shadow-lg shadow-indigo-900/50 transition text-xs sm:text-sm md:text-base"
            >
              SHARE YOUR FEEDBACK
            </button>
          </form>
        </div>
      </div>
    </>
  );
}