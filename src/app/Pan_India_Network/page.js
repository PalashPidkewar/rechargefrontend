'use client';
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const PanIndiaNetwork = () => {
  const [isToggled, setIsToggled] = useState(false);

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* ✅ Top-right background image */}
      <div className="absolute top-[-8px] lg:top-0 right-[-25px] lg:right-0 w-28 sm:w-34 pointer-events-none select-none opacity-50 lg:opacity-60">
        <Image
          src="/brandpatnerimg/1backgroun pan india .png"
          alt="Top Decoration"
          width={200}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ✅ Bottom-left background image */}
    <div className="absolute bottom-[-8px] lg:bottom-0   left-[-25px] lg:left-0 w-28 sm:w-34 pointer-events-none select-none opacity-50 lg:opacity-60">
  <Image
    src="/brandpatnerimg/2backgroundofpanindia.png"
    alt="Bottom Decoration"
    width={180}
    height={180}
    className="w-full h-auto"
    priority
  />
</div>


      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 text-center md:text-left">
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: -30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold fonty text-[#0078AE]"
          >
            <span className="text-4xl sm:text-5xl">P</span>an India Network
            <span className="text-orange-500">..</span>
          </motion.h1>

          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
          Pan-India network of wayside amenities, offering seamless facilities and services across major expressways and highways.
          </p>
        </div>

        {/* Map Section */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/Image/map-india.png"
            alt="India Map"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-md"
            width={1200}
            height={1000}
            priority
          />

          {/* ✅ Green Dots - Default */}
          {!isToggled && (
            <>
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[26%] left-[47%]" title="Eastern-Peripheral Expressway (Noida-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[28.5%] left-[47%]" title="Eastern-Peripheral Expressway (Gaziabad-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[32%] left-[45%]" title="Delhi-Mumbai Expressway (Barodameo-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[34%] left-[44.5%]" title="Delhi-Mumbai Expressway (Pinan-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[36%] left-[44%]" title="Eastern-Peripheral Expressway (Pragpura-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[46%] left-[43%]" title="Delhi-Mumbai Expressway (Thandla-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[41.5%] left-[44.5%]" title="Delhi-Mumbai Expressway (Ragpura-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[39%] left-[47%]" title="Baran-Shivpuri-RHS" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[40.5%] left-[46.5%]" title="Khushadpura" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[37.7%] left-[49%]" title="Jhansi-Kanpur (Girthan-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[36.2%] left-[49.4%]" title="Jhansi-Kanpur (Oria-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[35.4%] left-[49.8%]" title="Jhansi-Kanpur (Bhognipur-RHS)" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[37.4%] left-[50%]" title="Fatehpur" />
            </>
          )}

          {/* ✅ Toggle ON Dots */}
          {isToggled && (
            <>
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full border border-white shadow-md top-[85%] left-[47%]" title="Bangalore - Logistics" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-600 rounded-full border border-white shadow-md top-[46%] left-[47%]" title="Indore - Office" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-500 rounded-full border border-white shadow-md top-[42%] left-[48%]" title="Dhar - Manufacturing Unit" />
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-500 rounded-full border border-white shadow-md top-[47%] left-[45%]" title="Ashapura - Manufacturing Unit" />
            </>
          )}

          {/* Legend - Desktop */}
          <div className="hidden lg:flex flex-col gap-2 absolute bottom-4 left-4 text-sm font-semibold">
            {!isToggled ? (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-black">Wayside Amenities</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-black">Path Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-black">Path Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-black">Path Manufacturing Unit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-black">40+ Toll Plaza </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Legend - Mobile */}
        <div className="lg:hidden mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm font-semibold">
          {!isToggled ? (
            <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded">
              Wayside Amenities
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded">
                Office
              </div>
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded">
                Logistics
              </div>
              <div className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded">
                Manufacturing
              </div>
            </>
          )}
        </div>

        {/* Toggle Switch */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <p className="text-base font-semibold text-gray-800">
            Wayside Amenities
          </p>

          <div className="flex items-center gap-2">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isToggled}
                onChange={handleToggle}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-all duration-300">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 transform peer-checked:translate-x-5"></div>
              </div>
            </label>
            <span className="text-sm font-medium text-gray-800">
              {isToggled ? 'On' : 'Off'}
            </span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-blue-500 text-center">
            Path Logistics, Office & Manufacturing
          </p>
        </div>
      </section>

      <div className="mt--2 mb-6 flex justify-center">
        <Link
          href="/Nav_Global_Footprints"
          className="
            inline-block 
            bg-gradient-to-r from-blue-500 to-cyan-400 
            text-white font-semibold 
            px-4 py-2 text-sm             
            sm:px-6 sm:py-3 sm:text-base  
            rounded-full shadow-lg 
            hover:scale-105 hover:shadow-xl 
            transition-transform duration-300
          "
        >
          Footprint (MAP)
        </Link>
      </div>

      <div className="w-full h-[1px] bg-gray-300"></div>
    </div>
  );
};

export default PanIndiaNetwork;



// 'use client';
// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import { motion, useInView } from 'framer-motion';
// import Link from 'next/link';

// const PanIndiaNetwork = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const headingRef = useRef(null);
//   const headingInView = useInView(headingRef, { once: true });

//   const handleToggle = () => setIsToggled(!isToggled);

//   return (
//     <div className="bg-gray-50">
//       <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 text-center md:text-left">
//           <motion.h1
//             ref={headingRef}
//             initial={{ opacity: 0, y: -30 }}
//             animate={headingInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-3xl sm:text-4xl font-bold fonty text-[#0078AE]"
//           >
//             <span className="text-4xl sm:text-5xl">P</span>an India Network
//             <span className="text-orange-500">..</span>
//           </motion.h1>

//           <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
//             Our vast Pan-India presence at ports, regional offices and Coal India Limited subsidiaries where we operate.
//           </p>
//         </div>

//         {/* Map Section */}
//         <div className="relative w-full flex justify-center">
//           <Image
//             src="/Image/map-india.png"
//             alt="India Map"
//             className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-md"
//             width={1200}
//             height={1000}
//             priority
//           />

//           {/* ✅ Green Dots - Default */}
//           {!isToggled && (
//             <>
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[26%] left-[47%]" title="Eastern-Peripheral Expressway (Noida-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[28.5%] left-[47%]" title="Eastern-Peripheral Expressway (Gaziabad-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[32%] left-[45%]" title="Delhi-Mumbai Expressway (Barodameo-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[34%] left-[44.5%]" title="Delhi-Mumbai Expressway (Pinan-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[36%] left-[44%]" title="Eastern-Peripheral Expressway (Pragpura-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[46%] left-[43%]" title="Delhi-Mumbai Expressway (Thandla-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[41.5%] left-[44.5%]" title="Delhi-Mumbai Expressway (Ragpura-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[39%] left-[47%]" title="Baran-Shivpuri-RHS" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[40.5%] left-[46.5%]" title="Khushadpura" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[37.7%] left-[49%]" title="Jhansi-Kanpur (Girthan-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[36.2%] left-[49.4%]" title="Jhansi-Kanpur (Oria-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[35.4%] left-[49.8%]" title="Jhansi-Kanpur (Bhognipur-RHS)" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600 rounded-full border border-white shadow-md top-[37.4%] left-[50%]" title="Fatehpur" />
//             </>
//           )}

//           {/* ✅ Toggle ON Dots */}
//           {isToggled && (
//             <>
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full border border-white shadow-md top-[85%] left-[47%]" title="Bangalore - Logistics" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-600 rounded-full border border-white shadow-md top-[46%] left-[47%]" title="Indore - Office" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-500 rounded-full border border-white shadow-md top-[42%] left-[48%]" title="Dhar - Manufacturing Unit" />
//               <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-500 rounded-full border border-white shadow-md top-[47%] left-[45%]" title="Ashapura - Manufacturing Unit" />
//             </>
//           )}

//           {/* Legend - Desktop */}
//           <div className="hidden lg:flex flex-col gap-2 absolute bottom-4 left-4 text-sm font-semibold">
//             {!isToggled ? (
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-green-600 rounded-full"></div>
//                 <span className="text-black">Wayside Amenities</span>
//               </div>
//             ) : (
//               <>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
//                   <span className="text-black">Path Office</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                   <span className="text-black">Path Logistics</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                   <span className="text-black">Path Manufacturing Unit</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//                   <span className="text-black">40+ Toll Plaza </span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Legend - Mobile */}
//         <div className="lg:hidden mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm font-semibold">
//           {!isToggled ? (
//             <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded">
//               Wayside Amenities
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded">
//                 Office
//               </div>
//               <div className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded">
//                 Logistics
//               </div>
//               <div className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded">
//                 Manufacturing
//               </div>
//             </>
//           )}
//         </div>

//         {/* Toggle Switch */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
//           <p className="text-base font-semibold text-gray-800">
//             Wayside Amenities
//           </p>

//           <div className="flex items-center gap-2">
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={isToggled}
//                 onChange={handleToggle}
//               />
//               <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-all duration-300">
//                 <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 transform peer-checked:translate-x-5"></div>
//               </div>
//             </label>
//             <span className="text-sm font-medium text-gray-800">
//               {isToggled ? 'On' : 'Off'}
//             </span>
//           </div>

//           <p className="text-sm sm:text-base font-semibold text-blue-500 text-center">
//             Path Logistics, Office & Manufacturing
//           </p>
//         </div>
//       </section>
//       <div className="mt--2 mb-6 flex justify-center">
//         <Link
//           href="/Nav_Global_Footprints"
//             className="
//     inline-block 
//     bg-gradient-to-r from-blue-500 to-cyan-400 
//     text-white font-semibold 
//     px-4 py-2 text-sm             /* 📱 Small screen size */
//     sm:px-6 sm:py-3 sm:text-base  /* 💻 Large screen size */
//     rounded-full shadow-lg 
//     hover:scale-105 hover:shadow-xl 
//     transition-transform duration-300
//   "
//         >
//           Footprint (MAP)
//         </Link>
//       </div>

//       <div className="w-full h-[1px] bg-gray-300"></div>
//     </div>
//   );
// };

// export default PanIndiaNetwork;
