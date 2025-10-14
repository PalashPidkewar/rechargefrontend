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

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home_aboutus = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-5"
      style={{ backgroundImage: "url('/homecontactimg/gpt4.jpg')" }}
     >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content Section */}
      <div className="relative">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold fonty text-[#0078AE] mb-4 sm:mb-6"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl">A</span>bout Us
            <span className="text-orange-500">.</span>
          </motion.h2>
        </div>

        {/* Section Content */}
        <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
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
            <div className="md:col-span-3 flex justify-center mt-6 md:mt-0 lg:ml-10">
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

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Home_aboutus;
