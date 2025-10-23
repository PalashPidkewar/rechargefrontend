'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axiosInstance from '../utils/axiosInstance';
import Image from 'next/image'; // ✅ Import Next Image

export default function Our_BrandPartnersPage() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandLogos = async () => {
      try {
        const res = await axiosInstance.get('/api/brandpartners');
        setLogos(res.data || []);
      } catch (err) {
        console.error('Error fetching brand partners:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBrandLogos();
  }, []);

  return (
    <div>
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white mb-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
              >
                <span className="text-5xl">O</span>ur Brand Partners
                <span className="text-orange-500">..</span>
              </motion.h1>
            </div>
            <div className="text-left max-w-lg">
              <p className="text-gray-400 max-w-3xl text-base lg:pl-8 lg:pr-5 lg:pb-8 pt-4">
                Path Recharge works hand-in-hand with top brands in food & beverage,
                automotive services, and lifestyle retail to offer travelers everything they need on the go.
              </p>
            </div>
          </div>

          {/* Logos Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
            gap-6 items-center justify-center lg:pt-10 
            border-2 border-gray-200 rounded-xl p-5 min-h-[150px] 
            bg-white/90 backdrop-blur-sm 
            shadow-[0_0_25px_rgba(0,0,0,0.25)] transition-all duration-300"
          >
            {loading ? (
              <div className="col-span-full text-center text-gray-500">Loading...</div>
            ) : logos.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No logos available</div>
            ) : (
              logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex justify-center items-center h-18 p-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative w-24 h-16"
                  >
                    <Image
                      src={`${axiosInstance.defaults.baseURL}/${logo.logo_path}`}
                      alt={`Brand-${logo.id}`}
                      fill
                      className="object-contain"
                      unoptimized // ✅ dynamic image fix
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">No Image</text></svg>';
                      }}
                    />
                  </motion.div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer Logo (Right-Aligned) */}
      <div className="flex justify-end items-center px-6 lg:px-30 py-0 mt-[-45]">
        <Image
          src="/Image/pathrechargelogo1.png"
          alt="Path Recharge Logo"
          width={120}
          height={50}
          className="opacity-80 hover:opacity-100 transition duration-300"
        />
      </div>

      {/* Bottom Border */}
      <div className="w-full h-[1px] bg-gray-300 lg:mt-5"></div>
    </div>
  );
}



// ye joo code ha upper running beena api fetch logo ka import kerre ke logo dekhaai huu neche joo code ha voo api fetch hooke dekhe ga 
// 'use client';


// import { motion } from 'framer-motion';

// const logos = [
//   "/brands/a.jpg",
//   "/brands/image-1723267733872.png",
//   "/brands/image-1723267818621.png",
//   "/brands/image-1723267876385.png",
//   "/brands/image-1723267914308.png",
//   "/brands/image-1723267939971.png",
//   "/brands/image-1723267964797.png",
//   "/brands/image-1723268007112.png",
//   "/brands/image-1723268037506.png",
//   "/brands/image-1723268070044.png",
//   "/brands/image-1723268098037 (1).png",
//   "/brands/image-1723268124023.png",
//   "/brands/ganis_icecream.png",
//   "/brands/bikanerwala.png",
// ];

// export default function Our_BrandPartners() {
//   return (
//     <div>
//       <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white  mb-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Heading */}
// <div className="flex flex-col md:flex-row justify-between mb-12">
//   <div className="text-left">
//     <motion.h1
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}

//       className="text-4xl font-bold fonty  text-[#0078AE]  lg:pl-8">
//       <span className="text-5xl">O</span>ur Brand Partners
//       <span className="text-orange-500">.</span>
//     </motion.h1>


//   </div>
//   <div className="text-left max-w-lg">
//     <p className="text-gray-400 max-w-3xl text-base lg:pl-8 lg:pr-5 lg:pb-8">
//       Path Recharge works hand-in-hand with top brands in food & beverage, automotive services, and lifestyle retail to offer travelers everything they need on the go. 
//     </p>
//   </div>
// </div>

//           {/* Animated Grid */}
//           <motion.div
//             className="relative"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ staggerChildren: 0.1 }}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center lg:pt-10 border-2 border-gray-200 rounded-md p-5">
//               {logos.map((logo, index) => (
//                 <motion.div
//                   key={index}
//                   variants={{
//                     hidden: { opacity: 0, y: 30 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   transition={{ duration: 0.5, ease: 'easeOut' }}
//                   className="flex justify-center items-center h-16"
//                 >
//                   <motion.img
//                     src={logo}
//                     alt={`Brand logo ${index + 1}`}
//                     className="h-full object-contain transition duration-500 hover:scale-105"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Decorative Cut Line + Center Logo */}
//             <div className="absolute bottom-0 right-20 h-[2px] w-32 bg-white z-10"></div>
//             <div className="absolute bottom-0 right-17 translate-y-1/2 z-20">
//               <img src="/brands/logo.png" alt="Cut center icon" className="h-15 w-auto" />
//             </div>

//             {/* Decorative Top Tag */}
//             <div className="absolute top-0 left-20 h-[2px] w-37 bg-white z-10"></div>
//             <div className="absolute top-[-2rem] left-14 z-50 px-3 py-1 mt-5 ml-5">
//               <h2 className="text-sm font-bold bg-gradient-to-r from-orange-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
//   WAYSIDE AMENITIES
// </h2>

//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Bottom Border */}
//       <div className="w-full h-[1px] bg-gray-300 lg:mt-5"></div>
//     </div>
//   );
// }
// upper code running condition me h vo static logo show kerra h import vaale 


