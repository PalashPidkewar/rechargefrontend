"use client";

import React, { useState } from "react";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
const images = [
  { src: "/Foodcourt/foodcourt1.png", alt: "Advanced Fuel Solution Unit" },
  { src: "/Foodcourt/foodcourt2.png", alt: "Close-up of Input Panel" },
  { src: "/Foodcourt/foodcourt3.png", alt: "Internal Components View" },
  { src: "/Foodcourt/foodcourt4.png", alt: "System in Action/Installation" },
];

const Foodcourtsolution = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const mainImage = images[mainImageIndex];

  return (<>
    <div className="container mx-auto p-4 md:px-10 bg-white  shadow-2xl rounded-2xl border border-gray-100 ">
      
      <div className="mb-8 relative  text-center">
        
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-400 to-green-600">
          Food Court Solution
        </h2>

         {/* Icon (Right Corner, Clickable Link) */}
          <a
  href="https://displayvideo.google.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 text-red-600 hover:text-green-800 transition-transform hover:scale-110 flex-col items-center"
  title="Open Google Display & Video 360"
>
  <SiGoogledisplayandvideo360 className="text-3xl" />
  <h1 className="text-sm mt-1">Video</h1>
</a>

        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Explore detailed views of our innovative product.
        </p>
      </div>
      
      {/* --- Desktop Layout (Flex/Grid) --- */}
      <div className="hidden md:flex gap-8 items-start"> 
        
        {/* 1. Main Image Display (Left Side) */}
        <div className="w-2/3 relative rounded-xl overflow-hidden border-2   shadow-2xl flex items-center justify-center">
      
          
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full h-full max-h-[600px] object-contain p-4 transition-transform duration-500 hover:scale-105 cursor-pointer"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* 2. Thumbnail Gallery (Right Side) */}
        <div className="w-1/3 grid grid-cols-2 gap-4 pt-8">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImageIndex(index)}
              className={`
                group block relative p-0.5 rounded-lg transition-all duration-300 transform 
                focus:outline-none focus:ring-4 focus:ring-blue-500/50 
                ${
                  mainImageIndex === index
                    ? "border-4 border-blue-600 shadow-lg scale-100" 
                    : "border-4 border-transparent hover:border-blue-400/50 hover:shadow-md hover:scale-[1.03]"
                }
              `}
              aria-label={`View ${img.alt}`}
            >
              <div className="relative w-full pb-[100%]"> {/* 1:1 aspect ratio */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- Mobile Layout (FIXED: Now shows 2 images per row with 1:1 aspect ratio) --- */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4"> {/* FIX: Use grid-cols-2 for 2 images per row */}
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-lg"
            >
              {/* Added 1:1 aspect ratio box for consistent mobile look */}
              <div className="relative w-full pb-[100%]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-md" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="sm:hidden w-full  flex flex-col justify-center items-center pt-6">
      <a
        href="https://displayvideo.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-green-800 transition-transform hover:scale-110 flex flex-col items-center"
        title="Open Google Display & Video 360"
      >
        <SiGoogledisplayandvideo360 className="text-3xl" />
        <h1 className="text-sm mt-1">Video</h1>
      </a>
    </div>
    </>
  );
};

export default Foodcourtsolution