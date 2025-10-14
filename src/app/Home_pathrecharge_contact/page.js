'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Home_Pathrecharge_contact = () => {
  return (
    <section
      className="relative flex items-center bg-cover bg-center h-[50vh] sm:h-[75vh] md:h-[65vh] lg:h-[57vh]"
      style={{
        backgroundImage: "url('/homecontactimg/PATH RECHARGE EXPERT.png')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-32 text-white w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold uppercase leading-tight tracking-wide drop-shadow-lg fontss">
            TALK TO A PATH RECHARGE EXPERTS
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md">
            Get solutions that fit your business needs. Talk to a supply chain expert today.
          </p>

          <div className="mt-6">
            <Link
              href="/Nav_Contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home_Pathrecharge_contact;
