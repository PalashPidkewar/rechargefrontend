// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Home_aboutus = () => {
//   return (
//     <div className="bg-white">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-6 pt-12 text-left pl-18">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold fonty text-[#0078AE] mb-6 inline-block"
//         >
//           <span className="text-5xl">A</span>bout Us
//           <span className="text-orange-500">.</span>
//         </motion.h2>
//       </div>

//       {/* Section Content */}
//       <section className="py-10 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
//           {/* Left: Text (70%) */}
//           <div className="md:col-span-7 fonty">
//             <p className="text-lg text-gray-600 leading-relaxed mb-6">
//               We are building a next-generation roadside infrastructure ecosystem that helps travelers, commercial drivers,
//               and logistics operators access reliable charging stations, sanitation facilities, fuel points, food stops,
//               and emergency services — all mapped and accessible through a single digital platform.
//             </p>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               As the quality of highways continues to improve, accompanied by a surge in highway travel,
//               enhancing the overall highway traveling experience for road users becomes increasingly essential.
//               A pioneering concept: rest areas equipped with essential facilities strategically located along major National Highways
//               and Expressways. These amenities aim to offer highway travelers a revitalizing break during their journey.
//             </p>
//           </div>

//           {/* Right: Image (30%) */}
//           <div className="md:col-span-3 flex justify-center lg:ml-10">
//             <Image
//               src="/Image/pathrechargelogo1.png"
//               alt="Highway Amenities"
//               width={300}
//               height={300}
//               className="w-full max-w-sm h-auto object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="w-full h-[1px] bg-gray-300"></div>
//     </div>
//   );
// };

// export default Home_aboutus;
//with out background image upper h 


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { PiShareFatThin } from "react-icons/pi";

const Home_aboutus = () => {
  const [showShareBox, setShowShareBox] = useState(false);
  const shareUrl = 'https://pathrecharge.com/';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  return ( <>
    <div
      className="relative bg-cover bg-center bg-no-repeat px-5"
      style={{ backgroundImage: "url('/homecontactimg/gpt4.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content Section */}
      <div className="relative">
        {/* Heading + Share Button Row */}
        <div className="max-w-7xl mx-auto px-0 sm:px-6 pt-8 sm:pt-12 text-left flex items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-4xl font-bold fonty text-[#0078AE]"
          >
            <span className="text-4xl sm:text-5xl lg:text-5xl">A</span>bout Us
            <span className="text-orange-500">..</span>
          </motion.h2>

          {/* Share Button (Right Side) */}
          <button
            onClick={() => setShowShareBox(!showShareBox)}
            className="flex items-center gap-2 text-gray-800 py-2 px-4 hover:text-[#0078AE] transition-all"
          >
            <PiShareFatThin size={20} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>

        {/* Share Box Popup */}
        {showShareBox && (
          <div className="absolute top-20 right-10 bg-white p-4 rounded-lg shadow-xl z-50 w-64">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowShareBox(false)}
            >
              &times;
            </button>

            <div className="flex items-center gap-3 mb-3 mt-2 pr-5">
              <Image
                src="/Image/removeaboutbackground.png"
                alt="Thumbnail"
                width={50}
                height={50}
                className="rounded object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-700">Wayside Amenities..</p>
                <p className="text-gray-500 text-xs">www.pathrecharge.com</p>
              </div>
            </div>

            <div className="flex justify-between items-center my-2 text-xl">
              <FaFacebookF className="cursor-pointer text-[#1877F2] hover:brightness-90" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")} />
              <FaInstagram className="cursor-pointer text-[#E4405F] hover:brightness-90" onClick={() => window.open('https://www.instagram.com/pathrecharge/', "_blank")} />
              <FaTwitter className="cursor-pointer text-[#1DA1F2] hover:brightness-90" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")} />
              <FaEnvelope className="cursor-pointer text-[#EA4335] hover:brightness-90"   onClick={() => window.location.href = `mailto:?subject=Check this out&body=${shareUrl}`} />
              <FaWhatsapp className="cursor-pointer text-[#25D366] hover:brightness-90" onClick={() => window.open(`https://api.whatsapp.com/send?text=${shareUrl}`, "_blank")} />
            </div>

            <div className="mt-3">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="w-full text-sm border px-2 py-1 rounded bg-gray-100 text-gray-700"
              />
              <button
                onClick={handleCopy}
                className="mt-2 w-full text-center bg-black text-white py-1 rounded text-sm hover:bg-gray-800"
              >
                COPY
              </button>
            </div>
          </div>
        )}

        {/* Section Content */}
        <section className="py-3 sm:py-10 pl-0 pr-2 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 lg:gap-10 items-center">
            {/* Left: Text */}
            <div className="md:col-span-7 fonty">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-7 tracking-wide text-justify">
                We are building a next-generation roadside infrastructure ecosystem that helps travelers,
                commercial drivers, and logistics operators access reliable charging stations, sanitation facilities,
                fuel points, food stops, and emergency services — all mapped and accessible through a single digital platform.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide text-justify">
                As the quality of highways continues to improve, accompanied by a surge in highway travel,
                enhancing the overall highway traveling experience for road users becomes increasingly essential.
                A pioneering concept: rest areas equipped with essential facilities strategically located along major
                National Highways and Expressways. These amenities aim to offer highway travelers a revitalizing break
                during their journey.
              </p>
            </div>

            {/* Right: Image */}
            <div className="md:col-span-3 flex justify-center mt-1 md:mt-0 lg:ml-10">
              <Image
                src="/Image/removeaboutbackground.png"
                alt="Highway Amenities"
                width={320}
                height={320}
                className="w-70 sm:w-56 md:w-full max-w-[450px] h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
     
      </div>
        
    </div>
     <div className="w-full h-[1px] bg-gray-300"></div>
   </>
  );
};

export default Home_aboutus;




// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaEnvelope,
//   FaWhatsapp,
//   FaShareAlt,
// } from 'react-icons/fa';
// import { PiShareFatThin } from "react-icons/pi";

// const Home_aboutus = () => {
  // const [showShareBox, setShowShareBox] = useState(false);
  // const shareUrl = 'https://pathrecharge.com/'; // 🔁 Replace with your actual URL

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(shareUrl);
  //   alert('Link copied to clipboard!');
  // };

//   return (
//     <div className="bg-white relative">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-6 pt-12 text-left relative">
//   {/* Title + Share button wrapper */}
//   <div className="flex justify-between items-center">
//     <motion.h2
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-4xl font-bold fonty text-[#0078AE] mb-6 inline-block"
//     >
//       <span className="text-5xl">A</span>bout Us
//       <span className="text-orange-500">.</span>
//     </motion.h2>
   
//     {/* Share Button */}
//     <button
//       onClick={() => setShowShareBox(!showShareBox)}
//       className=" -mt-4 flex items-center gap-2   
//                  text-gray-800 py-2 px-4 "
//     >

//       {/* rounded shadow */}
//       <PiShareFatThin/>
//       Share
//     </button>
//   </div>

//   {/* Share Box Popup */}
//   {showShareBox && (
//     <div className="absolute top-16 right-0 bg-white p-4 rounded-lg shadow-xl z-50 w-64">
//       {/* Close Button */}
//       <button
//         className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
//         onClick={() => setShowShareBox(false)}
//       >
//         &times;
//       </button>

//       <div className="flex items-center gap-3 mb-3 mt-2 pr-5">
//         <Image
//           src="/Image/removeaboutbackground.png"
//           alt="Thumbnail"
//           width={50}
//           height={50}
//           className="rounded object-cover"
//         />
//         <div className="text-sm">
//           <p className="font-semibold text-gray-300">Wayside Animities..</p>
//           <p className="text-gray-500 text-xs">www.pathrecharge.com</p>
//         </div>
//       </div>

//      <div className="flex justify-between items-center my-2 text-xl">
//   <FaFacebookF className="cursor-pointer text-[#1877F2] hover:brightness-90" />
//   <FaInstagram className="cursor-pointer text-[#E4405F] hover:brightness-90" />
//   <FaTwitter className="cursor-pointer text-[#1DA1F2] hover:brightness-90" />
//   <FaEnvelope className="cursor-pointer text-[#EA4335] hover:brightness-90" />
//   <FaWhatsapp className="cursor-pointer text-[#25D366] hover:brightness-90" />
// </div>


//       <div className="mt-3">
//         <input
//           type="text"
//           value={shareUrl}
//           readOnly
//           className="w-full text-sm border px-2 py-1 rounded bg-gray-100 text-gray-300"
//         />
//         <button
//           onClick={handleCopy}
//           className="mt-2 w-full text-center bg-black text-white py-1 rounded text-sm hover:bg-gray-800"
//         >
//           COPY
//         </button>
//       </div>
//     </div>
//   )}
  
// </div>


//       {/* Section Content */}
//       <section className="py-10 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
//           {/* Left Text (70%) */}
//           <div className="md:col-span-7 fonty">
//             <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
//               We are building a next-generation roadside infrastructure ecosystem that helps travelers, commercial drivers,
//               and logistics operators access reliable charging stations, sanitation facilities, fuel points, food stops,
//               and emergency services — all mapped and accessible through a single digital platform.
//             </p>
//             <p className="text-lg text-gray-600 leading-relaxed text-justify">
//               As the quality of highways continues to improve, accompanied by a surge in highway travel,
//               enhancing the overall highway traveling experience for road users becomes increasingly essential.
//               A pioneering concept: rest areas equipped with essential facilities strategically located along major National Highways
//               and Expressways. These amenities aim to offer highway travelers a revitalizing break during their journey.
//             </p>
//           </div>

//           {/* Right Image + Share */}
//           <div className="md:col-span-3 flex flex-col justify-center items-center relative -mt-2 md:mt-0">
//             <Image
//               src="/Image/removeaboutbackground.png"
//               alt="Highway Amenities"
//               width={320}
//               height={320}
//               className="w-70 sm:w-56 md:w-full max-w-[450px] h-auto object-contain"
//             />

//             {/* Share Button */}
            
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="w-full h-[1px] bg-gray-300"></div>
//     </div>
//   );
// };

// export default Home_aboutus;
