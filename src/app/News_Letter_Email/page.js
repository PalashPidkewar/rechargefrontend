// import { motion,useInView } from 'framer-motion';
// import { useRef } from 'react';

// export default function Newsletter_Email() {


//     const headingRef = useRef(null);
//   const headingInView = useInView(headingRef, { once: true });

//   const mapRef = useRef(null);
//   const mapInView = useInView(mapRef, { once: true });

//   return (
//     <section className="bg-white py-12 px-4 lg:mt-15 mt-8">
//           <div className="text-left">
//                     <motion.h1
//                       ref={headingRef}
//                       initial={{ opacity: 0, y: -30 }}
//                       animate={headingInView ? { opacity: 1, y: 0 } : {}}
//                       transition={{ duration: 0.8 }}
//                       className="text-4xl font-bold fonty text-[#0078AE] lg:pl-8"
//                     >
//                       <span className="text-5xl">N</span>ews Letter
           
//                       <span className="text-orange-500">.</span>
//                     </motion.h1>
//                   </div>
//       <div className="max-w-7xl mx-auto relative">
//         {/* Outer container allows overflow */}
//         <div className="relative z-0 flex flex-col lg:flex-row bg-green-200 rounded-lg overflow-visible">

//           {/* Image Container */}
//           <div className="w-full lg:w-1/2 relative flex items-start justify-center px-4 lg:pl-6">
//             <div className="relative -mt-12 z-10 w-full lg:max-w-[90%]">
//               <img
//                 src="/NewsletterEmail/path Rechahrges news_img.jpg"
//                 alt="Newsletter"
//                 className="w-full h-auto object-cover rounded-lg shadow-md"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center mt-6 lg:mt-0">
//             <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">
//               Newsletter
//             </h5>
//             <h2 className="text-2xl font-bold text-gray-900 mt-2">
//               Receive the latest Path Recharge updates directly in your inbox.
//             </h2>
//             <p className="text-sm text-gray-700 mt-2">
//               Get the Path India Ltd news first. Keep up with our latest news, investor updates, and media releases.
//             </p>

//             {/* Form */}
//             <form className="mt-6 flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email Address"
//                 className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// yee vaala beena newroom ka code h 
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
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance"; // use instance
import { FaInstagram } from "react-icons/fa";

export default function Newsletter_Email() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const [showNewsroom, setShowNewsroom] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // ✅ Fetch Newsroom data from API
  useEffect(() => {
    if (showNewsroom) {
      axiosInstance
        .get("/api/news/get") // baseURL auto added
        .then((res) => {
          setNewsData(res.data);
          setCurrentIndex(0);
        })
        .catch((err) => console.error("Error fetching news:", err));
    }
  }, [showNewsroom]);

  // ✅ Rotate news every 3 seconds
  useEffect(() => {
    if (newsData.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [newsData]);

  const currentNews = newsData[currentIndex];

  // Newsletter form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setMessage('Please enter your email');

    setLoading(true);
    setMessage('');

    try {
      const res = await axiosInstance.post("/api/newsletter", { email });
      setMessage(res.data.message);
      setEmail(''); // Clear input after success
    } catch (err) {
      console.error('Newsletter error:', err);
      setMessage(err.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-10 px-4 lg:mt-2 mt-3 relative"
        style={{
          backgroundImage: "url('/homecontactimg/gpt4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading + Toggle Button */}
          <div className="flex flex-row items-center justify-between lg:pl-10 flex-wrap gap-3 w-full mb-25">
            <motion.h1
              ref={headingRef}
              initial={{ opacity: 0, y: -30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-4xl md:text-5xl font-bold fonty text-[#0078AE]"
            >
              {showNewsroom ? (
                <>
                  <span className="text-5xl sm:text-5xl">N</span>ews Room
                  <span className="text-orange-500">..</span>
                </>
              ) : (
                <>
                  <span className="text-5xl sm:text-5xl">N</span>ews Letter
                  <span className="text-orange-500">..</span>
                </>
              )}
            </motion.h1>

            <button
              type="button"
              onClick={() => setShowNewsroom((prev) => !prev)}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              {showNewsroom ? "Newsletter →" : "NewsRoom →"}
            </button>
          </div>

          <div className="relative z-0 flex flex-col lg:flex-row bg-green-200 rounded-lg overflow-visible border border-gray-300 shadow-2xl shadow-gray-400/50 backdrop-blur-sm transition-all duration-500 hover:shadow-gray-500/60 hover:scale-[1.01]">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative flex items-start justify-center px-4 lg:pl-6 mb-6 lg:mb-5">
              <div className="relative -mt-14 z-10 w-full lg:max-w-[90%] h-[300px] sm:h-[350px] lg:h-[300px]">
                <img
                  src={
                    showNewsroom
                      ? currentNews?.image || "/NewsletterEmail/path Rechahrges news_img.jpg"
                      : "/NewsletterEmail/path Rechahrges news_img.jpg"
                  }
                  alt={showNewsroom ? currentNews?.title || "Newsroom" : "Newsletter"}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center mt-0">
              {showNewsroom ? (
                <>
                  <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">Newsroom</h5>
                  {newsData.length === 0 ? (
                    <p className="text-sm text-gray-700 mt-2">Loading news...</p>
                  ) : (
                    <div key={currentNews.id} className="relative">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">{currentNews.title}</h2>
                      <p className="text-sm text-gray-700 mt-2">{currentNews.description}</p>
                      <div className="flex justify-end mt-4">
                        <a href="https://www.instagram.com/path_india/?hl=en" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform">
                          <FaInstagram size={24} />
                        </a>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">Newsletter</h5>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                    Receive the latest Path Recharge updates directly in your inbox.
                  </h2>
                  <p className="text-sm text-gray-700 mt-2">
                    Get the Path India Ltd news first. Keep up with our latest news,
                    investor updates, and media releases.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    />
                    <button type="submit" disabled={loading}
                      className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition">
                      {loading ? 'Submitting...' : 'Subscribe'}
                    </button>
                  </form>

                  {message && (
                    <p className="mt-2 text-sm text-gray-700">{message}</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-gray-300 lg:mt-5"></div>
    </>
  );
}



// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function Newsletter_Email() {
//   const headingRef = useRef(null);
//   const headingInView = useInView(headingRef, { once: true });

//   return (
//     <section className="bg-white py-12 px-4 lg:mt-2 mt-3">
//       {/* ✅ Heading - Top Left like Pan India */}
//       <div className="text-left lg:pl-25 lg:pb-15">
//         <motion.h1
//           ref={headingRef}
//           initial={{ opacity: 0, y: -30 }}
//           animate={headingInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold fonty text-[#0078AE] lg:pl-10"
//         >
//           <span className="text-5xl">N</span>ews Letter
//           <span className="text-orange-500">.</span>
//         </motion.h1>
//       </div>

//       <div className="max-w-7xl mx-auto relative mt-25 lg:mt-8">
//         {/* Outer container */}
//         <div className="relative z-0 flex flex-col lg:flex-row bg-green-200 rounded-lg overflow-visible">
          
//           {/* ✅ Left Image */}
//           <div className="w-full lg:w-1/2 relative flex items-start justify-center px-4 lg:pl-6 mb-5">
//             <div className="relative -mt-12 z-10 w-full lg:max-w-[90%]">
//               <img
//                 src="/NewsletterEmail/path Rechahrges news_img.jpg" // ✅ clean path
//                 alt="Newsletter"
//                 className="w-full h-auto object-cover rounded-lg shadow-md"
//               />
//             </div>
//           </div>

//           {/* ✅ Right Content */}
//           <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center mt-6 lg:mt-0">
//             <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">
//               Newsletter
//             </h5>
//             <h2 className="text-2xl font-bold text-gray-900 mt-2">
//               Receive the latest Path Recharge updates directly in your inbox.
//             </h2>
//             <p className="text-sm text-gray-700 mt-2">
//               Get the Path India Ltd news first. Keep up with our latest news,
//               investor updates, and media releases.
//             </p>

//             {/* ✅ Form */}
//             <form className="mt-6 flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


