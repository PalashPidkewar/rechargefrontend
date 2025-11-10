// 'use client';
// import { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// const images = [
//   "/catelog/images_pATH RECHARGE 2.jpg",
//   "/catelog/images_path recharge.jpg",
//   "/catelog/IMAGES_PATHRECHARGE 4.jpg",
//   "/catelog/path reacharge hotel2.png",
//   "/catelog/path recharge hotel 5.png",
//   "/catelog/path recharge hotel3.png",
//   "/catelog/path recharge hotels.png",
//   "/catelog/path recharge img 5.jpg",
//   "/catelog/path Rechahrges news_img (1).jpg",
//   "/catelog/images_pATH RECHARGE 2.jpg",
//   "/catelog/recharge.png"
// ];

// export default function Home_Catelog() {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);

//   const topImagesCount = 3;
//   const bottomImagesCount = 2;

//   const headingRef = useRef(null);
//   const headingInView = useInView(headingRef, { once: true });

//   // Auto-rotate logic
//   useEffect(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev + topImagesCount) % images.length);
//     }, 9000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   // Slice top images
//   const topImages = images.slice(index, index + topImagesCount);
//   while (topImages.length < topImagesCount) {
//     topImages.push(...images.slice(0, topImagesCount - topImages.length));
//   }

//   // Slice bottom images
//   const bottomStart = (index + topImagesCount) % images.length;
//   const bottomImages = images.slice(bottomStart, bottomStart + bottomImagesCount);
//   while (bottomImages.length < bottomImagesCount) {
//     bottomImages.push(...images.slice(0, bottomImagesCount - bottomImages.length));
//   }

//   return (
//     <>
//       <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">

//           {/* Header */}
//           <div className="flex flex-col md:flex-row justify-between mb-12">
//             <div className="text-left">
//               <motion.h1
//                 ref={headingRef}
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={headingInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.8 }}
//                 className="text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
//               >
//                 <span className="text-5xl">C</span>atelog
//                 <span className="text-gray-400 text-sm"> gallery</span>
//                 <span className="text-orange-500">.</span>
//               </motion.h1>
//             </div>

//             <div className="text-left max-w-lg mt-4 md:mt-0">
//               <p className="text-gray-500 text-base lg:pl-8 lg:pr-5 lg:pb-8">
//                 Path Recharge is providing essential wayside amenities for traveling — including clean restrooms, seating areas, water facilities and EV charging — all designed for comfort and convenience along the highway.
//               </p>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//                 transition={{ duration: 0.8 }}
//                 className="flex flex-col gap-3"
//               >
//                 {/* Top Row: 3 Images */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
//                   {topImages.map((img, i) => (
//                     <div
//                       key={`top-${i}`}
//                       className="w-[90%] h-56 border border-gray-200 rounded-md shadow-sm bg-white flex items-center justify-center overflow-hidden"
//                     >
//                       <img
//                         src={img}
//                         alt={`top-${i}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bottom Row: 2 Centered Images */}
//                 <div className="flex justify-center gap-6 flex-wrap">
//                   {bottomImages.map((img, i) => (
//                     <div
//                       key={`bottom-${i}`}
//                       className="w-[90%] sm:w-[48%] lg:w-[30%] h-56 border border-gray-200 rounded-md shadow-sm bg-white flex items-center justify-center overflow-hidden"
//                     >
//                       <img
//                         src={img}
//                         alt={`bottom-${i}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Divider */}
//       <div className="w-full h-[1px] bg-gray-300"></div>
//     </>
//   );
// }

"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
// --- नेविगेशन के लिए नए आइकॉन ---
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const images = [
  "/catelog/images_pATH RECHARGE 2.jpg",
  "/catelog/images_path recharge.jpg",
  "/catelog/IMAGES_PATHRECHARGE 4.jpg",
  "/catelog/path reacharge hotel2.png",
  "/catelog/path recharge hotel 5.png",
  "/catelog/path recharge hotel3.png",
  "/catelog/path recharge hotels.png",
  "/catelog/path recharge img 5.jpg",
  "/catelog/path Rechahrges news_img (1).jpg",
  "/catelog/images_pATH RECHARGE 2.jpg",
  "/catelog/recharge.png",
];

export default function Home_Catelog() {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const mainImage = images[mainImageIndex];

  // --- थंबनेल पेजिनेशन के लिए नया स्टेट ---
  const [thumbnailPage, setThumbnailPage] = useState(0);
  const THUMBNAILS_PER_PAGE = 4;
  const totalThumbnails = images.length;
  // कुल कितने पेज बनेंगे (जैसे 11 इमेज और 4/पेज = 3 पेज)
  const totalPages = Math.ceil(totalThumbnails / THUMBNAILS_PER_PAGE);

  // --- कौन सी 4 इमेज दिखानी हैं, उनकी गणना ---
  const startIndex = thumbnailPage * THUMBNAILS_PER_PAGE;
  const currentThumbnails = images.slice(
    startIndex,
    startIndex + THUMBNAILS_PER_PAGE
  );

  // --- नए बटन हैंडलर ---
  const handleNext = () => {
    // अगले पेज पर जाएँ, अगर आखिरी पेज पर हैं तो पहले पर वापस जाएँ
    setThumbnailPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    // पिछले पेज पर जाएँ, अगर पहले पेज पर हैं तो आखिरी पर जाएँ
    setThumbnailPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <div className="bg-gray-50 min-h-0 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - कोई बदलाव नहीं */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="flex items-center justify-between w-full">
              <motion.h1
                ref={headingRef}
                initial={{ opacity: 0, y: -30 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
              >
                <span className="text-4xl sm:text-5xl">C</span>atelog
                <span className="text-gray-400 text-sm"> gallery</span>
                <span className="text-orange-500">..</span>
              </motion.h1>

            
            </div>
            <div className="text-left max-w-full md:max-w-lg mt-4 md:mt-0">
              <p className="text-gray-400 text-sm sm:text-base md:text-base lg:text-base">
                Path Recharge is providing essential wayside amenities for traveling — including clean restrooms, seating areas, water facilities and EV charging — all designed for comfort and convenience along the highway.
              </p>
            </div>
          </div>

          {/* --- Desktop Layout (Flex/Grid) --- */}
          <div className="hidden md:flex gap-8 items-start">
            {/* 1. Main Image Display (Left Side) - कोई बदलाव नहीं */}
            <div className="w-2/3 relative rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg flex items-center justify-center bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImageIndex}
                  src={mainImage}
                  alt={`Catalog Image ${mainImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full max-h-[600px] object-contain p-4"
                />
              </AnimatePresence>
            </div>

            {/* --- Right Side Wrapper (Desktop) --- */}
            <div className="w-1/3 flex flex-col mt-8">
              {/* 2. Thumbnail Gallery (सिर्फ 4 इमेज) */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                key={thumbnailPage} // डेस्कटॉप के लिए की
                variants={container}
                initial="hidden"
                animate="show"
              >
                {currentThumbnails.map((img, localIndex) => {
                  const globalIndex = startIndex + localIndex;
                  return (
                    <motion.button
                      key={globalIndex}
                      variants={item}
                      onClick={() => setMainImageIndex(globalIndex)}
                      className={`
                        group block relative p-0.5 rounded-lg transition-all duration-300 transform 
                        focus:outline-none focus:ring-4 focus:ring-blue-500/50 
                        ${
                          mainImageIndex === globalIndex
                            ? "border-4 border-blue-600 shadow-lg scale-100"
                            : "border-4 border-transparent hover:border-blue-400/50 hover:shadow-md hover:scale-[1.03]"
                        }
                      `}
                      aria-label={`View image ${globalIndex + 1}`}
                    >
                      <div className="relative w-full pb-[100%]">
                        <img
                          src={img}
                          alt={`Thumbnail ${globalIndex + 1}`}
                          className="absolute inset-0 w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* 3. Pagination Buttons (Desktop) */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous thumbnails"
                >
                  <HiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next thumbnails"
                >
                  <HiChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            {/* --- End Right Side Wrapper --- */}
          </div>

          {/* --- Mobile Layout (FIXED: col-span-2 on last odd item) --- */}
          <div className="md:hidden flex flex-col items-center mb-8">
            {/* 1. Paginated 2x2 Grid (Mobile) */}
           <motion.div
  className="grid grid-cols-2 gap-4 w-full"
  key={thumbnailPage + "-mobile"}
  variants={container}
  initial="hidden"
  animate="show"
>
  {currentThumbnails.map((img, localIndex) => {
    const globalIndex = startIndex + localIndex;
    const isLastItem = localIndex === currentThumbnails.length - 1;
    const isOddPage = currentThumbnails.length % 2 !== 0;
    const itemClass = isLastItem && isOddPage ? "col-span-2" : "";

    return (
      <motion.div
        key={globalIndex}
        variants={item}
        className={`group block relative p-0.5 rounded-lg transition-all duration-500 transform border-4 border-white 
          shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:scale-105 ${itemClass}`}
      >
        <div
          className={`relative w-full bg-white rounded-md overflow-hidden 
            ${isLastItem && isOddPage ? "pb-[50%]" : "pb-[100%]"}`}
        >
          <img
            src={img}
            alt={`Thumbnail ${globalIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      </motion.div>
    );
  })}
</motion.div>


            {/* 2. Pagination Buttons (Mobile) - कोई बदलाव नहीं */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous thumbnails"
              >
                <HiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next thumbnails"
              >
                <HiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* --- End Mobile Layout --- */}

          {/* Explore More Link - कोई बदलाव नहीं */}
   <div className="relative mt-4 sm:mt-8 text-center flex flex-col items-center">
  {/* Explore More Catalogs Button (centered always) */}
  <Link
    href="/Nav_Gallery"
    className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
  >
    Explore More Catalogs
  </Link>

  {/* Video Button — right corner on large screens */}
  <Link
    href="/Navvideos"
    className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center text-gray-800 hover:text-[#0078AE] transition-all sm:right-10"
  >
    <SiGoogledisplayandvideo360
      size={28}
      className="text-red-500 hover:text-green-400"
    />
    <span className="mt-1 text-sm sm:text-base text-blue-400 font-semibold">
      Video
    </span>
  </Link>
</div>


        </div>
      </div>

      {/* Bottom Divider - कोई बदलाव नहीं */}
      <div className="w-full h-[1px] bg-gray-300"></div>
    </>
  );
}
// <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.8 }}
//                 className="flex flex-col gap-4"
//               >
//                 {/* Top Row: 3 Images */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
//                   {topImages.map((img, i) => (
//                     <div
//                       key={`top-${i}`}
//                       className="w-full sm:w-[95%] md:w-[90%] lg:w-full h-48 sm:h-52 md:h-56 lg:h-56 border border-gray-200 rounded-md shadow-sm bg-white flex items-center justify-center overflow-hidden"
//                     >
//                       <img
//                         src={img}
//                         alt={`top-${i}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bottom Row: 2 Centered Images */}
//                 <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
//                   {bottomImages.map((img, i) => (
//                     <div
//                       key={`bottom-${i}`}
//                       className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%] h-48 sm:h-52 md:h-56 lg:h-56 border border-gray-200 rounded-md shadow-sm bg-white flex items-center justify-center overflow-hidden"
//                     >
//                       <img
//                         src={img}
//                         alt={`bottom-${i}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>


// ye motion saahi nhii laagra h or koi aacha h kya ttractive sa