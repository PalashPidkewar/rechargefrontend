'use client';

import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Contact({ speed = 22000 }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult('Sending...');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('access_key', '7de05cde-5699-4aa8-954b-6b23776b340f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // logos
  const initial = [
    { id: 1, src: "/pathgrouplogo/logo1.png", alt: "Logo 1" },
    { id: 2, src: "/pathgrouplogo/logo2.png", alt: "Logo 2" },
    { id: 3, src: "/pathgrouplogo/logo3.png", alt: "Logo 3" },
    { id: 4, src: "/pathgrouplogo/logo4.png", alt: "Logo 4" },
    { id: 5, src: "/pathgrouplogo/logo5.png", alt: "Logo 5" },
  ];

  const [logos] = useState([...initial, ...initial]); // duplicate for seamless scroll

  // inject scroll animation CSS
  useEffect(() => {
    const styleId = "pathgroup-scroll-style";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      @keyframes pathgroupScroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .pathgroup-scroll {
        animation: pathgroupScroll ${speed}ms linear infinite;
        will-change: transform;
      }
      .pathgroup-paused { animation-play-state: paused; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, [speed]);

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="px-4 py-10 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#0078AE]">
            GET IN TOUCH WITH PATH RECHARGE
          </h2>
          <p className="text-gray-600 mt-2">
            We value communication and are eager to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-xl">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-100 p-6 rounded-lg space-y-4"
          >
            <Image
              src="/Image/logo.png"
              alt="PATH Recharge Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-gray-700">Prakash Asphaltings & Toll Highways (India) Ltd.</p>
            <p className="text-gray-700">
              <strong>Address:</strong> 76, Mall Rd, Dr. Ambedkar Nagar, MHOW, Indore, MP
            </p>
            <p className="text-gray-700"><strong>Phone:</strong> +91-7324-350100</p>
            <p className="text-gray-700"><strong>Email:</strong> path@pathltd.com</p>
            <p className="text-gray-700"><strong>CIN:</strong> U45203MP1996PLC011034</p>

            <div className="pt-4 flex gap-4">
              <a href="https://www.facebook.com/pathltd/" target="_blank" rel="noreferrer" className="text-blue-600 text-xl hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/path_india/" target="_blank" rel="noreferrer" className="text-pink-500 text-xl hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/path-india-ltd-/?originalSubdomain=in" target="_blank" rel="noreferrer" className="text-blue-700 text-xl hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <h1 className="text-xl font-semibold text-gray-800">Contact Us</h1>

            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition flex items-center gap-2"
            >
              {loading ? <ClipLoader size={20} color="white" /> : 'Send Message'}
            </button>

            <p className="text-sm text-gray-600">{result}</p>
          </motion.form>
        </div>

        {/* Company Message */}
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-lg shadow-md"
          >
            Path Recharge – Wayside Amenities is a value-driven initiative by PATH India Limited, aimed at enhancing the travel experience of highway commuters across India. Our mission is to offer safe, clean, and convenient rest and service points on national and state highways, ensuring comfort and accessibility for all travelers.
          </motion.p>
        </div>

        {/* Google Map */}
        <div className="mt-12 px-4 max-w-6xl mx-auto">
          <div>
            <h1 className="font-bold text-gray-800 mb-2 text-xl">Head Office - Mhow</h1>
            <iframe
              title="Path India Ltd Location"
              src="https://www.google.com/maps?q=76,+Mall+Rd,+Dr.+Ambedkar+Nagar,+MHOW,+Indore,+MP&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* PATH GROUP SECTION */}
      <section className="w-full flex flex-col items-center py-10 bg-gradient-to-b from-gray-50 to-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent mb-6">
          PATH GROUP
        </h2>

        <div className="relative w-[92%] sm:w-[86%] md:w-[75%] lg:w-[50%] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_8px_40px_rgba(0,0,0,0.08)] border border-[#f5f5f5]/60 overflow-hidden transition-all duration-500 hover:shadow-[0_6px_30px_rgba(0,0,0,0.25),0_10px_50px_rgba(0,0,0,0.1)] hover:scale-[1.01]">
  <div
    className="flex items-center gap-8 pathgroup-scroll"
    onMouseEnter={(e) => e.currentTarget.classList.add("pathgroup-paused")}
    onMouseLeave={(e) => e.currentTarget.classList.remove("pathgroup-paused")}
    style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
  >
    {logos.map((logo, idx) => (
      <div
        key={`${logo.id}-${idx}`}
        className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 flex items-center justify-center"
      >
        <div className="relative w-full h-12 sm:h-14 md:h-16 lg:h-20 transition-transform duration-500 hover:scale-105">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 160px"
            className="object-contain"
          />
        </div>
      </div>
    ))}
  </div>

  {/* Premium bottom shadow glow */}
  <div className="pointer-events-none absolute -bottom-6 left-6 right-6 h-8 rounded-xl blur-[20px] bg-gradient-to-b from-[#d4af37]/30 via-black/10 to-transparent" />
</div>

      </section>
    </>
  );
}
