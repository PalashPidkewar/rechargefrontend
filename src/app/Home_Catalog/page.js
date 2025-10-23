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





'use client';
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

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
  "/catelog/recharge.png"
];

export default function Home_Catelog() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const topImagesCount = 3;
  const bottomImagesCount = 2;

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  // Auto-rotate logic
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + topImagesCount) % images.length);
    }, 9000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Slice top images
  const topImages = images.slice(index, index + topImagesCount);
  while (topImages.length < topImagesCount) {
    topImages.push(...images.slice(0, topImagesCount - topImages.length));
  }

  // Slice bottom images
  const bottomStart = (index + topImagesCount) % images.length;
  const bottomImages = images.slice(bottomStart, bottomStart + bottomImagesCount);
  while (bottomImages.length < bottomImagesCount) {
    bottomImages.push(...images.slice(0, bottomImagesCount - bottomImages.length));
  }

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
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="text-left">
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

          {/* Image Section */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-4"
              >
                {/* Top Row: 3 Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                  {topImages.map((img, i) => (
                    <motion.div
                      key={`top-${i}`}
                      variants={item}
                      className="w-full sm:w-full md:w-full lg:w-full h-48 sm:h-52 md:h-56 lg:h-56 border border-gray-200 rounded-md shadow-sm bg-white flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`top-${i}`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        style={{ filter: "brightness(0.90)" }} // Slightly darker
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Row: 2 Centered Images */}
                <div className="hidden lg:flex justify-center gap-4 sm:gap-6 flex-wrap">
                  {bottomImages.map((img, i) => (
                    <motion.div
                      key={`bottom-${i}`}
                      variants={item}
                      className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%] h-48 sm:h-52 md:h-56 lg:h-56 border border-gray-200 rounded-md shadow-sm bg-white flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`bottom-${i}`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        style={{ filter: "brightness(0.70)" }} // Slightly darker
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Explore More Link */}
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              href="/Nav_Gallery"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Explore More Catelogs 
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
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