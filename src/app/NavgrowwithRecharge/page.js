"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PartnerPage() {
      const images = [
    '/growwithusimage/1.png',
     '/growwithusimage/2.png',
      '/growwithusimage/3.png',
       '/growwithusimage/4.png',
        '/growwithusimage/5.png',
         '/growwithusimage/6.png',
          '/growwithusimage/7.png',
           '/growwithusimage/8.png',
            '/growwithusimage/9.png',
             '/growwithusimage/10.png',
              '/growwithusimage/11.png',
               '/growwithusimage/12.png',
              
                 '/growwithusimage/14.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Loop through images continuously
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);



  return (
    <>
      <Head>
        <title>Partner With Path Recharge | Collaboration Opportunities</title>
        <meta
          name="description"
          content="Partner with Path Recharge to bring innovation, comfort, and growth to India's highways. Join our network of businesses transforming highway experiences."
        />
      </Head>


       {/* 🧭 Section 2 - Breadcrumb + Banner */}



      <div className="w-full text-gray-800">
        
        {/* 🌟 Section 1 - Hero */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 bg-white">
          {/* Text Section */}
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full mt-8 md:mt-0 md:pr-10 text-center md:text-left"
          >
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Partner With  <span className="text-orange-500">Us ..</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              At Path Recharge, we create partnerships that drive mutual growth and
              innovation. Join us to shape the future of highway experiences —
              providing comfort, convenience, and opportunity for every traveller.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 hover:shadow-md transition-all duration-300">
            Building strong alliances for shared success
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0"
          >
           <Image
        src={images[currentIndex]}
        alt="Partner with Path Recharge"
        width={600}
        height={400}
        priority
        className="rounded-lg shadow-md object-cover w-full h-[300px] sm:h-auto max-w-[500px] transition-all duration-500 ease-in-out"
      />
          </motion.div>
        </section>

         
    <div className="text-sm text-gray-200 mb-4 pl-5">
      <span className="opacity-80">Home</span> &gt;
      <span className="text-orange-400 font-medium ml-1">Partner With Us</span>
    </div>

<div className="flex justify-center text-center px-6 pb-5">
  <h2 className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-base leading-relaxed max-w-4xl ">
    At <span className="font-semibold text-orange-300">Path Recharge</span>, we value partnerships that drive mutual growth and innovation. Join us to create exceptional experiences, expand opportunities, and achieve shared success through collaboration.
  </h2>
</div>


    {/* 💡 Section 3 - Reasons to Partner */}
<section className="py-16 px-6 md:px-20 bg-gray-50 flex justify-center">
    
  <div className="bg-[#fff9f2] w-full max-w-7xl rounded-xl shadow-sm border p-10 md:p-16">
    <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12 font-serif">
      Reasons to partner with us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-orange-300">
      {[
        {
          title: "Accessible",
          img: "/growwithrechargeimg/grow2.png",
          desc: "Strategically located along key highways, Path Recharge ensures your business stays connected to a vast network of travellers and commuters.",
        },
        {
          title: "Versatile",
          img: "/growwithrechargeimg/grow1.png",
          desc: "Partner with Path Recharge to set up fuel stations, EV charging points, dining outlets, or hospitality services — all under one trusted brand.",
        },
        {
          title: "Reliable",
          img: "/growwithrechargeimg/grow4.png",
          desc: "Operate your business with the assurance of Path Recharge’s 24x7 support, safety standards, and consistent service reliability.",
        },
        {
          title: "Profitable",
          img: "/growwithrechargeimg/grow3.png",
          desc: "Join the Path Recharge network to grow your business visibility and earn steady, long-term returns through our highway partnership model.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center p-6 md:p-8 transition-all duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-orange-400 mb-5">
            <Image
              src={item.img}
              alt={item.title}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      </div>
    </>
  );
}
