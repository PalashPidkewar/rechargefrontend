

'use client';
import React, { useState } from 'react';
import { GiProgression } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { MdIncompleteCircle } from "react-icons/md";
import { FaList } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
const Images=[
  {img:'/Wayside Animities/Baran -Shivpuri (Khushadpura-Shabad)-1227.jpg',  Title:"Baran-Shivpuri (Khushadpura-Shabad)-1227+200-LHS",ProjectDetail:"This way side Amenity is situated at LHS of Baran-Shivpuri (Khushadpura-Shabad) -1227+200 - LHS on chainage - 1227.200 km , in Rajasthan for duration 15 years.",ClientName:"	NHAI", State:"Rajesthan",Length:"1350kms", Duration:"15 Years",EndDate:"	30-12-2037",Status:"	Under Operation"},
  {img:'/Wayside Animities/Baran-Shivpuri (Pahadi) -1194+300-RHS.jpg', Title:"Baran-Shivpuri (Pahadi) -1194+300-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Baran-Shivpuri-(Pahadi) 1194+300-RHS on chainage - 1194.300 km , in Rajasthan for duration 15 years.",ClientName:"	NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15 Years",EndDate:"	30-12-2037",Status:"Under Operation"},
 
  {img:'/Wayside Animities/DME -493+104-LHS.jpg', Title:"DME -493+104-LHS", ProjectDetail:"	This way side Amenity is situated at LHS of Delhi Mumbai Expressway on chainage - 493.104 km , in Garoth tehsil, Dist.-Mandsaur, Madhya Pradesh for duration 15 years.",ClientName:"	NHAI", State:"Madhya Pradesh",Length:"1350kms", Duration:"	15 Years",EndDate:"30-12-2037",Status:"	In Progress"},
  {img:'/Wayside Animities/DME-493+104-RHS.jpg', Title:"DME -493+104-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 493.104 km , in Garoth tehsil , Dist.-Mandsaur, Madhya Pradesh for duration 15 years.",ClientName:"	NHAI", State:"Madhya Pradesh",Length:"1350kms", Duration:"	15 Years",EndDate:"30-12-2037",Status:"	In Progress"},
  {img:'/Wayside Animities/DME-99+000-LHS.jpg', Title:"DME-99+000-LHS", ProjectDetail:"This way side Amenity is situated at LHS of Delhi Mumbai Expressway on chainage - 99 km , in (Alwar)Rajasthan with 4 Restaurant , 1 Retail Shop & 1 Petrol pump for duration 15 years",ClientName:"	NHAI", State:"	Rajasthan",Length:"1350 kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  {img:'/Wayside Animities/DME-99+000-RHS.jpg', Title:"DME-99+000-RHS", ProjectDetail:"This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 99.000 km , with 4 Restaurant , 1 Petrol pump & 1 Retail shop in (Alwar)Rajasthan for duration 15 years.",ClientName:"	NHAI", State:"	Rajasthan",Length:"1350 kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  // {img:F,Title:"DME-125+000-LHS", ProjectDetail:"	This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 125 km , in (Alwar) Rajasthan with 3 restaurant ,1 Petrol pump & 1 Ev charging for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  {img:'/Wayside Animities/DME-125+000-RHS.jpg', Title:"DME-125+000-RHS",ProjectDetail:"This way side Amenity is situated at LHS of Delhi Mumbai Expressway on chainage - 125 km , in (Alwar) Rajasthan with 3 restaurant ,1 Petrol pump & 1 Ev charging for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  {img:'/Wayside Animities/DME-147 +000-LHS.jpg',Title:"DME-147+000-LHS", ProjectDetail:"This way side Amenity is situated at LHS of Delhi Mumbai Expressway on chainage - 147 km , in (Alwar) Rajasthan for duration 15 years .",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  {img:'/Wayside Animities/DME-147+000-RHS.jpg',Title:"DME-147+000-RHS", ProjectDetail:"This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 147 km , in (Alwar) Rajasthan for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  {img:'/Wayside Animities/DME-493+104-RHS.jpg',Title:"DME-493+104-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 493.104 km , in Garoth tehsil , Dist.-Mandsaur, Madhya Pradesh for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Operation"},
  {img:'/Wayside Animities/DME-646+020-LHS.jpg',Title:"DME-646+020-LHS", ProjectDetail:"This way side Amenity is situated at LHS of Delhi Mumbai Expressway on chainage - 646.020 km , in Madhya Pradesh for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"In Progress"},
  {img:'/Wayside Animities/DME-646+020-RHS.jpg',Title:"DME-679+460-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 679.460 km , in Madhya Pradesh for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"In Progress"},
  {img:'/Wayside Animities/DME-679+240-LHS.jpg', Title:"DME-679+460-LHS", ProjectDetail:"	This way side Amenity is situated at LHS of Delhi Mumbai Expressway on chainage - 679.460 km , in Madhya Pradesh for duration 15 years.",ClientName:"	NHAI", State:"Mhadhya Pradesh",Length:"1350kms", Duration:"15km",EndDate:"30-12-2037",Status:"In Progress"},
  {img:'/Wayside Animities/DME-679+460-RHS.jpg',Title:"DME-679+460-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 679.460 km , in Madhya Pradesh for duration 15 years.",ClientName:"NHAI", State:"	Rajasthan",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"In Progress"},
  {img:'/Wayside Animities/EPE-39-LHS.jpg',Title:"EPE-39+500-LHS", ProjectDetail:"This way side Amenity is situated at LHS of Eastern Peripheral Expressway on chainage - 39.500 km , in Ghajiabad , Uttar Pradesh for duration 30 years.",ClientName:"NHAI", State:"	Uttar Pradesh",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Construction"},
  {img:'/Wayside Animities/EPE-39+500-RHS.jpg', Title:"EPE-39+500-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Eastern Peripheral Expressway on chainage - 39.500 km , in Ghajiabad , Uttar Pradesh for duration 30 years.",ClientName:"NHAI",  State:"Uttar pradesh",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"Under Construction"},
  {img:'/Wayside Animities/EPE-95+575-LHS.jpg', Title:"EPE-95+575-LHS", ProjectDetail:"This way side Amenity is situated at LHS of Eastern Peripheral Expressway on chainage - 95.575 km , in Uttar Pradesh for duration 30 years.",ClientName:"NHAI",  State:"Uttar pradesh",Length:"1350kms", Duration:"30years",EndDate:"	30-12-2052",Status:"Under Construction"},
  {img:'/Wayside Animities/EPE-95+575-RHS.jpg',Title:"EPE-95+575-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Eastern Peripheral Expressway on chainage - 95.575 km , in Uttar Pradesh for duration 30 years.",ClientName:"NHAI",  State:"Uttar pradesh",Length:"1350kms", Duration:"30years",EndDate:"	30-12-2052",Status:"Under Construction"},
  {img:'/Wayside Animities/Jhansi-Kanpur(Bhognipur) 258+260-RHS.jpg', Title:"Jhansi- Kanpur (Bhognipur)258+260-RHS", ProjectDetail:"	This way side Amenity is situated at RHS of Jhansi-Kanpur highway on chainage - 258.260 km , in Bhognipur Tehsil , Kanpur - Dehat Dist , Uttar Pradesh for duration 30 years.",ClientName:"NHAI", State:"Uttar Pradesh",Length:"228kms", Duration:"30years",EndDate:"	18-08-2052",Status:"Under Construction"},
  {img:'/Wayside Animities/Jhansi-Kanpur(Fatehpur)-548+155-lhs.jpg', Title:"Jhansi- Kanpur (Fatehpur)-548+155-LHS", ProjectDetail:"This way side Amenity is situated at LHS of Jhansi-Prayagraj highway on chainage - 548.155 km in Fatehpur Dist. Uttar Pradesh , for duration 30 years.",ClientName:"NHAI", State:"Uttar Pradesh",Length:"228kms", Duration:"30years",EndDate:"	18-08-2052",Status:"Under Construction"},
  {img:'/Wayside Animities/Jhansi-kanpur(Girthan)-198+900-LHS.jpg', Title:"Jhansi- Kanpur (Girthan)-198+900-LHS", ProjectDetail:"	This way side Amenity is situated at LHS of Jhansi-Kanpur highway on chainage - 258.260 km , in Girthan Dist , Uttar Pradesh for duration 30 years.",ClientName:"NHAI", State:"Uttar Pradesh",Length:"228kms", Duration:"30years",EndDate:"	18-08-2052",Status:"Under Construction"},
  { img:'/Wayside Animities/Jhansi-Kanpur(Gulara)123+200-RHS.jpg', Title:"Jhansi- Kanpur (Gulara)123+200-RHS", ProjectDetail:"This way side Amenity is situated at RHS of Jhansi- Kanpur 123+200-RHS highway on chainage - 123.200 km , in Gulara Dist. Uttar Pradesh for duration 30 years.",ClientName:"NHAI", State:"Uttar Pradesh",Length:"228kms", Duration:"30years",EndDate:"	18-08-2052",Status:"Under Operation"},
  { img:'/Wayside Animities/020rhs.jpg', Title:"DME-646+020-RHS", ProjectDetail:"This way side Amenity is situated at RHS of Delhi Mumbai Expressway on chainage - 646.020 km , in Madhya Pradesh for duration 15 years.",ClientName:"NHAI", State:"Madhya Pradesh",Length:"1350kms", Duration:"15years",EndDate:"	30-12-2037",Status:"In Progress"},
]


function Wayside() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null); // ✅ For Modal

  const filteredImages =
    filter === 'All'
      ? Images
      : Images.filter((item) =>
          item.Status?.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <>
      <div className="p-4 pt-5">
          <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}

                className="text-4xl font-bold fonty  text-[#0078AE]  lg:pl-8">
                <span className="text-5xl">O</span>ur Projects
                <span className="text-orange-500">.</span>
              </motion.h1>


            </div>
        {/* 🔸 Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 pt-5">
          <button
            className="flex items-center px-6 py-3 bg-gray-400 rounded-md hover:bg-gray-300 text-black"
            onClick={() => setFilter('All')}
          >
            <FaList className="mr-2" /> ALL
          </button>

          <button
            className="flex items-center px-6 py-3 bg-yellow-300 rounded-md hover:bg-yellow-500 text-black"
            onClick={() => setFilter('In Progress')}
          >
            <GiProgression className="mr-2" /> In Progress
          </button>

          <button
            className="flex items-center px-6 py-3 bg-rose-300 rounded-md hover:bg-rose-500 text-black"
            onClick={() => setFilter('Under Construction')}
          >
            <LuConstruction className="mr-2" /> Under Construction
          </button>

          <button
            className="flex items-center px-6 py-3 bg-green-300 rounded-md hover:bg-green-500 text-black"
            onClick={() => setFilter('Under Operation')}
          >
            <FaGears className="mr-2" /> Under Operation
          </button>

          <button
            className="flex items-center px-6 py-3 bg-blue-300 rounded-md hover:bg-blue-500 text-black"
            onClick={() => setFilter('Complete')}
          >
            <MdIncompleteCircle className="mr-2" /> Complete
          </button>
        </div>

        {/* 🔸 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.Title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-orange-500 font-semibold text-sm">
                  {item.State}
                </span>
                <h2 className="text-lg font-bold mt-1 text-gray-700">
                  {item.Title}
                </h2>
                <button
                  className="text-blue-500 hover:text-red-800 mt-2 text-sm "
                  onClick={() => setSelected(item)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔸 Modal View */}
 {selected && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={() => setSelected(null)}
  >
    <div
      className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg text-black"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
        onClick={() => setSelected(null)}
      >
        ✕
      </button>
      <img
        src={selected.img}
        alt={selected.Title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{selected.Title}</h2>
      <p className="text-black mb-2">
        <strong>Project Detail:</strong> {selected.ProjectDetail}
      </p>
      <p><strong>Client:</strong> {selected.ClientName}</p>
      <p><strong>State:</strong> {selected.State}</p>
      <p><strong>Length:</strong> {selected.Length}</p>
      <p><strong>Duration:</strong> {selected.Duration}</p>
      <p><strong>End Date:</strong> {selected.EndDate}</p>
      <p><strong>Status:</strong> {selected.Status}</p>
    </div>
  </div>
)}

    </>
  );
}

export default Wayside;




// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function Newsletter_Email() {
//   const headingRef = useRef(null);
//   const headingInView = useInView(headingRef, { once: true });

//   return (
//     <section
//       className="py-12 px-4 lg:mt-2 mt-3 relative"
//       style={{
//         backgroundImage: "url('/homecontactimg/gpt4.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Optional overlay for readability */}
//       <div className="absolute inset-0 bg-white/60"></div>

//       <div className="relative z-10">
//         {/* ✅ Heading - Top Left like Pan India */}
//         <div className="text-left lg:pl-25 lg:pb-15">
//           <motion.h1
//             ref={headingRef}
//             initial={{ opacity: 0, y: -30 }}
//             animate={headingInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="text-4xl font-bold fonty text-[#0078AE] lg:pl-10"
//           >
//             <span className="text-5xl">N</span>ews Letter
//             <span className="text-orange-500">.</span>
//           </motion.h1>
//         </div>

//         <div className="max-w-7xl mx-auto relative mt-25 lg:mt-8">
//           {/* Outer container */}
//           <div className="relative z-0 flex flex-col lg:flex-row bg-green-200 rounded-lg overflow-visible">
            
//             {/* ✅ Left Image */}
//             <div className="w-full lg:w-1/2 relative flex items-start justify-center px-4 lg:pl-6 mb-5">
//               <div className="relative -mt-12 z-10 w-full lg:max-w-[90%]">
//                 <img
//                   src="/NewsletterEmail/path Rechahrges news_img.jpg"
//                   alt="Newsletter"
//                   className="w-full h-auto object-cover rounded-lg shadow-md"
//                 />
//               </div>
//             </div>

//             {/* ✅ Right Content */}
//             <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center mt-6 lg:mt-0">
//               <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">
//                 Newsletter
//               </h5>
//               <h2 className="text-2xl font-bold text-gray-900 mt-2">
//                 Receive the latest Path Recharge updates directly in your inbox.
//               </h2>
//               <p className="text-sm text-gray-700 mt-2">
//                 Get the Path India Ltd news first. Keep up with our latest news,
//                 investor updates, and media releases.
//               </p>

//               {/* ✅ Form */}
//               <form className="mt-6 flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>

// {/* 
//           button per click kerre too ye vaala part scroll hooke ye dekhna chia neecje ka newroom upper btn per newletter lekhe dekhna chia usse per click new letter vaala div section dena chia */}
//               {/* ✅ Right Content */}
//             <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center mt-6 lg:mt-0">
//               <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">
//                 NewsRoom
//               </h5>
//               <h2 className="text-2xl font-bold text-gray-900 mt-2">
//                 Receive the latest Path Recharge updates directly in your inbox.
//               </h2>
//               <p className="text-sm text-gray-700 mt-2">
//                 Get the Path India Ltd news first. Keep up with our latest news,
//                 investor updates, and media releases.
//               </p>

              
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }