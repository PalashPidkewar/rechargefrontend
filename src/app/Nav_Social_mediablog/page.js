"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function NewsroomSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Fetch Newsroom data from API
  useEffect(() => {
    axiosInstance
      .get("/api/news/get")
      .then((res) => {
        setNewsData(res.data);
        setCurrentIndex(0);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

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

  return (
    <>
      <section
        className="py-10 px-4 lg:mt-2 mt-3 relative"
        style={{
          backgroundImage: "url('/homecontactimg/gpt4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex flex-row items-center justify-between lg:pl-10 flex-wrap gap-3 w-full mb-8">
            <motion.h1
              ref={headingRef}
              initial={{ opacity: 0, y: -30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-4xl md:text-5xl font-bold fonty text-[#0078AE]"
            >
              <span className="text-5xl sm:text-5xl">N</span>ews Room
              <span className="text-orange-500">..</span>
            </motion.h1>
          </div>

          {/* News Content */}
          <div className="relative z-0 lg:mt-25 mt-20 flex flex-col lg:flex-row bg-green-200 rounded-lg overflow-visible border border-gray-300 shadow-2xl shadow-gray-400/50 backdrop-blur-sm transition-all duration-500 hover:shadow-gray-500/60 hover:scale-[1.01]">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative flex items-start justify-center px-4 lg:pl-6 mb-6 lg:mb-5">
              <div className="relative -mt-14 z-10 w-full lg:max-w-[90%] h-[300px] sm:h-[350px] lg:h-[300px]">
                <img
                  src={
                    currentNews?.image ||
                    "/NewsletterEmail/path Rechahrges news_img.jpg"
                  }
                  alt={currentNews?.title || "Newsroom"}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center mt-0">
              <h5 className="text-sm font-semibold tracking-widest uppercase text-[#0078AE]">
                Newsroom
              </h5>

              {newsData.length === 0 ? (
                <p className="text-sm text-gray-700 mt-2">Loading news...</p>
              ) : (
                <div key={currentNews?.id} className="relative">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                    {currentNews?.title}
                  </h2>
                  <p className="text-sm text-gray-700 mt-4">
                    {currentNews?.description}
                  </p>



                  {/* ✅ Social Icons - Responsive */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-end mt-4 space-x-4 lg:space-x-0 lg:space-y-3">
                    <a
                      href="https://www.instagram.com/path_india/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:scale-110 transition-transform"
                    >
                      <FaInstagram size={24} />
                    </a>

                    <a
                      href="https://www.youtube.com/@PathRecharge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:scale-110 transition-transform"
                    >
                      <FaYoutube size={24} />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/path-recharge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:scale-110 transition-transform"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gray-300 lg:mt-5"></div>
    </>
  );
}
